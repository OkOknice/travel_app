<template>
  <div class="container" @click="handlerGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of imgList" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallary",
  props:{
      imgList:Array
  },
  data (){
      return {
          swiperOptions:{
            pagination: '.swiper-pagination',
            clickable: true,
            paginationType: 'fraction',
            observeParents: true,
            observer: true
          }
      }
  },
  methods: {
      handlerGallaryClick (){
          this.$emit('close')
      }
  }
};
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
        .gallary-img
            width: 100%
        .swiper-pagination
            color: #fff
            bottom: -1rem
</style>