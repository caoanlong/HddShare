<template>
	<div class="container">
		<div class="loading" v-show="loadStatus == '正在加载...'">
            <img class="icon" src="../../assets/img/loading.gif"/>
            <p class="text">{{loadStatus}}</p>
        </div>
        <div class="empty" v-show="loadStatus == '没有结果'" >
        	<div v-if="sortType=='Fgoods'">
        		<img src="../../../static/img/empty_icon3.png" class="icon"/>
            	<p class="tips">暂无匹配货源</p>
            	<p class="sub_tips">没要您要找的货源哦，<span class="c1">换个条件</span>试试</p>
            </div>
        	<div v-if="sortType=='Ftruck'">
        		<img src="../../../static/img/empty_icon1.png" class="icon"/>
            	<p class="tips">暂无匹配车辆</p>
            	<p class="sub_tips">没要您要找的车辆哦，<span class="c1">换个条件</span>试试</p>
            </div>
        </div>
	</div>
</template>
<script>
export default {
	props: {
		loadStatus: {
			type: String,
			default: '正在加载...'
		},
		sortType:''
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
		.empty
			text-align center
			color #999
			padding-top 20px
			font-size 14px
			.icon
				width 80%
			.tips
				font-weight bold
				color #666
				font-size 24px
				margin-bottom 10px
</style>