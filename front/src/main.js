import Vue from 'vue'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"
import "material-design-icons/iconfont/material-icons.css"
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = true
Vue.config.devtools = true
Vue.use(Vuetify)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app') 
