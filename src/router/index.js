import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import aboutPage from '../views/about-page.vue'
import hostPage from '../views/host-page.vue'
import myTrips from '../views/my-trips.vue'
import stayDetails from '../views/stay-details.vue'
import stayEdit from '../views/stay-edit.vue'
import userDetails from '../views/user-details.vue'
import dashboard from '../views/dashboard.vue'
import stayApp from '../views/stay-app.vue'
// import backoffice from '../views/backoffice.vue';

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      name: 'about-page',
      path: '/about',
      component: aboutPage,
    },
    {
      name: 'stay-app',
      path: '/stay',
      component: stayApp,
    },
    {
      name: 'stay-details',
      path: '/stay/:stayId',
      component: stayDetails,
    },
    {
      name: 'host-page',
      path: '/host',
      component: hostPage,
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: dashboard,
    },
    {
      name: 'my-trips',
      path: '/mytrips',
      component: myTrips,
    },
    {
      name: 'home-page',
      path: '/',
      component: homePage,
    },
  ],
})

export default router
