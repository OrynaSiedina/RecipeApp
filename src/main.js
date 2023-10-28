import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import './style.css'

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faSearch,
  faCircleNotch,
  faPlay,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faCircleNotch, faPlay, faBars, faClose);

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
