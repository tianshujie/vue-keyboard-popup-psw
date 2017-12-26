import Vue from 'vue'

import Router from 'vue-router'

const indexView = resolve => require(['../pages/indexView.vue'], resolve)

Vue.use(Router)

const router = new Router({
    // mode: 'history',

    routes: [
        {
            path: '/',
            name: 'indexView',
            component: indexView,
        }
    ]
})
export default router
