import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueCountryRegionSelect from 'vue3-country-region-select'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import { faStopwatch20 } from '@fortawesome/free-solid-svg-icons'

library.add(faFlag)
library.add(faCalendarWeek, faStopwatch20)

const app = createApp(App);
app.use(vueCountryRegionSelect);
app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
