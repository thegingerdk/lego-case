import 'bulma/bulma.sass'

import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store'

library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faShoppingCart);
library.add(faTimes);
library.add(faCartPlus);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
