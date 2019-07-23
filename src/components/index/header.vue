<template>
  <div class="header-wrapper" :class="isShow ? 'open' : 'close'" >
    <div class="header">
      <div class="header-item" v-if="!isShow" @click="showList">  <!-- 点击，true,整个列表显示出来--> <!-- !isShow=== true ,所以可以显示这个DOM-->
          <img class="icon left-icon" src="../../assets/images/list.png"/>
      </div>
      <div class="header-item" v-if="isShow" @click="hideList"> <!-- 点击，false，整个列表隐藏--> <!--v-if="isShow可以写成V-else"-->
          <img class="icon left-icon" src="../../assets/images/cancel.png"/>
      </div>
      <div class="header-item">
          <img class="icon" src="../../assets/images/apple-fill.png"/>
      </div>
      <div class="header-item"   @click="showCart">
          <img class="icon right-icon" src="../../assets/images/cart-bag.png"/>
      </div>
    </div>
      <v-list :show="isShow" @hideList="hideList"></v-list>
      <v-cartbag :open="isOpen"></v-cartbag>
  </div>
</template>

<script>
import list from '@/components/index/list'
import cartbag from '@/components/index/cartbag'
export default {
  name:'hd',
  components: {
    'v-list':list,
    'v-cartbag': cartbag
  },
  data() {
    return {
      isShow: false,
      isOpen: false,
      msgFromList: 'this is a msg'
    }
  },
  methods: {
    showList() {
      this.isShow = true,
      this.isOpen = false
    },
    hideList(e) {
      // console.log(e)
      this.isShow = false
    },
    showCart(){
      this.isOpen = !this.isOpen,
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-wrapper
  position fixed
  .header
    display flex
    background-color #000
    width 100%
    height 25px
    line-height 45px
  .header-item
    flex 1
    text-align center
    padding-top 5px
    .icon
      width 25px
      height 25px
    .left-icon
      position fixed
      left 20px
      padding-top 5px
    .right-icon
      position fixed
      right 20px
      padding-top 5px
//   background-color red
// .header-wrapp.open
//   height 650px
// .header-wrapp.close
//   height 45px

</style>
