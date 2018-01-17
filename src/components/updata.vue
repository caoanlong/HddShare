<template>
    <div class="updata">
        <!-- <div class="titleBar">版本更新</div> -->
        <div class="newVersion clearfix">
            <div class="version_box">
                <img src="../../static/img/newVer_bg.png"/>
                <p style="font-weight:bold">v{{$route.query.appVersionID&&$route.query.appVersionID.split('').join('.')}}</p>
                <div class="updataBtn" v-if="appVersionInfo.isLatest=='Y'">已经是最新版本</div>
                <a class="updataBtn" :href="appVersionInfo.downloadURL" v-else>立即更新</a>
            </div>
            <div class="version_info">
                <p class="tit">发现新版本</p>
                <p>{{appVersionInfo.releaseTime}}</p>
                <p>{{appVersionInfo.versionSize}}MB</p>
                <div class="des">
                    <p v-for="item in updataDes">{{item}}</p>
                </div>
            </div>
        </div>
        <div class="version_info_Detail" id="version_info_Detail" v-html="VersionDes"></div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                appVersionInfo: '',
                updataDes:'',
                version:'',
                VersionDes:''
            }
        },
        created() {
            document.title = '版本更新'
            this.getVersionDetail()
            
        },
        methods: {
            getVersionDetail() {
                let URL = this.__WEBSERVER__ + 'system/version/detail'
                let params = {
                    appVersionID: this.$route.query.appVersionID,
                    Authorization: this.$route.query.Authorization
                }
                this.$http.get(URL, {params: params}).then(res => {
                    this.appVersionInfo = res.body.data
                    this.version = res.body.data.version
                    this.updataDes = JSON.parse(res.body.data.content)
                    // console.log(res.body.data)
                    this.$nextTick(() => {
                        this.getVersionDes()
                    })
                })
            },
            getVersionDes() {
                let URL = this.__WEBSERVER__ + 'content/findFreeContentListByTopicCode'
                let params = {
                    code: this.version
                }
                this.$http.get(URL, {params: params}).then(res => {
                    this.VersionDes = res.body.data[0].content
                    this.$nextTick(() => {
                        let imgs = document.getElementById('version_info_Detail').getElementsByTagName('img')
                        for (var i = 0; i < imgs.length; i++) {
                            imgs[i].setAttribute('width','100%')
                        }
                    })
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