<template>   
          <div class="box" @mouseenter='seenterFn' @mouseleave='seleaveFn'>
             <swiper class='swiperBox' :options='swiperOption' @ready='swiperReady'>
                    <swiper-slide
                        v-for='(item,index) in content' 
                        :key='item.id' 
                        :style='{background:"url("+item.image+") center"}'
                        v-proxy="'style'" 
                    > 
                      <p >{{item.title}}</p>
                      <div class="backBox" @click='imgFn(item.id)' ></div>
                    </swiper-slide> 
                    <div class="swiper-pagination" slot="pagination"></div>
             </swiper>
          </div> 
</template>
<script>
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
import 'swiper/dist/css/swiper.css'
export default {
   props:['content'],//从index.vue中接收到的数据 
   data(){
      return {
        num:0,
        swiperOption:{ 
          loop:true,
          autoplay:false, 
          pagination:{
            el:'.swiper-pagination',
            clickable:true
          }
        }
      }
    },
   components: {
      swiper,
      swiperSlide
   },
   methods:{
     imgFn:function(id){ //点击图片显示对应的内容
      console.log(id);
        this.$router.push({path:`/content/${id}`});
     },
     /*鼠标移入停止轮播，鼠标离开 继续轮播*/ 
     seenterFn() {
        if(this.swiper){
          this.swiper.autoplay.stop();
        }
      },
     seleaveFn () {
        if(this.swiper){
          this.swiper.autoplay.start();
       }
     },
     swiperReady(swiper){//获取原始的swiper
        this.swiper = swiper;
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 
<style scoped> 
.box{
  width: 100%;
  height: 100%; 
} 
.swiperBox{
  height: 100%;
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
 
.swiperBox p{
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
.swiper-pagination{
  width: 100%;
  position: absolute;
  left:0;
  right: 0;
  bottom: 6px;
  margin: auto; 
  text-align: center;
  z-index: 5;
} 
</style>
<style lang="less">
@import '../styles/public.less';
.swiper-pagination span{
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #aca7a7;
  display: inline-block; 
  margin-right: 10px;
  opacity: 0.9;
  cursor: pointer;

}
.swiper-pagination-bullet-active{
  background: #fff !important;
  opacity: 1 !important;
}
</style>
