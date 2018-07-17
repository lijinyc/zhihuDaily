import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index'
import listContent from '@/views/listContent'
import menu from '@/components/menu'
import topicList from '@/views/topicList' 
import detailMenu from '@/components/detailMenu'
import topicListContent from '@/views/topicListContent'


Vue.use(Router)

export default new Router({
  routes: [
 	{path:'/',components:{index,menu}},
 	{path:'/content/:id',components:{index:listContent,menu:detailMenu}},
 	{path:'/topicList/:id',components:{index:topicList,menu}},
 	{path:'/topicListContent/:id',components:{index:topicListContent,menu:detailMenu}}
    // { path: '/',component: HelloWorld}
  ]
})
