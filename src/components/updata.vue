<template>
    <div class="updata">
        <!-- <div class="titleBar">版本更新</div> -->
        <div class="newVersion clearfix">
            <div class="version_box">
                <img src="../../static/img/newVer_bg.png"/>
                <p>V2.0.1</p>
                <router-link class="updataBtn" to="">立即更新</router-link>
            </div>
            <div class="version_info">
                <p class="tit">发现新版本</p>
                <p>2017-11-08</p>
                <p>13.5MB</p>
                <div class="des">
                    <p>-新增银行卡提现功能</p>
                    <p>-新增企业员工角色功能</p>
                    <p>-修复了V2.0.4版本BUG</p>
                </div>
            </div>
        </div>
        <div class="version_info_Detail">
            <div class="item clearfix">
                <div class="tit">1.新增银行卡提现功能</div>
                <ul class="clearfix">
                    <li><img src="../../static/img/pic1.jpg"/>点击“我的”-“我的钱包</li>
                    <li><img src="../../static/img/pic2.jpg"/>点击“提现”</li>
                    <li><img src="../../static/img/pic3.jpg"/>选择银行卡,输入提现金额</li>
                </ul>
            </div>
            <div class="item bdt clearfix">
                <div class="tit">2.新增企业员工角色功能</div>
                <ul class="clearfix">
                    <li><img src="../../static/img/pic1.jpg"/></li>
                    <li><img src="../../static/img/pic2.jpg"/></li>
                    <li><img src="../../static/img/pic3.jpg"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                content: ''
            }
        },
        created() {
            this.getVersionDetail()
        },
        methods: {
            getVersionDetail() {
                let URL = this.__WEBSERVER__ + 'system/version/detail'
                let params = {
                    appVersionID: this.$route.query.appVersionID,
                    Authorization: this.$route.query.Authorization
                }
                this.$http.get(URL,{params: params}).then((res) => {
                    console.log(res)
                    this.content = res.body.data
                })
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .titleBar
        background #6cc
        height 44px
        line-height 44px
        text-align center
        color #fff
    .newVersion
        background #6cc
        padding 15px
        color #fff
        .version_box
            width 50%
            background #fff
            border-radius 10px
            float left
            position relative
            text-align center
            img
                width 80%
                margin .5rem auto 0
            p
                position absolute
                left 50%
                top 50%
                transform translate(-50%,-50%)
            .updataBtn
                height 1.6rem
                border-radius .8rem
                line-height 1.6rem
                background #fcc62d
                color #fff
                width 80%
                display block
                text-decoration none
                text-align center
                margin .5rem auto
                font-size 14px
        .version_info
            float right
            width 45%
            font-size 14px
            .tit
                font-size 16px
                font-weight bold
            p
                padding-bottom 5px
            .des
                p 
                    font-size 12px

    .version_info_Detail
        padding 10px
        background #fff
        .tit
            font-size 16px
            color #666
            font-weight bold
        li
            width 33.3333%
            float left
            padding 10px
            font-size 12px
            color #666
            img
                width 100%
        .item
            padding 20px 0
</style>