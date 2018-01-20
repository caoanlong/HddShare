<template>
	<div class="container">
		<router-link tag="div" to="" class="logo"><img src="../../static/img/hdd_logo.png"/></router-link>
		<div class="publish"><img src="../../static/img/publish.png"/></div>
		<div class="specialty"><img src="../../static/img/specialty.png"/></div>
		<div class="downSection">
		<!-- ios -->
		<div class="downItem" v-show="isiOS">
			<!-- 货主 -->
			<img class="qrcode" src="../../static/img/Xf1r.png" />
			<a class="downLoadBtn" href="http://www.pgyer.com/Xf1r"><img src="../../static/img/downLoad_btn1.png" /></a>
		</div>
		<div class="downItem" v-show="isiOS">
			<!-- 司机 -->
			<img class="qrcode" src="../../static/img/RjkA.png" />
			<a class="downLoadBtn" href="http://www.pgyer.com/RjkA"><img src="../../static/img/downLoad_btn2.png" /></a>
		</div>
		<!-- android -->
		<div class="downItem" v-show="isAndroid">
			<!-- 货主 -->
			<img class="qrcode" src="../../static/img/androidShipper.png" />
			<a class="downLoadBtn" href="https://www.pgyer.com/ywH8"><img src="../../static/img/downLoad_btn1.png" /></a>
		</div>
		<div class="downItem" v-show="isAndroid">
			<!-- 司机 -->
			<img class="qrcode" src="../../static/img/androidDriver.png" />
			<a class="downLoadBtn" href="https://www.pgyer.com/npqs"><img src="../../static/img/downLoad_btn2.png" /></a>
		</div>
		</div>
		<div class="footer">
			深圳前海微服大数据科技有限公司
		</div>
	</div>
</template>
<script type="text/javascript">
	const u = navigator.userAgent
	export default {
		data () {
			return {
				isAndroid:  u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
				isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
			}
		},
		created () {
			document.title = 'App下载'
		}
	}
</script>
<style lang="stylus" scoped>

	img
		width 100%
	*
		box-sizing border-box
	.container
		background url('../../static/img/downLoad_bg.jpg') no-repeat center
		background-size cover
		width 100%
		min-height 100%
		left 0
		botton 0
		top 0
		position absolute
		.logo
			width 140px
			padding 20px
			
		.publish
			width 60%
			margin 0 auto 20px
		.specialty
			width 90%
			margin 0 5%
		.downSection
			&:after
				clear both
				display block
				content ''
		.downItem
			width 50%
			padding 20px  0
			float left
			text-align center
			
			.qrcode
				width 120px
				height 120px
				padding 10px
				background #fff
				border-radius 8px
			.downLoadBtn
				display block
				width 140px
				margin 10px auto 0			
		.footer
			color #fff
			height 30px
			line-height 30px
			width 100%
			text-align center
			font-size 12px

</style>