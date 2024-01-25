import './style.css'
import { createApp } from 'vue'
/* Set up using Vue 3 */
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMicrophone, faPen, faBook, faSquareRootVariable} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faMicrophone, faPen, faBook, faSquareRootVariable)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')