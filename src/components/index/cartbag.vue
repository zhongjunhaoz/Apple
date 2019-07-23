<template>
  <div class="cartbag-wrapper" v-show="open">
    <div class="empty">你的购物袋是空的</div>
    <ul>
      <li v-for="(item,index) in items" :key="index" class="detail">
        <img :src="item.img" class="img">{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: ["open"],
  data() {
    return {
      items: [
        {
          img: require('../../assets/images/cart.png'),
          name: '购物袋'
        },
         {
          img: require('../../assets/images/like.png'),
          name: '收藏'
        },
         {
          img: require('../../assets/images/order.png'),
          name: '订单'
        },
         {
          img: require('../../assets/images/account.png'),
          name: '账户'
        },
         {
          img: require('../../assets/images/login.png'),
          name: '登录'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.cartbag-wrapper
  top 45px
  width 100%
  background-color #f4f3f3
  .empty
    height 80px
    line-height 80px
    color #888888
    font-size 14px
    text-align center
  .detail
    width 80%
    height 45px
    line-height 45px
    color #78b8e8
    margin 0 auto
    list-style none
    border-top 1px solid #b8b8b8
    .img
      width 17px
      height 17px
      margin-right 5px
</style>
