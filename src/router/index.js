import Vue from 'vue';
import VueRouter from 'vue-router';
import Menu from '../views/Menu.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/Game',
    name: 'Game',
    component: () => import('../views/Game.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
