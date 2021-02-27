<template>
  <div class="city-list" ref="wrapper">
    <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
             class="button-wrapper"
             v-for="item of hotCities"
             :key="item.id"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div
         class="area"
         v-for="(city,key) of cities"
         :key="key"
         :ref="key"
        >
          <div class="title border-topbottom">{{key}}</div>
          <div
           class="item-list"
           v-for="item of city"
           :key="item.id"
          >
            <div class="item border-bottom">{{item.name}}</div>
          </div>
        </div>
      </div>
  </div>
  
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props:{
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted (){
    setTimeout(() =>{
      this.scroll = new Bscroll(this.$refs.wrapper)
    })
  },
  watch: {
    letter (){
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        // console.log(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
    .border-bottom
    &:before
      border-color: #ccc
    .city-list
        overflow:hidden
        position:absolute
        top: 1.58rem
        left:0
        right:0
        bottom:0
        .title
            line-height:.54rem
            background:#eee
            padding-left:.2rem
            color:#666
            font-size:.26rem
        .button-list
            overflow:hidden
            padding:.1rem .6rem .1rem .1rem
            .button-wrapper
                float:left
                width:33.33%
                .button
                    margin:.1rem
                    padding:.1rem 0
                    text-align:center
                    border:.02rem solid #888
                    border: radius 0.06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem

</style>