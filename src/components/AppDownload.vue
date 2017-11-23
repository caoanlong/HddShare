<template>
	<div class="container">
		<router-link tag="div" to="" class="logo"><img src="../../static/img/hdd_logo.png"/></router-link>
		<div class="publish"><img src="../../static/img/publish.png"/></div>
		<div class="specialty"><img src="../../static/img/specialty.png"/></div>
		<div class="downSection">
		<div class="downItem">
			<img class="qrcode" src="../../static/img/qrcode1.png" />
			<div class="downLoadBtn"><img src="../../static/img/downLoad_btn1.png" /></div>
		</div>
		<div class="downItem">
			<img class="qrcode" src="../../static/img/qrcode2.png" />
			<div class="downLoadBtn"><img src="../../static/img/downLoad_btn2.png" /></div>
		</div>
		</div>
		<div class="footer">
			深圳市前海微服大数据科技有限公司
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
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
				width 100px
				height 100px
			.downLoadBtn
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