<template>
    <div>
       <div class="topCon">
           <ul class="imgUl">
              <li>
                <img src="https://pic2.zhimg.com/v2-88e121f6e50424b257a256ee87c808c9.jpg">
              </li>
              <li>
                 <img src="https://pic3.zhimg.com/v2-8911cdedef42510871fef137242dafb6.jpg">
               </li>
           </ul>
           <div class="yuandian">
             <span></span><span></span>
           </div>
       </div>
       <div class="content">
          <h3>今日热闻</h3>
          <ul>
            <li v-for='item in lists'
             :key='item.id'
             @click='conFn(item.id)'
            >
            <p>{{item.title}}</p><img :src='item.images' v-show='item.images'></li>
            </li>
          </ul>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {return {lists:[]}},
  created:function(){
        var This=this;
        axios.get('/api/4/news/latest')
            .then(function(response){
              This.lists =(response.data.stories);
              console.log(This.lists)
            }) 
      },
      methods:{
          conFn:function(id){ 
            this.$router.push({ path: `/content/${id}` }) 
          }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topCon{
    max-height: 375px;
    overflow: hidden; 
}
.topCon  .imgUl{
  position: relative;
  width: 1200px;
  left: 0;
  top: 0;
}
.imgUl li{
  float: left;
}
.yuandian{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: 50px;
    height: 20px;
}
.yuandian span{
    width: 15px;
    height: 15px;
    background: red;
    border-radius: 50%; 
    float: left;
    margin-right: 8px;
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
  height: 40px;
  border-radius: 5px; 
}

.content li p{
  float: left;
  width: 450px; 
  line-height: 34px;
  text-align: left;
}
.content li img{
  width: 85px;
  float: right;
}
</style>
