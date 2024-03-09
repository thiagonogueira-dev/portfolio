import Vue from 'vue';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faVuejs, faJava, 
    faPhp, faReact, faGit, faAws, faLinux, faNode } from '@fortawesome/free-brands-svg-icons'
import { faFileLines, faCode, faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
library.add( faLinkedin, faGithub, faFileLines, faHtml5, faCss3, 
    faJs, faEye, faCode, faVuejs, faJava, faPhp, faReact, faGit, faAws, faLinux,
    faDatabase, faNode, faEnvelope, faBootstrap );

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app');