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
    {
      path: "/user",
      name: "user",
      component: () => import("../views/DashboardView.vue"), //all books page
      children: [
        {
          // when /user/books is matched => all books page
          path: "books",
          name: "books",
          component: () => import("../pages/Books.vue"),
          props: { api: "/book" },
        },
        {
          // when /user/starred is matched => all books page
          path: "starred",
          name: "starredBooks",
          component: () => import("../pages/Books.vue"),
          props: { api: "/book/starred" },
        },
        // {
        //   // when /user/profile is matched => profile page
        //   path: "profile",
        //   name: "profile",
        //   component: () => import("../pages/Profile.vue"),
        // },
      ],
    },
  ]
})

export default router
