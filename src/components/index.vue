<template>
    <div>
       <div class="topConBox">
           <horse-race :content='topCon'></horse-race>
       </div>
       <div class="content">
          <h3>今日热闻</h3>
          <ul>
            <li v-for='item in lists'
             :key='item.id'
             @click='conFn(item.id)'
             id='item.id'
            >
            <p>{{item.title}}</p><img :src='item.images' v-show='item.images' v-proxy></li>
            </li>
          </ul>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
import horseRace from './horseRaceLamp.vue'

export default {
  data () {return {lists:[],topCon:[],leftNumber:0,num:1,timer:null}},
  created:function(){
        var This=this;
        axios.get('/api/4/news/latest')
            .then(function(response){
              This.lists =(response.data.stories);
              This.topCon=(response.data.top_stories);
              // This.interFn();
              console.log(This.topCon)
            }) 
      },
     components: {
        horseRace
      },
      methods:{
         //点击列表传值给详情页
          conFn:function(id){
            this.$router.push({ path: `/content/${id}` })
          }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topConBox{
    height: 375px;
    width: 600px;
}
.content{
    background: #fff;
    padding:19px 15px 0;
}
.content li{
  list-style: none;
  background: #f4f4f4;
  padding: 15px;
  border: 1px solid #f5f5f5;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px; 
}

.content li p{
  float: left;
  width: 450px;
  line-height: 44px;
  text-align: left;
}
.content li img{
    width: 70px;
    float: right;
    margin-top: -10px;
}
</style>
