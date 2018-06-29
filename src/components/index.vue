<template>
    <div>
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
body{
  background: #f5f5f5;
}
 body,h1,h2,h3,h4,h5,h6,p,dl,dd{
  margin: 0;
}
ul,ol{
  margin: 0;
  padding: 0;
  list-style: none;
}
li{
  list-style: none;
  background: #fff;
    padding: 15px;
    border: 1px solid #f5f5f5;
    margin-top: 20px;
    overflow: auto;
}
.rwList{
  width: 600px;
  margin: 0 auto;
}
#box li p{
  float: left;
  width: 450px;
  line-height: 34px;
}
#box img{
  width: 85px;
  float: right;
}
</style>
