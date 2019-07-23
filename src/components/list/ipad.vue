<template>
  <div>
    <div class="wrapper-one">
      <ul class="content">
        <li v-for="(item,index) in headerImg" :key="index" class="img_box">
          <img :src="item.img" class="img" />
          <div class="name">{{item.name}}</div>
        </li>
      </ul>
      <div class="exchange">用你符合条件的 iPad 来以旧换新，最高可获得 RMB 2195 的折抵优惠*。
        <span class="look">查看最低估计 ></span>
      </div>
    </div>
    <div class="wrapper-two">
      <h2 class="new">新一代&nbsp;&nbsp;iPad,<br/>全系列亮相。</h2>
      <ul>
        <li v-for="(item,index) in desc" :key="index">
          <img class="iPad_Img" :src="item.img">
          <div class="content">
            <h2 class="desc_one">{{item.desc_one}}</h2>
            <h3 class="desc_two">{{item.desc_two}}</h3>
            <div class="desc_price">RMB {{item.price}} 起</div>
            <button class="desc_buy">购买</button>
            <div class="desc_three">{{item.desc_three}}</div>
          </div>
        </li>
      </ul>   
    </div>
    <div class="wrapper-three">
      <div class="title">iPad 机型比较</div>
      <ul class="content">
        <li v-for="(item,index) in compare" :key="index">
          <img class="iPad_Img" :src="item.img">
          <div class="desc_one">{{item.desc_one}}</div>
          <div class="desc_two">{{item.desc_two}}</div>
          <div class="desc_three">{{item.desc_three}}</div>
          <div class="desc_three">{{item.desc_four}}</div>
          <div class="desc_three">{{item.desc_five}}</div>
          <div class="desc_three">{{item.desc_six}}</div>
          <div class="desc_three">{{item.desc_seven}}</div>
          <div class="desc_three">{{item.desc_eight}}</div>
          <div class="desc_four">{{item.desc_nine}}</div>
        </li>
      </ul>
      <div class="see">看看哪款iPad 适合你 ></div>
    </div>
    <div class="wrapper-four">
      <ul>
        <li v-for="(item, index) in detail" :key="index">
          <div class="desc_one">{{item.desc_one}}</div>
          <div class="desc_one">{{item.desc_onem}}</div>
          <div class="desc_one">{{item.desc_onemo}}</div>
          <div class="desc_two">{{item.desc_two}}</div>
          <div class="desc_three">{{item.desc_three}}</div>
          <img class="img" :src="item.img">
        </li>
      </ul>
    </div>
    <div class="wrapper-footer">
      <div class="desc">* 实际折抵金额取决于你用来折抵的 iPad 的状况和型号。年满 18 周岁及以上者才能享受此项折抵换购服务。该服务可能仅在部分 Apple Store 零售店提供，并且仅限于部分符合条件的设备。Apple 保留出于任何原因拒绝或限制任何设备 (及其数量) 的权利。现有设备的折抵金额可用于冲抵购买新的 Apple 设备。其他条款请参见www.apple.com/cn/trade-in/。 </div>
      <div class="desc">** 仅限新订阅用户。当试用期结束后，会员方案将按月自动续订。</div>
      <div class="desc">iCloud 在中国内地由云上贵州大数据产业发展有限公司运营。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "iPad",
  data() {
    return {
      headerImg: [],
      desc: [],
      compare: [],
      detail: []
    };
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5d247619ff529b110e5ccf69/Apple-Store/iPad"
      )
      .then(res => {
        console.log(res);
        this.headerImg = res.data.data.headerImg;
        this.desc = res.data.data.desc;
        this.compare = res.data.data.compare;
        this.detail = res.data.data.detail;
      });
  }
};
</script>

<style lang="stylus" scoped>
.wrapper-one
  background-color #fafafa
  border-bottom 20px solid #ffffff
  border-bottom 1px solid #d6d6d6
  &.first-child
    border none
  .content
    white-space nowrap
    width 100%
    height 120px
    overflow scroll
    background-color #f1f1f1
    .img_box
      display inline-block
      list-style none    
      margin-top 25px
      .img
        width 50px
        height 50px
        margin 0 20px
      .name
        font-size 12px
        text-align center
  .exchange
    text-align center
    margin 20px 35px 
    font-size 14px
    .look
      color #0070c9
.wrapper-two
  width 100%
  border-bottom 10px solid #f4f3f3
  .new
    text-align center
    margin-top 30px
    font-size 36px
    font-weight 540
    line-height 1.3
    font-family "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif
  .iPad_Img
    margin-top 30px
    width 460px
    height 200px
  .content
    margin-left 65px
    list-style none
    .desc_one
      font-size 35px
      line-height 1.1
      font-weight 550
      margin-top 15px
    .desc_two
      margin-top 10px
      font-weight 500
    .desc_price
      margin-top 25px
    .desc_buy
      width 60px
      height 40px
      margin 12px 0
      background linear-gradient(#42a1ec, #0070c9)
      border-color #07c
      border-width 1px
      border-style solid
      border-radius 4px
      color #ffffff
    .desc_three
      color #0070c9
      font-size 16px
      margin-bottom 50px
.wrapper-three
  width 100%
  border-bottom 10px solid #f4f3f3
  .title
    height 150px
    line-height 150px
    font-size 30px
    font-weight 600
    text-align center
  .content
    display flex
    flex-wrap wrap
    text-align left
    height auto
    list-style none
    margin-left 50px
    .iPad_Img
      width 110px
      height 140px
    .desc_one
      font-size 20px
    .desc_two 
      font-size 14px
    .desc_three
      font-size 14px
      width 147px
    .desc_four
      font-size 14px
      margin-bottom 40px
  .see
    height 50px
    line-height 50px
    text-align center
    font-size 14px
    color #0070c9
    margin-bottom 30px
.wrapper-four
  width 100%
  .desc_one
    font-size 30px
    line-height 1.1
    font-weight 550
    margin-top 20px
    text-align center
  .desc_two
    margin 20px
    font-weight 500
    text-align center
  .desc_three
    margin-top 20px
    text-align center
    color #0070c9
  .img
    margin-top 30px
    width 420px
    height 230px
    border-bottom 10px solid #f4f3f3
.wrapper-footer
  width 100%
  background-color #f4f3f3
  .desc
    font-size 12px
    line-height 1.33341
    font-weight 400   
    color #888
    margin 0 10px
    padding-top 10px
</style>
