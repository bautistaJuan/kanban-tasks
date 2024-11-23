import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import useStore from "../store";
const useApp = () => {
  // getAuth devuelve un objeto con la información del usuario en la sesión actual
  // es como si accedieramos asi: getAuth().currentUser.uid
  const {
    currentUser: { uid },
  } = getAuth();
  const boardsColRef = collection(db, `users/${uid}/boards`);
  const { setBoards, addBoard } = useStore();
  // createBoard es una hook que nos permite crear un board en la base de datos de firestore
  const createBoard = async ({ name, color }) => {
    // Esto crea automáticamente la colección si no existe, lo unico que tenemos que hacer es pasarle el nombre de la colección
    // y el uid del usuario para hacer referencia a la colección.
    try {
      // addDoc es una función que nos permite agregar un documento a una colección
      // la función recibe como primer argumento la colección a la que queremos agregar el documento
      // y como segundo argumento un objeto con los datos que queremos agregar
      // acá creamos una collection (Objeto) dentro de la colección users/uid/boards/NUEVA-COLECCION-CREADA
      await addDoc(boardsColRef, {
        name,
        color,
        createdAt: serverTimestamp(),
      });
      addBoard({
        name,
        color,
        createdAt: new Date().toLocaleDateString("es-AR"),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const fetchBoards = async isLoading => {
    // Actualizamos el estado de carga en "/Dashboard/index.jsx" (donde se llama a esta función)
    try {
      // Escuchamos los cambios en la colección boards
      // onSnapshot(
      //   boardsColRef, // Referenciamos a la colección de boards
      //   snapshot => {
      //     // Traemos todos los documentos de la colección
      //     const boards = snapshot.docs.map(doc => ({
      //       ...doc.data(),
      //       id: doc.id,
      //       createdAt: doc.data().createdAt
      //         ? doc.data().createdAt.toDate().toLocaleDateString("es-AR")
      //         : "Fecha no disponible",
      //     }));
      //     setBoards(boards); // Actualizamos la store con los boards
      //   },
      //   error => {
      //     console.error("Error listening to boards:", error);
      //   }
      // );
      const q = query(boardsColRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const boards = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt.toDate().toLocaleDateString("es-AR"),
      }));
      setBoards(boards);
    } catch (err) {
      console.log(err);
    } finally {
      if (isLoading) isLoading(false);
    }
  };
  return { createBoard, fetchBoards };
};

export default useApp;
