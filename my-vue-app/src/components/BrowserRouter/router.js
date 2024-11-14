import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../Home/Home.vue";
import SignIn from "../LoginForm/SignIn/SignIn.vue";
import SignUp from "../LoginForm/SignUp/SignUp.vue";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/:pathMatch(.*)*', redirect: '/Home' }, // Optional: Catch-all for undefined routes
  ];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router