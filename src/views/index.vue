<template>
    <div>
       <div class="topConBox">
         <component
            v-bind:is="currTab"
            :content='topCon'
          ></component>
         <!--   <horse-race :content='topCon'></horse-race> -->
       </div>
       <div class="content">
            <p class="conTitle">今日热闻</p>
            <ul>
                <li 
                    v-for='item in lists'
                    :key='item.id'
                   @click='conFn(item.id)' 
                >
                  <img :src='item.images' v-show='item.images' v-proxy><p>{{item.title}}</p>
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
                        <img :src='item.images' v-show='item.images' v-proxy><p>{{item.title}}</p>
                      </li>
                </ul>
            </div>
            <div class="button" @click='buttonFn'>查看历史</div> 
       </div> 
    </div>
</template>

<script>
import axios from 'axios'
import horseRace from '../components/horseRaceLamp.vue'

export default {
  data() {return {currTab:'',lists:[],topCon:[],preData:[]}},
  created(){
        axios.get('/api/4/news/latest')
            .then((response)=>{
              this.lists =(response.data.stories);
              this.topCon=(response.data.top_stories);
              this.currTab = 'horseRace';
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
          conFn(id){
            this.$router.push({ path: `/content/${id}`});
          },
          //点击前一天信息
          buttonFn(){ 
             axios.get(`api/4/news/before/${this.dateVue}`)
                     .then((response)=>{ 
                        this.dateVue=response.data.date; 
                        this.preData.push(response.data); 
                     });
          },
          formatFn(d){
              return  d<10?'0'+d:''+d;
          },
          dayFn(d){
            return ['日','一','二','三','四','五','六'][d];
          },
          dataSliceFn(date){
            // substr('从什么地方开始截取','截取几个')
            return (date.substr(4,2))+'月'+(date.substr(6,2))+'日'; 
          },
          daySpanFn(date){
           let b=date.substr(0,4)+'-'+date.substr(4,2)+'-'+date.substr(6,2);
            return '星期'+this.dayFn(new Date(b).getDay())
          }
      }
}
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped lang="less">
@import '../styles/public.less';
/*内容*/
.topConBox{
  height: 375px;
  width: 600px;
}
.content{
  background: #fff;
  padding:0 15px 19px;
}
.conTitle{
  font-size: 0.875rem;
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
  line-height: 30px; 
}
.content li img{
  width: 70px;
  float: right; 
}
.button{
  background: @color;
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
@media  screen and (max-width: 360px){
  .content{
    padding: 0 10px 19px;
   }
   .topConBox{
      width: 100%;
      height: 64vw;
   }
}
</style>
