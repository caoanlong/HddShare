<template>
	<div class="container">
		<div class="tit"><img src="../../static/img/appTit2.png" /></div>
		<div class="des">
			一款专门为物流企业提供发货，找车，管车、跟踪的APP。货多多为广大企业提供了海量真实车源信息，物流企业可以发布自己货源给司机，司机接单后系统实时监控在途运输货源状 态，让您的轻轻松松调度管理车辆。
		</div>
		<div class="appDes"  @click="showImg = !showImg"><img src="../../static/img/appDesPic2.png" /></div>
		<!-- ios -->
		<a class="downLoadBtn" href="http://www.pgyer.com/RjkA" v-show="!isAndroid"><img src="../../static/img/downLoad_btn.png" /></a>
		<!-- android -->
		<a class="downLoadBtn" href="https://www.pgyer.com/npqs" v-show="isAndroid"><img src="../../static/img/downLoad_btn.png" /></a>
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
					return '../../static/img/androidDriver.png'
				} else {
					return './../static/img/RjkA.png'
				}
				
			}
		},
		created () {
			document.title = '司机下载'
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