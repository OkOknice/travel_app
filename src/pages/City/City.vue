<template>
  <div>
    <CityHeader/>
    <CitySearch/>
    <CityList/>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
export default {
    name:'City',
    components:{
      CityHeader,
      CitySearch,
      CityList
    }
}
</script>
<style scoped>

</style>