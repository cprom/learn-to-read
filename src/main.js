import './style.css'
import { createApp } from 'vue'
/* Set up using Vue 3 */
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMicrophone)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')