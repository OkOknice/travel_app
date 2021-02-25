<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont iconicon-"></span>
      </div>
      <div class="header-search">
          <span class="iconfont iconsousuo"></span>
          输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-city">
            {{city}}
            <span class="iconfont iconjiantouxia"></span>
        </div>
      </router-link>
  </div>
  
</template>

<script>
export default {
  name: 'Header',
  props:["city"]
}
</script>

<style lang="stylus" scoped>
    .header
        display:flex
        height:.86rem
        line-height:.86rem
        color:#fff
        background: #00bcd4
        .header-left 
            width: .50rem
            float:left
            .iconicon-
                text-align:center 
                font-size:.64rem
        .header-search
            flex:1
            height: .64rem
            margin-top:.12rem
            margin-left:.2rem
            padding-left:.2rem
            background: #fff
            border-radius:.1rem
            color:#ccc
            line-height:.64rem
        .header-city 
            width:1.04rem
            float:right
            padding:0 .1rem
            text-align:center
            color:#fff
            .iconjiantouxia
                margin-left: -.04rem
                font-size: .24rem
</style>