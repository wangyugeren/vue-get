import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import Index from '@/components/Index'
import Buy from '@/components/Buy'
import Listen from '@/components/Listen'
import Study from '@/components/Study'
import User from '@/components/User'
import Ebook from '@/components/Ebook'
import Book from '@/components/Book'
import Shop from '@/components/Shop'
import More from '@/components/More'
import All from '@/components/All'
import Search from '@/components/Search'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/study',
      name: 'study',
      component: Study
    },
    {
      path: '/listen',
      name: 'listen',
      component: Listen
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/ebook',
      name: 'ebook',
      component: Ebook
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/all',
      name: 'all',
      component: All
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
