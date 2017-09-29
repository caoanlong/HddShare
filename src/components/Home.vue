<template>
	<div>
		<div class="grids">
			<router-link tag="div" class="grid" :to="{name: 'AppDownload'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">App下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'App1Download'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">货主下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'App2Download'}">
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
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style lang="stylus" scoped>

</style>