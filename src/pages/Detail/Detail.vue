<template>
    <div>
        <Banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
        <DetailHeader :sightName="sightName"/>
        <div class="content">
            <DetailList :list="list"/>
        </div>
    </div>
</template>
<script>
import Banner from './components/Banner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
import axios from 'axios'
export default {
    name: "Detail",
    components:{
        Banner,
        DetailHeader,
        DetailList
    },
    data (){
        return {
            list:[],
            sightName:'',
            bannerImg:'',
            gallaryImgs:[]
        }
    },
    mounted (){
        this.getDetailInfo()
    },
    activated (){
        this.getDetailInfo()
    },
    methods: {
        getDetailInfo (){
            axios.get('/api/detail',{
                params: {id: this.$route.params.id}
                })
                 .then(result =>{
                    const {data} = result.data.data
                        this.sightName = data.sightName
                        this.list = data.categoryList
                        this.gallaryImgs = data.gallaryImgs
                        this.bannerImg = data.bannerImg
                 })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height:50rem
</style>