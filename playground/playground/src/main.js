import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faHome, 
  faEnvelope, 
  faTrash, 
  faPen, 
  faUpload,
  faDownload,
  faCheck, 
  faCogs, 
  faArrowUp, 
  faCircleUp,
  faThumbsUp,
  faThumbsDown

} from '@fortawesome/free-solid-svg-icons';
// import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHome, 
  faEnvelope, 
  faTrash, 
  faPen, 
  faUpload, 
  faCheck, 
  faCogs, 
  faArrowUp, 
  faTwitter,
  faCircleUp,
  faDownload,
  faThumbsUp,
  faThumbsDown
);



const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
