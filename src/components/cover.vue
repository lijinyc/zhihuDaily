<template> 
      <div class="imgBox" :style='{background:"url("+image+") center"}' v-proxy="'style'">
            <p>{{title}}</p>
            <span>{{author}}</span>
            <div class="backBox"></div>
      </div> 
</template>
<script>
export default{
	props:['image','title','author']
}
</script>
<style scoped>
.imgBox{
	height: 100%;
}
.imgBox span{
	position: absolute;
	color: #edecec;
	font-size: 0.875rem;
	right: 78px;
	bottom: 10px;
	 z-index: 2;
}
.backBox{
	background: #000;
	z-index: 1;
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.3;
	top:0;
	left:0; 
} 
.imgBox p{
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	color: #fff;
	font-size: 1.375rem;
	width: 80%;
	bottom: 42px;  
	z-index: 2;
}
</style>