import {
  WebRef,
  database, storage,
  DbRef, StRef, push, set, child, update,
  onValue, get, getDownloadURL, listAll,
  uploadBytesResumable,
  deleteObject, remove
} from './firebase.js';

/**
*
*
* @param {object} data 
* @param {object} arg
* @param {array} snapshot
* 
*/

function UploadImage(data) {
  const storageRef = StRef(storage, `${WebRef}/${data['Anime Poster'].name}`);
  const uploadTask = uploadBytesResumable(storageRef, data['Anime Poster']);
  
  uploadTask.on(`state_changed`,
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      
      switch (snapshot.state) {
        case `paused`:
          console.log(`Upload is paused`);
          break;
        case `running`:
          console.log(`Upload is running ${progress}`);
          break;
      }
    },
    (error) => {
      console.log(error)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const newData = {
          Name: data['Anime Name'],
          Url: downloadURL
        }
        
        UploadDatabase(newData);
      });
    }
  );
}

function UploadDatabase(arg) {
  const databaseRef = DbRef(database, `${WebRef}/`);
  const databasePush = push(databaseRef);
  
  set(databasePush, {
    'Anime Name': arg.Name,
    'Anime Poster': arg.Url
  }).then(()=> {
    console.log('done')
  }).catch((error)=> {
    console.log(error)
  })
}

function GetData(container) {
  const databaseRef = DbRef(database, `${WebRef}/`);
  
  onValue(databaseRef, (snapshot)=> {
        container.innerHTML = '';
    if(snapshot) {
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const data = snap.val();
        
        container.innerHTML = element(data) + container.innerHTML;

      })
      console.log(snapshot.size)
    }
  })
}

export{ UploadImage, GetData }

const element = (arg)=> {
  let div = 
  `
    <div class="elm">
      <img src="${arg['Anime Poster']}"/>
      <a>${arg['Anime Name']}</a>
    </div>
  `
  
  return div;
}
