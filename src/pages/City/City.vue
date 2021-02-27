<template>
  <div>
    <CityHeader/>
    <CitySearch :cities="cities"/>
    <CityList :cities="cities" :hotCities="hotCities" :letter="letter"/>
    <CityAlphabet :cities="cities" @change="handlerChangeLetter"/>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
export default {
    name:'City',
    data (){
      return {
        cities:{},
        hotCities:[],
        letter: ''
      }
    },
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    methods: {
      getCityData (){
        axios.get('/api/cities')
             .then(result => {
               const {data} = result.data.data
               this.cities = data.cities
               this.hotCities = data.hotCities
             })
      },
      handlerChangeLetter (letter){
        this.letter = letter
      }
    },
    mounted (){
      this.getCityData()
    }
}
</script>
<style scoped>

</style>