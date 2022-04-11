import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
    getDatabase, ref as DbRef,
    push, set, child, onValue,
    remove, get, update
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import {
    getStorage, ref as StRef, listAll,
    uploadBytesResumable, getDownloadURL,
    deleteObject
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import {
  getAuth, updateProfile, updateEmail, updatePassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyADvq7-MBaEJOWYc4dLeOCluu0tbu6gwLU",
  authDomain: "fire-9-nnn7.firebaseapp.com",
  databaseURL: "https://fire-9-nnn7-default-rtdb.firebaseio.com",
  projectId: "fire-9-nnn7",
  storageBucket: "fire-9-nnn7.appspot.com",
  messagingSenderId: "248676788844",
  appId: "1:248676788844:web:a5368177d2939a107fc649"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

const WebRef = 'MAL';

export {
  WebRef,
  database, storage,
  DbRef, StRef, push, set, child, update,
  onValue, get, getDownloadURL, listAll,
  uploadBytesResumable,
  deleteObject, remove
}

/*
export {
  auth, updateProfile, updateEmail, updatePassword,
  onAuthStateChanged
}
*/

const GetPostURL = ()=> {
  const POST_URL = window.location.href.split("/").slice(-1).pop();
  return POST_URL;
}


const StorageArray = []


// revers time/post key to get the real date !! with time ?
function ReversTime(arg) {
  const one = Number(arg);
  const two = new Date(one);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const day = two.getDate();
  const month = months[two.getMonth()];
  const year = two.getFullYear();

  const hour = two.getHours();
  const minut = two.getMinutes();
  const second = two.getSeconds();

  const FullDate = `${day}/${month} ${year} // ${hour}:${minut}:${second}`;

  return FullDate;
}


export {
  GetPostURL, ReversTime, StorageArray
}
