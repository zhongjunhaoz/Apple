<template>
  <div class="index">
      <div class="header-img">
        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/hero-banner-homepage.image.large_2x.jpg" alt="">
      </div>
      <h1> 
        <p>欢迎使用 Apple 支持</p>
      </h1>
      <div class="search">
        <input type="text" placeholder="搜索支持" class="search-input"/>
      </div>
      <div class="lists">
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png" alt="" >
          <p>Apple Watch</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_2x.png" alt="" >
          <p>iPhone</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_2x.png" alt="">
          <p>iPad</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_imac_2x.png" alt="">
          <p>Mac</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple-id_2x.png" alt="">
          <p>Apple ID</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productdrawer_applemusic_2x.png" alt="">
          <p>音乐</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productdrawer_icloud_2x.png" alt="">
          <p>iCloud</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productdrawer_apple_pay_icon_2x.png" alt="">
          <p>Apple Pay</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/mac_apps/homepage_productdrawer_appstore_2x.png" alt="">
          <p>App Store</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productdrawer_pro_apps_2x.png" alt="">
          <p>专业应用</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/airpods/homepage_productdrawer_airpods_2x.png" alt="">
          <p>AirPods</p>
        </div>
        <div class="list">
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/mac/homepage-productnav-macos_2x.png" alt="">
          <p>macOS</p>
        </div>
      </div>
  </div>
 
</template>

<script>
export default {
  data () {
     return {}
  },
}
</script>

<style lang="stylus" scoped>
.index
  width 100%
  background-color #ffffff
  .header-img
    width 100%
    height 120px
    img 
      width 100%
      height 100%
  h1 
   width 80%
   text-align center
   margin auto
   margin-top 40px
   margin-bottom 40px
   p 
    white-space nowrap
    font-size 25px
    color #333333
    font-weight 500
  .search
    text-align center
    margin-bottom 30px
    input
      border-radius 3px
      border 1px solid #BBBBBB
    .search-input
      width 90%
      height 45px
      font-size 15px
      letter-spacing 2px
      padding-left 10px
  .lists
    display flex
    flex-wrap wrap
    width 90%
    margin auto
    text-align center
    margin-bottom 20px
    // border-bottom 1px solid #DEDEDE
    .list
      flex 1
      margin-bottom 40px
      p
       color #727272
</style>
