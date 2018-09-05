import Vue from 'vue'
import Router from 'vue-router'
import RssFeedViewer from '@/components/RssFeedViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RssFeedViewer',
      component: RssFeedViewer
    }
  ]
})
