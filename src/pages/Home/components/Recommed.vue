<template>
  <div class="recommed">
    <div class="recommed-title">热销推荐</div>
    <ul>
      <li class="recommed-item border-bottom" v-for="item of recommendList" :key="item.id">
        <img
          class="recommed-item-img"
          :src="item.imgUrl"
          alt=""
        />
        <div class="recommed-item-info">
          <p class="recommed-item-title">{{item.title}}</p>
          <p class="recommed-item-desc">{{item.desc}}</p>
          <button class="recommed-item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommed",
  props:{
    recommendList:Array
  }
};
</script>

<style lang="stylus" scoped>
.recommed-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indext: 0.2rem;
  font-size: 0.32rem;
  font-weight: bold;
  padding-left: 0.4rem;
}

.recommed-item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .recommed-item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .recommed-item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .recommed-item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .recommed-item-desc {
      line-height: 0.4rem;
      color: #ccc;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .recommed-item-btn {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>