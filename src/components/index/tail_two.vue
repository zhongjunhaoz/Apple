<template>
    <div class="tail">
        <ul>
            <li v-for="(item,index) in tail" :key="index" class="know">
                <div class="title_box">
                    <div class="know_title">{{item.name}}</div>
                    <p class="icon" @click="show = !show">+</p>
                </div>
                <ul class="list" :class="show ? 'open': 'close'" >
                    <li>Mac</li>
                    <li>Music</li>
                    <li>ipad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
                this.$http.get('https://www.easy-mock.com/mock/5d340938763f0068c2361dd6/VueJsApple/tail')
                .then(res =>{
                    // console.log(res.data.tail)
                    this.tail = res.data.tail
                })
            },
    data() {
        return {
            tail: [],
            show: false
        }
    },
}
</script>

<style lang='stylus' scoped>
.tail
    background-color #f2f2f2
    padding-top 40px
    .title_box
        display flex
        .know
            flex 1
        .know_title
            flex 7
            padding-left 20px
            font-size 10px
        .icon
            flex 1
            font-size 12px
    .list
        padding-left 30px
        font-style 10px
        transition all 0.8s 
    .list>li
        font-size 10px
        list-style none
        color #555555
    .list.open
        height 75px
    // .list.close
    //     height -20px
</style>
