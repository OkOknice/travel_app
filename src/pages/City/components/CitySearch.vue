<template>
  <div class="city-search">
      <input class="city-search-input" type="text" placeholder="输入城市名或拼音">
  </div>
  
</template>

<script>
export default {
  name: 'CitySearch',
}
</script>

<style lang="stylus" scoped> 
    .city-search
        height:.72rem
        padding:0 .1rem
        background:#00bcd4
        .city-search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .3rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
</style>