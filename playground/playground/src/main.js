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
  faCheck, 
  faCogs 
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHome, 
  faEnvelope, 
  faTrash, 
  faPen, 
  faUpload, 
  faCheck, 
  faCogs, 
  faTwitter
);



const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
