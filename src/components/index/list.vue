<template>
  <div class="lists" :class="show ? 'open':'close' ">
    <div class="lists-item" v-show="show">
      <ul>
        <li v-for="(item,index) in menu" :key="index" @click="goDetail(item.path)" class="desc">
        {{item.name}}
        </li>
     </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "list",
  props: ["show"],
  data() {
    return {
      menu: [
        {
          path: '/mac',
          name: 'Mac'
        },
        {
          path: '/ipad',
          name: 'iPad'
        },
        {
          path: '/music',
          name: 'Music'
        },
        {
          path: '/techSupport',
          name: '技术支持'
        }
      ]
    }
  },
  methods: {
    goDetail(e) {
      // console.log(e)
      this.$emit('hideList')
      this.$router.push({path: e})
    }
  },
};
</script>

<style lang="stylus" scoped>
.lists.open
  height 760px
.lists.close
  height 0px
.lists 
  width 100vw
  background-color #000000
  padding-bottom 20px
  transition all 0.8s
  .lists-item
    padding-top 30px
    .desc
      font-size 15px
      color #DFDFDF
      width 80%
      margin 0 auto
      height 45px
      line-height 45px
      list-style none
      border-bottom 1px solid #282828
</style>
