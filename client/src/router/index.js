import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Detail from '@/components/detail'
import Index from '@/components/index'
import Post from '@/components/post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/addpost',
      name: 'Post',
      component: Post
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [{
        path: '',
        component: Index
      },
      {
        path: ':id',
        component: Detail,
        props: true
      }
      ]
    }
  ]
})
