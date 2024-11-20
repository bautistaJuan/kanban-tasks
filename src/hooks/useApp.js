import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
const useApp = () => {
  // getAuth devuelve un objeto con la información del usuario en la sesión actual
  // es como si accedieramos asi: getAuth().currentUser.uid
  const {
    currentUser: { uid },
  } = getAuth();
  const boardsColRef = collection(db, `users/${uid}/boards`);

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
        createdAt: new Date().toLocaleString("es-ES"),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const subscribeToBoards = callback => {
    // onSnapshot retorna una función para cancelar la suscripción
    const unsubscribe = onSnapshot(
      boardsColRef, // Referenciamos a la colección de boards
      snapshot => {
        // Traemos todos los documentos de la colección
        const boards = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        callback(boards); // Llamamos a la función callback con los boards que desde "..\index.jsx" van a estar esperando
      },
      error => {
        console.error("Error listening to boards:", error);
      }
    );
    return unsubscribe;
  };
  return { createBoard, subscribeToBoards };
};

export default useApp;
