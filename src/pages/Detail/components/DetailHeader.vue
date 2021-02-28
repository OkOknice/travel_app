<template>
    <div>
        <router-link to="/">
            <div 
                class="header-abs"
                v-show="isShow"
            >
                <span class="iconfont iconicon- header-abs-back"></span>
            </div>
        </router-link>
        <div 
            class="detail-header"
            v-show="!isShow"
            :style="opacityStyle"
        >
            {{this.sightName}}
            <router-link to="/">
                <div class="iconfont iconicon- detail-header-back"></div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailHeader",
    props:{
        sightName:String
    },
    data (){
        return {
            isShow: true,
            opacityStyle: {
                opacity:0
            }
        }
    },
    activated (){
        window.addEventListener('scroll',this.handlerScroll)
    },
    deactivated (){
        window.removeEventListener('scroll',this.handlerScroll)
    },  
    methods: {
        handlerScroll (){
            const top = document.documentElement.scrollTop
            if(top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {opacity}
                this.isShow = false
            } else {
                this.isShow = true
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius: .4rem
        text-align: center
        background: rgba(0, 0, 0, .8)
        .header-abs-back
            color: #fff
            font-size: .6rem
    .detail-header
        position: fixed
        top:0
        left:0
        right:0
        overflow: hidden
        height: .86rem
        line-height: .86rem
        text-align: center
        color: #fff
        background: #00bcd4
        font-size: .32rem
        .detail-header-back
            position: absolute
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .6rem
            color: #fff 
</style>