import './style.css'
import { createApp } from 'vue'
/* Set up using Vue 3 */
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMicrophone, faPen, faBook, faSquareRootVariable, faLightbulb, faBrain, faGears, faGear} from '@fortawesome/free-solid-svg-icons'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import Button from 'primevue/button';
import 'primeicons/primeicons.css'




/* add icons to the library */
library.add(faMicrophone, faPen, faBook, faSquareRootVariable, faLightbulb, faBrain, faGears, faGear)

createApp(App).use(router).use(PrimeVue)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')