<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪玩儿</div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="weekend-wrapper">
            <img
            class="weekend-item-img"
            :src="item.imgUrl"
            alt=""
            />
        </div>
        <div class="weekend-item-info">
          <p class="weekend-item-title">{{item.title}}</p>
          <p class="weekend-item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Weekend",
  props: {
    weekendList:Array
  }
};
</script>

<style lang="stylus" scoped>
.weekend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indext: 0.2rem;
  font-size: 0.32rem;
  font-weight: bold;
  padding-left: 0.4rem;
}
.weekend-wrapper
    overflow: hidden;
    height: 0;
    padding-bottom:37.09%
  .weekend-item-img
    width: 100%;
.weekend-item-info
    padding:.1rem
    .weekend-item-title
        line-height: .54rem
        font-size: .32rem
    .weekend-item-desc
        line-height: .4rem
        color: #ccc

</style>