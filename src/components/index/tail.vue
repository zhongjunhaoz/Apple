<template>
  <div class="tail">
    <div class="know">
      <p class="know_title">选购及了解</p>
      <p class="icon" @click="showKnow = !showKnow">+</p>
    </div>
    <transition name="fade">
      <div class="list" v-show="showKnow">
        <div>Mac</div>
        <div>iPad</div>
        <div>iPhone</div>
        <div>Watch</div>
        <div>Music</div>
        <div>iTunes</div>
        <div>HomePod</div>
        <div>iPod touch</div>
        <div>配件</div>
        <div>App Store 充值卡</div>
      </div>
    </transition>
    <div class="know">
      <p class="know_title">App Store 商店</p>
      <p class="icon" @click="showStore = !showStore">+</p>
    </div>
    <transition name="fade">
      <div class="list" v-show="showStore">
        <div>查找零售点</div>
        <div>Genius Bar 天才吧</div>
        <div>Today at Apple</div>
        <div>Apple 夏令营</div>
        <div>Field Trip 课外活动</div>
        <div>Apple Store App</div>
        <div>翻新和优惠</div>
        <div>分期付款</div>
        <div>Apple Trade In 换购计划</div>
        <div>订单状态</div>
        <div>选购帮助</div>
      </div>
    </transition>
    <div class="know">
      <p class="know_title">教育应用</p>
      <p class="icon" @click="showEducate = !showEducate">+</p>
    </div>
    <transition name="fade">
      <div class="list" v-show="showEducate">
        <div>Apple 与教育</div>
        <div>高校师生选购</div>
      </div>
    </transition>
    <div class="know">
      <p class="know_title">商务应用</p>
      <p class="icon" @click="showBusiness = !showBusiness">+</p>
    </div>
    <transition name="fade">
      <div class="list" v-show="showBusiness">
        <div>Apple 与商务</div>
        <div>商务选购</div>
      </div>
    </transition>
    <div class="know">
      <p class="know_title">账户</p>
      <p class="icon" @click="showAccount  = !showAccount">+</p>
    </div>
    <transition name="fade">
      <div class="list" v-show="showAccount">
        <div>管理你的Apple ID</div>
        <div>Apple Store 账户</div>
        <div>iClould.com</div>
      </div>
    </transition>
    <div class="know">
      <p class="know_title">Apple 价值观</p>
      <p class="icon" @click="showWorth  = !showWorth">+</p>
    </div>
    <transition name="fade">
      <div class="list" v-show="showWorth">
        <div>辅助功能</div>
        <div>环境责任</div>
        <div>隐私</div>
        <div>供应商责任</div>
      </div>
    </transition>
    <div class="know">
      <p class="know_title">关于Apple</p>
      <p class="icon" @click="showApple  = !showApple">+</p>
    </div>
    <transition name="fade">
      <div class="list" v-show="showApple">
        <div>Newsroom</div>
        <div>Apple管理层</div>
        <div>工作机会</div>
        <div>创造就业</div>
        <div>活动</div>
        <div>联系 Apple</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showKnow: false,
      showStore: false,
      showEducate: false,
      showBusiness: false,
      showAccount: false,
      showWorth: false,
      showApple: false
    };
  }
};
</script>

<style lang='stylus' scoped>
.tail {
  background-color: #F2F2F2;
  padding-top: 40px;

  .know {
    display: flex;
    padding-bottom: 20px;
    // border-bottom 1px solid #D6D6D6
    padding-top 20px
    // justify-content space-between
    .know_title {
      flex: 7;
      padding-left: 20px;
      font-size: 10px;
    }

    .icon {
      flex: 1;
      font-size: 12px;
    }
  }

  .list {
    padding-left: 30px;
    font-size: 10px;

    div {
      padding: 7px;
      color: #555555;
    }
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
  background-color #9DDEF2
}
  .fade-enter, .fade-leave-to{
  opacity: 0;
  
}
}
</style>
