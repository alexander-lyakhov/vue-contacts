import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
import create from '@/views/create.vue'
import edit from '@/views/edit.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
    },
    {
      path: '*',
      redirect: '/',
    },
  ]
});
