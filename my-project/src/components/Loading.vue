<template>
    <div>
        <div class="allmask" v-show="showFlag">
            <img src="../assets/img/d18.jpg">
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'loading',
    data:function(){
      return{
        showFlag:false
      }
    },
    created:function(){
      Vue.http.interceptors.push((request,next)=>{
        this.showFlag=true;
        next((response)=>{
          this.showFlag=false;
        });
      });
    }
}
</script>
<style scoped>
    .allmask{
      position: fixed;
      width: 100%;
      height: 100%;
      top:0;
      z-index: 2;
    }
    .allmask img{
      height: 100%;
    }
</style>