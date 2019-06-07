import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from 'vuex-persistedstate'

import auth from './modules/auth'
// import http from '@/store/modules/api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    // http,
  },
//   plugins: [createPersistedState({
//     key: 'example',
//     storage: window.sessionStorage
//   })]
})
