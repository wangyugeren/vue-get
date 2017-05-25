<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides">
      <img v-bind:src="slide">
    </swiper-slide>
  </swiper>
</template>
<script>
	export default {
		name: 'carrousel',
		data(){
			return{
				swiperOption:{
					  autoplay: 1000,
			          setWrapperSize :true,
			          // pagination : '.swiper-pagination',
			          paginationClickable :true,
			          mousewheelControl : true,
			          observeParents:true,
			          loop:true,
				},
				swiperSlides:[require("../assets/img/d1.jpg"),require("../assets/img/d3.jpg"),require("../assets/img/d4.jpg"),require("../assets/img/d5.jpg")]
			}
		}
	}
</script>