<template>
	<div class="container">
		<div class="titleBar">单页</div>
		<div class="grids">
			<router-link tag="div" class="grid" :to="{name: 'AppDownload'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">App下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'ConsignorDownload'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">货主下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'DriverDownload'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">司机下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'goodsDetail'}">
				<div class="grid_icon"><img src="../assets/img/detail.svg"></div>
				<div class="grid_label">货源详情</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'truckDetail'}">
				<div class="grid_icon"><img src="../assets/img/detail.svg"></div>
				<div class="grid_label">车源详情</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'agreement'}">
				<div class="grid_icon"><img src="../assets/img/agreement.svg"></div>
				<div class="grid_label">注册协议</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'infoFee',query: {agentAgreementID: '16546465421'}}">
				<div class="grid_icon"><img src="../assets/img/agreement.svg"></div>
				<div class="grid_label">信息费协议</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style lang="stylus" scoped>
	.titleBar
		background #6cc
		height 44px
		line-height 44px
		text-align center
		color #fff
</style>