// this file creates the router instance that is used by our application

// we start by importing the createRouter and createWebHistory functions, as well as the components describing each of our views
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import FetchView from "../views/FetchView.vue";
import ProfHomeView from "../views/ProfHomeView.vue"; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/form",
      name: "form",
      component: FormView,
    },
    {
      path: "/fetch",
      name: "fetch",
      component: FetchView,
    },
    {
      path: "/prof-home", 
      name: "prof-home",  
      component: ProfHomeView, 
    },
  ],
});

export default router;