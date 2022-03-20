import Vue from 'vue'
import Router from 'vue-router'
import Example from './views/Example.vue'
import DesignEdit from './views/DesignEdit.vue'
import Campaigns from './views/Campaigns.vue'
import Settings from './views/Settings.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import ResetPassword from './views/ResetPassword.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Login},
        {path: '/new', component: DesignEdit},
        {path: '/campaigns', component: Campaigns},
        {path: '/settings', component: Settings},
        {path: '/register', component: Register},
        {path: '/example', component: Example},
        {path: '/forgot', component: ForgotPassword},
        {path: '/reset/:token', component: ResetPassword},

    ]
})