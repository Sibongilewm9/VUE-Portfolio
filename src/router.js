
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("./views/Projects.vue"),
    },
    {
      path: "/skills",
      name: "Skills",
      component: () => import("./views/Skills.vue"),
    },
    {
      path: "/experience",
      name: "Experience",
      component: () => import("./views/Experience.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("./views/Contact.vue"),
    },
  ],

  // Start each new page at the top
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

export default router;
