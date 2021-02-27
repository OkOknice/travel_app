<template>
  <div>
      <Header></Header>
      <CourselSwiper :swiperList="swiperList"></CourselSwiper>
      <IconsSwiper :iconList="iconList"></IconsSwiper>
      <Recommed :recommendList="recommendList"></Recommed>
      <Weekend :weekendList="weekendList"></Weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import CourselSwiper from './components/CourselSwiper'
import IconsSwiper from './components/IconsSwiper'
import Recommed from './components/Recommed'
import Weekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    Header,
    CourselSwiper,
    IconsSwiper,
    Recommed,
    Weekend
  },
  data (){
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted (){
    this.lastCity = this.city
    this.getData()
  },
  activated (){
    if(this.lastCity !== this.city){
      this.getData()
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getData (){
      axios.get('/api/index?city=' + this.city)
           .then((result) =>{
             const {data} = result.data.data
             this.swiperList = data.swiperList
             this.iconList = data.iconList
             this.recommendList = data.recommendList
             this.weekendList = data.weekendList
      })
    }
  },
}
</script>

<style>

</style>