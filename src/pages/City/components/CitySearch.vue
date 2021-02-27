<template>
  <div>
    <div class="city-search">
        <input 
          class="city-search-input" 
          type="text" 
          :placeholder="placeholder"
          v-model="keyword"
          @focus="handlerTextFocus"
          @blur="handlerTextBlur"
        />
    </div>
    <div 
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li 
          class="search-item border-bottom" 
          v-for="item of list" 
          :key="item.id"
          @click="handlerCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="!this.list.length">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props:{
    cities:Object
  },
  mounted (){
    setTimeout(() =>{
      this.scroll = new Bscroll(this.$refs.search,{
        click:true
      })
    })
  },
  data (){
    return {
      placeholder:'输入城市名或拼音',
      keyword:'',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword (){
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities){
          this.cities[i].forEach(value => {
            if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
              result.push(value)
            }
          })
        }
        this.list = result
      },100)
    }
  },
  methods: {
    handlerCityClick (city){
      this.$store.commit('change',city)
      this.$router.push('/')
      this.keyword = ''
    },
    handlerTextFocus (){
      this.placeholder = ''
    },
    handlerTextBlur (){
      this.placeholder = '输入城市名或拼音'
    }
  }
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
    .search-content
      z-index: 1
      overflow: hidden
      position: absolute
      top: 1.58rem
      left: 0
      right: 0
      bottom: 0
      background: #eee
      .search-item
        line-height: .62rem
        padding-left: .2rem
        background: #fff
        color: #666
</style>