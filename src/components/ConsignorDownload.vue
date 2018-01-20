<template>
	<div class="container">
		<div class="tit"><img src="../../static/img/appTit1.png" /></div>
		<div class="des">
			一款专门为货车司机们量身打造的赚钱工具，广大货车司机可以通过货多多找到海量实时货源信息，并承接运输任务，也可发布自己的求货信息，货多多会第一时间帮您联系有需要的货主，让您轻轻松松赚大钱。
		</div>
		<div class="appDes" @click="showImg = !showImg"><img src="../../static/img/appDesPic1.png"/></div>
		<!-- ios -->
		<a class="downLoadBtn" href="http://www.pgyer.com/Xf1r" v-show="!isAndroid"><img src="../../static/img/downLoad_btn.png" /></a>
		<!-- android -->
		<a class="downLoadBtn" href="https://www.pgyer.com/ywH8" v-show="isAndroid"><img src="../../static/img/downLoad_btn.png" /></a>
		<div class="mask" v-show="showImg"  @click="showImg = !showImg"></div>
		<img class="qrImg" :src="qrImg" v-show="showImg"/>
	</div>
</template>
<script type="text/javascript">
	const u = navigator.userAgent
	export default {
		data () {
			return {
				showImg: false,
				isAndroid:  u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
			}
		},
		computed: {
			qrImg () {
				if (this.isAndroid) {
					return '../../static/img/androidShipper.png'
				} else {
					return '../../static/img/Xf1r.png'
				}
				
			}
		},
		created () {
			document.title = '货主下载'
		}
	}
</script>
<style lang="stylus" scoped>
	img
		width 100%
	*
		box-sizing border-box
	.container
		background url('../../static/img/downLoad_bg.png') no-repeat #36b4e8 bottom center
		background-size 100%
		width 100%
		min-height 100%
		left 0
		botton 0
		top 0
		position absolute
		.tit
		.appDes
			width 80%
			margin 20px auto
		.des
			color #fff
			font-size 10pt
			padding:0 20px
		.downLoadBtn
			display block
			width 180px
			margin 10px auto 0
		.mask
			background-color rgba(0,0,0,.4)
			position fixed
			left 0
			top 0
			right 0
			bottom 0
		.qrImg
			display block
			width 80%
			position fixed
			left 50%
			top 50%
			transform translate(-50%,-50%)
</style>