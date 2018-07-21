<template>
  <div> 
      <div class="menu">
          <div class="menuContent">
              <router-view name='menu'/>
          </div>
      </div>
      <div id="app" class='rwList'>
             <router-view name='index'/>
      </div>
  </div>
</template>
<script>  
export default { 
}
</script> 
<style scoped lang="less">
@import './styles/public.less';
/*菜单栏*/
.menu{ 
  /*X轴的偏移量   Y轴的偏移量*/
  box-shadow: 0px 1px 3px  @color ;
  height: 60px;  
  background: @color ;
  position: fixed; 
  width: 100%;
  top: 0;
  z-index: 6;
} 
.menuContent{
  width: 600px;
  height: 100%;
  margin: 0 auto;
}
/*max-width:360px (屏幕的值小于360的就执行)*/
/*max 最大(如果最大高度/宽度大于屏幕值的话就执行)，min 最小*/
@media screen and (max-width: 360px){
  .menuContent{
    width: 100%;
  }
  .menuUl li{
    width: 0;
  } 
  .rwList{
    max-width: 100%;
     min-width: 100%;
  }
}
</style>
<style>
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
/*内容*/
.rwList{
  max-width: 600px;
  margin: 60px auto 0;
  min-width: 300px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
}
</style>
