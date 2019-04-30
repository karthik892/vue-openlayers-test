import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import App from './App.vue'

import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

Vue.use(VueLayers)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
