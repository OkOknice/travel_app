<template>
  <div>
    <div class="banner" @click="handlerBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont icontupian banner-icon"></span>
          39
        </div>
      </div>
    </div>
    <FadeAnimation>
        <Gallary v-show="isShow" @close="handlerCloseBanner" :imgList="gallaryImgs"/>
    </FadeAnimation>
  </div>
</template>
<script>
import Gallary from "../../../common/gallary/Gallary";
import FadeAnimation from '../../../common/fade/FadeAnimation'
export default {
  name: "Banner",
  props: {
    gallaryImgs:Array,
    bannerImg:String
  },
  components: {
    Gallary,
    FadeAnimation
  },
  data (){
      return {
          isShow:false,
      }
  },
  methods:{
      handlerBannerClick (){
          this.isShow = true
      },
      handlerCloseBanner (){
          this.isShow = false
      }
  }
};
</script>
<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number 
                height: .32rem
                line-height: .32rem
                text-align: center
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, 0.8)
                font-size: .24rem
                .banner-icon 
                    font-size: .24rem
</style>