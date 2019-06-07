import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'

import Store from './store/'

Vue.use(Router)

var routes = [
    { path: '/', component: Dashboard,
    children: [
        { path: '', component: () => import( /* webpackChunkName: "contents" */ './components/Contents.vue') },
        { path: '/about', component: () => import( /* webpackChunkName: "about" */ './components/About.vue') },
        { path: '/prefs', component: () => import( /* webpackChunkName: "prefs" */ './components/Prefs.vue') }
      ],
    meta: { requiresAuth: true } }
    , { path: '/login', component: () => import( /* webpackChunkName: "prefs" */ './components/Login.vue') }
]

var router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    // 上位ルートを含めて認証が必要なルートがあるかを確認
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 認証状態を確認
        if (!Store.state.auth.loggedIn) {
            // 認証していなければログインページにリダイレクト
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next() // 認証の確認が必要ないルートならnext()で遷移
    }
});

export default router
