import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'
import PersonList from '@/components/PersonList'
import DistributionInfo from '@/components/DistributionInfo'
import Pan from '@/components/Pan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/list',
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
