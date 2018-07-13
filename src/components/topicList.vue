<template>
    <div> 
      <div class="conBox">
          <div class="topBox" :style='{background:"url("+dataInfo.background+")"}' v-proxy="'style'">
                <!-- <img :src="dataInfo.image"  v-proxy> -->
                <p>{{dataInfo.description}}</p>
          </div>
      </div>
       <div class="content">
            <div class="chiefEditor">
                 <span>主编</span>
                 <img  
                        v-for='item in dataInfo.editors'
                        :src="item.avatar" 
                         v-proxy
                    >
              </div>
            <ul>
                <li 
                    v-for='item in topicList'
                    :key='item.id'  
                    @click='listConFn(item.id)'
                >
                    <img :src='item.images' v-show='item.images' v-proxy><p>{{item.title}}</p>
                </li>
            </ul>
            <div class="button" @click='buttonFn'>查看更多</div> 
       </div>

    </div>
</template>

<script>
import axios from 'axios' 
export default { 
  /* 
  topicList 列表信息
  historyList 历史列表信息
  lastNum 列表信息中的最后一条数据
  dataInfo  data信息 
  */
  data () {return {topicList:[],lastNum:[],dataInfo:[]}},
  watch: {
    '$route' (to, from) {
        this.listFn(); //在相同界面中，加载不同的数据
    } 
  },
  created:function(){  
        this.listFn();
   } ,
  methods:{ 
      listFn:function(){
         //重置缓存数据
          this.topicList=this.lastNum=this.dataInfo=[];
          var This=this; 
          axios.get('api/4/theme/'+this.$route.params.id)
                  .then(function(response){ 
                      This.topicList =(response.data.stories); 
                      This.lastNum=This.topicList[This.topicList.length-1];
                      This.dataInfo=response.data; 
              }) ; 
      },
      //点击查看历史
      buttonFn:function(){  
        var This=this; 
         axios.get('api/4/theme/'+this.$route.params.id+'/before/'+this.lastNum.id)
                 .then(function(response){  
                   This.topicList=This.topicList.concat(response.data.stories);  
                    This.lastNum=This.topicList[This.topicList.length-1]; 
                 });
      },
       //点击列表进入详情页
      listConFn:function(id){  
          this.$router.push({ path: `/topicListContent/${id}` })
      }      
  }
}
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部*/
.conBox{
  position: relative;
  border: 1px solid #f4f4f4;
  background: #fff;
} 
.topBox{
  width: 600px;
  height: 375px;
  overflow: hidden;
  position: relative; 
}
.topBox img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.topBox p{
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  color: #fff;
  font-size: 22px;
  width: 80%;
  bottom: 42px;  
  z-index: 2;
}
.topBox span{
  position: absolute;
  color: #edecec;
  font-size: 14px;
  right: 78px;
  bottom: 10px;
   z-index: 2;
}
/*列表*/
.content{
    background: #fff;
    padding:0 15px 19px;
}
.chiefEditor{
    font-size: 15px;
    padding-top: 8px; 
    color: #9c9c9c;
}
.chiefEditor img{
    width: 32px;
    vertical-align: middle;
    border-radius: 20px;
    margin-left: 16px;
}
.content li{
  list-style: none;
  background: #f4f4f4;
  padding: 10px;
  border: 1px solid #f5f5f5;
  margin-top: 20px; 
  overflow: auto;
  border-radius: 5px; 
  cursor: pointer;
}

.content li p{
  line-height: 30px; 
}
.content li img{
  width: 70px;
  float: right; 
}
.button{
    background: #4893ec;
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-weight: bold;
    margin: 20px auto 0;
    border-radius: 3px;
    cursor: pointer;
    color: #fff;
} 
</style>
