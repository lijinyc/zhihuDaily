<template>  
        <div class="topBox" @mouseover='overFn' @mouseout='outFn' ref='top'>
           <ul> 
            <transition  name='list' @before-enter='beforeFn' @enter='enterFn' @leave='leaveFn'>
              <li 
                  v-for='(item,index) in content' 
                  :key='item.id'
                  class="list-complete-item"
                  v-if='index==num'
                  :style='{background:"url("+item.image+") center"}'
                  v-proxy="'style'" 
              >
                <!-- <img :src="item.image"  v-proxy>  -->
                <p>{{item.title}}</p>
                 <div class="backBox" @click='imgFn(item.id)'></div>
              </li>
              </transition>
           </ul>

           <div class="yuandian">
                <span v-for='item in content.length' 
                          :class='{active:item==num+1}'
                          @click='clickFn(item-1)'
                  ></span>
            </div>
        </div> 
</template>
<script>
import axios from 'axios'
export default {
   props:['content'],//从index.vue中接收到的数据 
   data(){return {num:0}}, 
   created:function(){//组件创建完后
      this.timeFn();//执行定时器
   },
   methods:{
     timeFn:function(){//定时器
         this.num=0;//当前显示的是第几张图片
         this.timer=setInterval(this.rollFn,4000);
     },
     rollFn:function(){//定时器函数
        this.num++;
        if(this.num>this.content.length-1){
            this.num=0;
        }
     },
     clickFn:function(index){//点击当前圆点
        this.num=index;
     },
     overFn:function(){//鼠标划入
        clearInterval(this.timer)
     },
     outFn:function(){//鼠标划出
         this.timer=setInterval(this.rollFn,4000);
     },
     beforeFn:function(el){//动画进入的开始状态
        var widthSize=parseInt(window.getComputedStyle(this.$refs.top).width);
        el.style.transform='translateX('+widthSize+'px)' 
     },
     enterFn:function(el,done){//动画进入中
        el.style.transform='translateX(0px)';
        done();
     },
     leaveFn:function(el){//离开时候的状态
         var widthSize=-(parseInt(window.getComputedStyle(this.$refs.top).width));
        el.style.transform='translateX('+widthSize+'px)'
     },
     imgFn:function(id){ //点击图片显示对应的内容
        this.$router.push({path:`/content/${id}`});
     }
   }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.topBox{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative; 
}
.backBox{
  background: #000;
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  top:0;
  left:0;
}
ul{
  height: 100%;
}
li{
  height: 100%; 
  width: 100%;
  position: absolute;
  background-size: cover !important;
}
li img{
  width: 100%;
}
li p{
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  color: #fff;
  font-size:1.375rem;
  width: 80%;
  bottom: 42px; 
   z-index: 10;
}
.yuandian{
  width: 100%;
 position: absolute;
  left:0;
  right: 0;
  bottom: 6px;
  margin: auto; 
  text-align: center;
  z-index: 5;
}
.yuandian span{
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #aca7a7;
  display: inline-block; 
  margin-right: 10px;
  opacity: 0.9;
  cursor: pointer;
}
.active{
  background: #fff !important;
}
.list-complete-item{
  transition: all 2s;
}
</style>
