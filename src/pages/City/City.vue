<template>
  <div>
    <CityHeader/>
    <CitySearch/>
    <CityList :cities="cities" :hotCities="hotCities"/>
    <CityAlphabet :cities="cities"/>
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
        hotCities:[]
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
      }
    },
    mounted (){
      this.getCityData()
    }
}
</script>
<style scoped>

</style>