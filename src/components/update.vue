<template>
	<div class="updata">
		<div class="newVersion clearfix">
			<div class="version_box">
				<img src="../../static/img/newVer_bg.png"/>
				<p style="font-weight:bold">{{appVersionInfo.version}}</p>
				<div class="updataBtn" v-if="this.isLastVersion=='Y'">已经是最新版本</div>
				<div class="updataBtn" v-else @click="updata">立即更新</div>
			</div>
			<div class="version_info">
				<p class="tit">发现新版本</p>
				<p v-if="appVersionInfo.releaseTime">{{appVersionInfo.releaseTime}}</p>
				<p v-if="appVersionInfo.versionSize">{{appVersionInfo.versionSize}}MB</p>
				<div class="des" v-html="updataDes"></div>
			</div>
		</div>
		<div class="version_info_Detail ql-editor" id="version_info_Detail" v-html="appVersionInfo.richTextContent"></div>
	</div>
</template>
<script type="text/javascript">
import {callMessage} from '../common/global'
export default {
	data() {
		return {
			appVersionInfo: '',
			updataDes:'',
			version:'',
			versionDes:'',
			type: '',
			isLastVersion:''
		}
	},
	created() {
		this.getInfo()
	},
	methods: {
		getInfo() {
			const URL = this.__WEBSERVER__ + 'system/version/detail'
			const params = {
				appVersionID: this.$route.query.appVersionID,
				Authorization: this.$route.query.Authorization
			}
			this.$http.get(URL, { params: params }).then(res => {
				const data = res.body.data
				this.appVersionInfo = data
				this.version = data.type + data.version
				this.isLastVersion = this.$route.query.isLastVersion
				if (data.content) this.updataDes = data.content.replace(/\n/g, "<br/>")
				this.$nextTick(() => {
					let imgs = document.getElementById('version_info_Detail').getElementsByTagName('img')
					for (var i = 0; i < imgs.length; i++) {
						imgs[i].setAttribute('width', '100%')
					}
				})
			})
		},
		updata() {
			callMessage({
				code: 1001,
				msg: '更新版本'
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
				line-height 1.8
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