<template>
    <div>
       <div class="title">
           <img src="https://pic2.zhimg.com/v2-88e121f6e50424b257a256ee87c808c9.jpg">
       </div>
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
.title{
    max-height: 375px;
    overflow: hidden;
}
li{
  list-style: none;
  background: #fff;
  padding: 15px;
  border: 1px solid #f5f5f5;
  margin-top: 20px;
  /*overflow: auto;*/
  height: 40px;
}

 li p{
  float: left;
  width: 450px; 
  line-height: 34px;
  text-align: left;
}
li img{
  width: 85px;
  float: right;
}
</style>
