<template>
	<div class="container">
		<div class="loading">
            <img class="icon" src="../../assets/img/loading.gif" v-show="loadStatus == '正在加载...'"/>
            <p class="text">{{loadStatus}}</p>
        </div>
	</div>
</template>
<script>
export default {
	props: {
		loadStatus: {
			type: String,
			default: '正在加载...'
		}
	},
	methods: {
	}
}
</script>
<style lang="stylus" scoped>
	.container
		width 100%
		height 60px
		margin-bottom 10px
		display flex
		&:before
			content ''
			display block
		.loading
			height 60px
			line-height 60px
			margin 0 auto
			.icon
				display inline-block
				width 24px
				height 24px
				margin-right 5px
				position relative
				top 6px
            .text
				display inline-block
				color #999
</style>