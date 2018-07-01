import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import listContent from '@/components/listContent'


Vue.use(Router)

export default new Router({
  routes: [
 	{path:'/',component:index},
 	{path:'/content/:id',component:listContent}
    // { path: '/',name: 'HelloWorld',component: HelloWorld}
  ]
})
