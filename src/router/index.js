import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Paginate from '@/components/Paginate'
import Question from '@/components/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/page/:id',
    	name: 'Paginate',
    	component: Paginate,
    	props: {
      	id: '',
    	},
    },
    {
      path: '/question/:id',
      name: 'Question',
      component: Question,
      props: {
        id: '',
      }
    }
  ],
  mode: 'history',
})
