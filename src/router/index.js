import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: { name: 'user' }
  },
  {
    path: '/user',
    name: 'user',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/PageUser.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
