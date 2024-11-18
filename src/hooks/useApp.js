import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
const useApp = () => {
  // getAuth devuelve un objeto con la información del usuario en la sesión actual
  // es como si accedieramos asi: getAuth().currentUser.uid
  const {
    currentUser: { uid },
  } = getAuth();

  // createBoard es una hook que nos permite crear un board en la base de datos de firestore
  const createBoard = async ({ name, color }) => {
    const colRef = collection(db, `users/${uid}/boards`);

    try {
      // addDoc es una función que nos permite agregar un documento a una colección
      // la función recibe como primer argumento la colección a la que queremos agregar el documento
      // y como segundo argumento un objeto con los datos que queremos agregar
      await addDoc(colRef, {
        name,
        color,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { createBoard };
};

export default useApp;
