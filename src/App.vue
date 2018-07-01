<template>
  <div id="app" class='rwList'>
         <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

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
.rwList{
    max-width: 600px;
    margin: 0 auto;
    min-width: 300px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
