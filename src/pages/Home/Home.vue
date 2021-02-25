<template>
  <div>
      <Header :city="city"></Header>
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
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted (){
    this.getData()
  },
  methods: {
    getData (){
      axios.get('/api/index')
           .then((result) =>{
             const {data} = result.data.data
             console.log(data)
             this.city = data.city
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