<template>
	<div> 
        <i class="iconfont icon-biaoxingfill"></i>
        <ul class="menuUl">
            <li class="active">{{isName}}</li>
            <li @mouseover='overFn' @mouseleave='leaveFn'>主题列表</li>
            <li @click='homePageFn' class="homePage">首页</li>
         </ul>
         <div class="topic" :class='{isShowClass:isShow}' @mouseover='overFn' @mouseleave='leaveFn'>
              <i></i>
              <ul>
                  <li v-for='item in topicList'
                       :key='item.id' 
                       @click='listClick(item.id,item.name)' 
                    ><span>{{item.name}}</span></li>
            </ul>
         </div> 
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data(){return {isShow:true,topicList:[],title:'首页'}},
		created:function(){
			var This=this;
			axios.get('api/4/themes')
	            .then(function(response){
	              This.topicList=response.data.others;  
	            });
		},
		computed:{
			 isName:function(){
			 	return this.$route.query.name?this.$route.query.name:this.title;
			 }
		},
		methods:{ 
	         overFn:function(){//鼠标划入
	            this.isShow=false;
	         }, 
	         leaveFn:function(){//鼠标划出
	           this.isShow=true;
	         },
	         listClick:function(id,name){  //点击主题列表
            	this.$router.push({ path:`/topicList/${id}`,query: {name}});
          	},
            homePageFn:function(){//点击首页
              this.$router.push({path:'/'});
            }
		}
	}
</script>
<style scoped>
 @import '../assets/iconfont.css'
/*菜单*/  
.menu a{
    text-decoration: none;
    color: #000;
} 
.topic{
   position: absolute;
    z-index: 6;
    background: #fff;
    width: 100%;
    top: 60px;
    border: 1px solid #f4f4f4;
    padding: 26px 0;
}
.topic i{ 
    background: red;
    position: absolute;
    top: -16px;
    left: 169px;
    border-right: 15px solid #f4f4f4;
    border-bottom: 16px solid #fff;
    border-left: 16px solid #f4f4f4;
}
.topic ul{
  margin:0 20px;
}
.topic li{
    float: left;
    width: 163px;
    line-height: 47px;
     border: 1px solid #f4f4f4; 
    margin: 16px 10px;
    background: #f4f4f4;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}
.topic li:hover{
   background:#4893ec; 
   color: #fff;
}
.menuUl{
  line-height: 60px;
  overflow: auto;
}
.menuUl li{
  float: left;
 width: 150px;
  font-size: 18px; 
}
.menuUl li:nth-child(2){
 	cursor: pointer;
}
.menuUl li:nth-child(3){
  cursor: pointer;
  float: right;
  margin-right: 10px;
  text-align: right;
}
.active{
  color: #4893ec !important;  
}
.isShowClass{
   display: none;
}
</style>