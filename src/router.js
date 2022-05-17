import Vue from "vue";
import Router from "vue-router";
import Example from "./views/Example.vue";
import DesignEdit from "./views/DesignEdit.vue";
import Campaigns from "./views/Campaigns.vue";
import Settings from "./views/Settings.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import ResetPassword from "./views/ResetPassword.vue";
import EmailTemplates from "./views/EmailTemplates.vue";
import EmailView from "./views/ViewUpdate.vue";
import Favorites from "./views/Favorites.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { 
        path: "/", 
        component: Login 
    },
    { 
        path: "/new",
        // beforeEnter : guardMyroute, 
        component: DesignEdit 
    },
    { 
        path: "/campaigns", 
        // beforeEnter : guardMyroute,
        component: Campaigns 
    },
    { 
        path: "/settings", 
        // beforeEnter : guardMyroute,
        component: Settings },
    { 
        path: "/register", 
        component: Register },
    { 
        path: "/example", 
        // beforeEnter : guardMyroute,
        component: Example },
    { 
        path: "/emailTemplates", 
        // beforeEnter : guardMyroute,
        component: EmailTemplates 
    },
    { 
        path: "/forgot", 
        component: ForgotPassword 
    },
    { 
        path: "/reset/:token", 
        // beforeEnter : guardMyroute,
        component: ResetPassword 
    },
    { 
        path: "/emailView", 
        // beforeEnter : guardMyroute,
        component: EmailView 
    },
    { 
        path: "/favorites", 
        // beforeEnter : guardMyroute,
        component: Favorites },
  ],
});
function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("data")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/");
  }
}
