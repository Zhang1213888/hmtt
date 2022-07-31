import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", component: () => import("../views/LoginView.vue") },
    {
      path: "/",
      redirect: '/ ',
      component: () => import("../views/LayOutView.vue"),
      children: [
        { path: "/ ", component: () => import("../views/HomeView.vue") },
        { path: "/videoview", component: () => import("../views/VideoView.vue") },
        { path: "/myview", component: () => import("../views/MyView.vue") },
        { path: "/qaview", component: () => import("../views/QaView.vue") },
      ],
    },
  ],
});

export default router;
你真漂亮