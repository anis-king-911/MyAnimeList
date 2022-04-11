import { UploadImage, GetData } from './app.js';

const UploadForm = document.querySelector('.UploadForm')
const ListContainer = document.querySelector('.ListContainer')

UploadForm.addEventListener('submit', (event)=> {
  event.preventDefault();
  
  const data = {
    'Anime Name': UploadForm.Title.value,
    'Anime Poster': UploadForm.Poster.files[0],
  }
  
  UploadImage(data);
  setTimeout(()=> {
    UploadForm.reset();
  }, 800)
})

window.onload = ()=> {GetData(ListContainer)}
