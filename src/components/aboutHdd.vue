<template>
	<div>
		<div class="cells bdb" style="margin-top:0">
			<div class="cell">
				<div class="cell__bd">
					官方微信
				</div>
				<div class="cell__ft">
					QHvfu56
				</div>
			</div>
			<div class="cell bdt">
				<div class="cell__bd">官方网站</div>
				<div class="cell__ft"><a href="http://www.hdd56.com" target="_blank">http://www.hdd56.com</a></div>
			</div>
			<div class="cell bdt">
				<div class="cell__bd">客服电话</div>
				<div class="cell__ft" ><a href="tel:075526607376">0871-67366889</a></div>
			</div>
			<div class="cell bdt">
				<div class="cell__bd">公司邮箱</div>
				<div class="cell__ft"><a href="mailto:qhwf@vfu56.com">qhwf@vfu56.com</a></div>
			</div>
		</div>
		<div class="copyright">
			<p>深圳前海微服大数据科技有限公司 版权所有</p>
			<p>Copyright 2017-2027 VFU. All Rights Reserved</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			document.title = '关于货多多'
		}
	}
</script>
<style lang="stylus" scoped>
	.copyright
		position fixed
		background #f8f8f8
		z-index 10
		width 100%
		bottom 10px
		color #999
		text-align center
		font-size 12px
		line-height 20px
	.cell__ft
		a
			color #999
			text-decoration none
</style>