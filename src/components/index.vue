<template>
    <div>
       <div class="topConBox">
           <horse-race :content='topCon'></horse-race>
       </div>
       <div class="content">
            <p class="conTitle">今日热闻</p>
            <ul>
                <li v-for='item in lists'
                 :key='item.id'
                 @click='conFn(item.id)'
                 id='item.id'
                >
                <p>{{item.title}}</p><img :src='item.images' v-show='item.images' v-proxy></li>
                </li>
            </ul>
              <div class="frontDate" v-for='pre in preData'> 
                <p class="conTitle">{{dataSliceFn(pre.date)}}
                <span class="day">{{daySpanFn(pre.date)}}</span></p>
                <ul>
                    <li 
                        v-for='item in pre.stories'
                        :key='item.id'
                        @click='conFn(item.id)'
                      >
                      <p>{{item.title}}</p><img :src='item.images' v-show='item.images' v-proxy></li>
                      </li>
                </ul>
            </div>
            <div class="button" @click='buttonFn'>查看历史</div> 
       </div>

    </div>
</template>

<script>
import axios from 'axios'
import horseRace from './horseRaceLamp.vue'

export default {
  data () {return {lists:[],topCon:[],preData:[]}},
  created:function(){ 
        var This=this;
        axios.get('/api/4/news/latest')
            .then(function(response){
              This.lists =(response.data.stories);
              This.topCon=(response.data.top_stories);
            }) ;
            //当前日期
            this.d=new Date();
            this.dateVue=this.d.getFullYear()+this.formatFn(this.d.getMonth()+1)+this.formatFn(this.d.getDate());  
      },
     components: {
        horseRace
      },
      methods:{
         //点击列表传值给详情页
          conFn:function(id){
            this.$router.push({ path: `/content/${id}` })
          },
          //点击前一天信息
          buttonFn:function(){
            var This=this; 
             axios.get('api/4/news/before/'+this.dateVue)
                     .then(function(response){ 
                        This.dateVue=response.data.date; 
                        This.preData.push(response.data); 
                     });
          },
          formatFn:function(d){
              return  d<10?'0'+d:d;
          },
          dayFn:function(d){
            return ['日','一','二','三','四','五','六'][d]
          },
          dataSliceFn:function(date){
            // substr('从什么地方开始截取','截取几个')
            return (date.substr(4,2))+'月'+(date.substr(6,2))+'日'; 
          },
          daySpanFn:function(date){
           var b=date.substr(0,4)+'-'+date.substr(4,2)+'-'+date.substr(6,2);
            return '星期'+this.dayFn(new Date(b).getDay())
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
    padding:0 15px 19px;
}
.conTitle{
    font-size: 14px;
    padding-top: 20px;
    margin-left: 4px;
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
  float: left;
  width: 450px;
  line-height: 30px;
  text-align: left;
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
.day{
  margin-left: 10px;
}
</style>
