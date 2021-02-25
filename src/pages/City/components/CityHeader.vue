<template>
  <div class="city-header">
      城市选择
      <router-link to="/">
        <div class="iconfont iconicon- city-header-back"></div>
      </router-link>
  </div>
  
</template>

<script>
export default {
  name: 'CityHeader',

}
</script>

<style lang="stylus" scoped>
    .city-header
        position: relative
        overflow: hidden
        height: .86rem
        line-height: .86rem
        text-align: center
        color: #fff
        background: #00bcd4
        font-size: .32rem
        .city-header-back
            position: absolute
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .6rem
            color: #fff    
</style>