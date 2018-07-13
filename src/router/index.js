import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import listContent from '@/components/listContent'
import menu from '@/components/menu'
import topicList from '@/components/topicList' 
import detailMenu from '@/components/detailMenu'
import topicListContent from '@/components/topicListContent'


Vue.use(Router)

export default new Router({
  routes: [
 	{path:'/',components:{index,menu}},
 	{path:'/content/:id',components:{index:listContent,menu:detailMenu}},
 	{path:'/topicList/:id',components:{index:topicList,menu}},
 	{path:'/topicListContent/:id',components:{index:topicListContent,menu:detailMenu}}
    // { path: '/',name: 'HelloWorld',component: HelloWorld}
  ]
})
