<template>
	<div class="menuBox">  
        <ul class="menuUl">
            <li>
                <i  @mouseover='overFn' @mouseleave='leaveFn' class="iconfont icon-caidan"></i>
              </li>
            <li class="active">{{isName}}</li>
            <li  class="homePage">
                <i @click='homePageFn' class="iconfont icon-shouyefill"></i>
             </li>
         </ul>
         <div class="topic" :class='{isShowClass:isShow}' @mouseover='overFn' @mouseleave='leaveFn'>
              <i></i>
              <ul>
                  <li v-for='item in topicList'
                       :key='item.id' 
                       @click='listClick(item.id,item.name)' 
                    >
                      <span>{{item.name}}</span>
                  </li>
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
        this.isShow=true;
      	this.$router.push({ path:`/topicList/${id}`,query: {name}});
    	},
      homePageFn:function(){//点击首页
        this.$router.push({path:'/'});
      }
	}
}
</script> 
<style scoped lang='less'>
@import '../assets/iconfont.css';
@import '../styles/public.less';
/*菜单*/  
.menuBox{
  width: 100%;
  position: relative;
} 
.topic{
  position: absolute;
  z-index: 6;
  background: #fff;
  width: 100%;
  top: 60px;
  border: 1px solid #f4f4f4;
  padding: 26px 0;
  border-radius: 2px;
}
.topic i{ 
  position: absolute;
  top: -32px;
  left: 26px;
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 16px;
  border-color:transparent transparent white transparent;
  border-style: dashed dashed solid dashed;
}
.topic ul{
  margin:0 20px;
}
.topic li{
  float: left;
  width: 29%;
  line-height: 47px;
  margin: 16px 2.16%;
  background: #f4f4f4;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
.topic li:hover{
  background:@color; 
  color: #fff;
}
.menuUl{
  line-height: 60px;
  overflow: auto;
  color: #e4e1e1;
  margin: 0 5%;
}
.menuUl li{
  float: left; 
  font-size: 1.125rem;  
}
.menuUl li:nth-child(1){ 
  width: 10%;
}
.menuUl li:nth-child(1) i{
  cursor: pointer;
  font-size: 1.687rem;
}
.menuUl li:nth-child(2){
  cursor: pointer;
  width: 80%;
  text-align: center; 
}
.menuUl li:nth-child(3){
  float: right;
  text-align: right; 
  width: 10%;
}
.menuUl li:nth-child(3) i{
  font-size: 1.375rem;
  cursor: pointer;
}
.menuUl li i:hover{
  color: #fff;
}
.active{
  color: #fff !important;  
}
.isShowClass{
  display: none;
}
@media screen and (max-width: 360px){
  .menuUl li{
    width: 112px;
  }
  .topic ul{
    margin: 0;
  }
  .topic li{
    font-size: 0.812rem;
    line-height: 38px;
  }
  .topic i{
    left: 15px;
    top: -28px;
    border-width: 14px;
  }
}
</style>