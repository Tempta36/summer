import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import NotFound from '@/pages/NotFound'
import PersonList from '@/pages/PersonList'
import DistributionInfo from '@/pages/DistributionInfo'
import Pan from '@/pages/Pan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'PersonList',
      component: PersonList
    },
    {
      path: '/list/:city/:type',
      name: 'PersonList',
      component: PersonList
    },
    {
      path: '/distributionInfo',
      name: 'DistributionInfo',
      component: DistributionInfo
    },
    {
      path: '/pan',
      name: 'Pan',
      component: Pan
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
