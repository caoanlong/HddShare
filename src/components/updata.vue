<template>
	<div class="updata">
		<!-- <div class="titleBar">版本更新</div> -->
		<div class="newVersion clearfix">
			<div class="version_box">
				<img src="../../static/img/newVer_bg.png"/>
				<p style="font-weight:bold">{{appVersionInfo.version}}</p>
				<div class="updataBtn" v-if="this.isLastVersion=='Y'">已经是最新版本</div>
				<div class="updataBtn" v-else @click="updata">立即更新</div>
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
	import {callMessage} from '../common/global'
	export default {
		data() {
			return {
				appVersionInfo: '',
				updataDes:'',
				version:'',
				VersionDes:'',
				type: '',
				isLastVersion:''
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
					// appVersionID: '404212195594334208',
					Authorization: this.$route.query.Authorization
					// Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzOTExNzc0MTAyNjUzNjY1MjgiLCJzdWIiOiIzOTExNzc0MTAyNjUzNjY1MjgiLCJuYmYiOjE1MTYxNjI1MDMsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MTY3NjczMDMsImRldmljZSI6IkFQUCIsImlhdCI6MTUxNjE2MjUwMywic2VxIjo0MDMxNjAyOTAxNzI0ODU2MzJ9.kVIACbcRNYaEPJXUCYmW-pJFbXUV0U1avbbGBqEFmzQ'
				}
				this.$http.get(URL, {params: params}).then(res => {
					this.appVersionInfo = res.body.data
					this.version = res.body.data.type+res.body.data.version
					this.isLastVersion = this.$route.query.isLastVersion
					this.getVersionDes()
					if (res.body.data.content) {
						if (res.body.data.content.split('[')[0]) {
							this.updataDes = JSON.parse(res.body.data.content)
						}
					}           
				})
			},
			getVersionDes() {
				let URL = this.__WEBSERVER__ + 'content/findFreeContentListByTopicCode'
				let params = {
					code: this.version
				}
				this.$http.get(URL, {params: params}).then(res => {
					if (res.body.data[0]) {
						this.VersionDes = res.body.data[0].content
					}
					this.$nextTick(() => {
						let imgs = document.getElementById('version_info_Detail').getElementsByTagName('img')
						for (var i = 0; i < imgs.length; i++) {
							imgs[i].setAttribute('width','100%')
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