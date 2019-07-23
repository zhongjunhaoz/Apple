<template>
  <div>
    <div class="header">
      <ul class="content">
        <li v-for="(item,index) in headerImg" :key="index" class="img_box">
            <img :src="item.img" class="img" />
            <div class="name">{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="index music">
        <div class="music-box">
            <img src="https://www.apple.com/v/music/h/images/overview/hero_logo_large.png" alt="">
        </div>
        <h3>
          成千上万首歌曲，敬请沉醉。
        </h3>
        <div class="knowMore">
            进一步了解 >
        </div>
        <div class="pic">
            <img src="https://www.apple.com/cn/music/images/overview/music_hero_small_2x.jpg" alt="">
        </div>
    </div>
    <div class="index homepod">
        <h3>HomePod</h3>
        <h4>家的新声。</h4>
        <div class="buy">
          购买 >
        </div>
        <div class="knowMore">
          进一步了解 >
        </div>
        <div class="homepod-box">
            <img src="https://www.apple.com/v/music/h/images/overview/homepod_small_2x.jpg" alt="">
        </div>
    </div>
    <div class="index airpods">
        <h3>AirPods</h3>
        <h4>妙出新境界。</h4>
        <div class="knowMore">
          进一步了解 >
        </div>
        <div class="buy">
          购买 >
        </div>
        <div class="airpods-box">
            <img src="https://www.apple.com/v/music/h/images/overview/airpods_small_2x.png" alt="">
        </div>
    </div>
    <div class="index ipodtouch">
      <h3>iPod touch</h3>
      <h4>你喜爱的音乐，随身带着走。</h4>
      <div class="knowMore">
        进一步了解 >
      </div>
      <div class="buy">
        购买 >
      </div>
      <div class="ipodtouch-box">
          <img src="https://www.apple.com/cn/music/images/overview/ipod_small_2x.jpg" alt="">
      </div>
    </div>
    <div class="index other">
      <h3>配件</h3>
      <h4>给好听的歌曲，搭个好听的装备。</h4>
      <div class="knowMore">
          选购耳机和扬声器 >
      </div>
      <div class="other-box">
        <img src="https://www.apple.com/v/music/h/images/overview/accessories_small_2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
     return {
       headerImg: []
     }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d340938763f0068c2361dd6/VueJsApple/music')
      .then(res => {
        console.log(res)
        this.headerImg = res.data.headerImg
      })
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/home';
  .header
    background-color #F2F2F2
    .content
      display flex
      flex-space nowrap
      overflow scroll
      .img_box
        list-style none
        text-align center
        padding 25px
        .name
          font-size 10px
  .music
    background-color #ffffff
    .pic
      width 100%
      padding-top 40px
      img 
        width 100%
  .homepod
    background-color #fafafa
    padding-top 30px
    .homepod-box
      width 100%
      padding-top 40px
      img 
        width 85%
  .airpods
    background-color #ffffff
    padding-top 30px
    .airpods-box
      width 100%
      padding-top 40px
      img 
        width 50%
  .ipodtouch
    background-color #fafafa
    padding-top 30px
    h3 
     font-size 20px
     font-weight 600
     padding-bottom 10px
    .ipodtouch-box
      width 100%
      padding-top 40px
      img 
        width 50%
  .other
    background-color #ffffff
    padding-top 30px
    h3
     font-size 18px
     font-weight 600
     padding-bottom 10px
    h4 
     font-size 25px
    .other-box
      width 100%
      padding-top 40px
      img 
       width 60% 
</style>
