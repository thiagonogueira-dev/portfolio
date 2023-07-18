import Vue from 'vue';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faFileLines, faCode } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
library.add( faLinkedin, faGithub, faFileLines, faHtml5, faCss3, 
    faJs, faEye, faCode, faVuejs );

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app');