import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
      children: [
        {
          // when / is matched
          path: "",
          name: "login",
          component: () => import("../pages/Login.vue"),
        },
        {
          // when /register is matched
          path: "register",
          name: "register",
          component: () => import("../pages/Register.vue"),
        },
      ],
    },
  ]
})

export default router
