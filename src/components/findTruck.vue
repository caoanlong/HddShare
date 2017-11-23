<template>
	<div class="findGoods">
		<div class="filter-box">
			<div class="truckSort"  @click="filterPop">车型</div>
			<div class="truckLength">车长</div>
			<div class="map"><i></i>地图找车</div>
		</div>
		<Truck v-for="i in 10" key="i"></Truck>
		<div class="filter-pop" :class="{'show':popShow}"></div>
	</div>
</template>
<script type="text/javascript">
	import Truck from './FindTruck/Truck';
	export default {
		data () {
			return {
				popShow: false
			}
		},
		components: {
			Truck,
		},
		methods: {
			filterPop() {
				this.popShow = !this.popShow
				console.log(this.popShow)
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.findGoods
		padding-top 40px
	.filter-box
		background #fff
		box-shadow 0 0 5px rgba(0,0,0,.5)
		position fixed
		top 0
		left 0
		right 0
		z-index 10
		height 40px
		padding 5px
		display flex
		font-size 12px
		.truckSort
		.truckLength
			flex 1
			border 1px solid #ddd
			padding 0 30px 0 5px
			line-height 28px
			border-radius 4px
			margin-right 10px
			background url('../assets/img/arrow-b.png') no-repeat right center
		.truckLength
			margin-right 20px
		.arrow
			flex 0 40px
			background url('../assets/img/arrow.svg') no-repeat center
			display inline-block
			background-size contain
			width 40px
			height 30px
			vertical-align top
		.map
			flex 0 90px
			text-align center
			line-height 30px
			position relative
			color #999
			line-height 28px
			border-radius 4px
			border 1px solid #ddd
			&:before
				content ""
				width 1px
				position absolute
				left -12px
				background #ddd
				top 0
				bottom 0
			i
				width 28px
				height 28px
				background url('../assets/img/map.svg') no-repeat center
				background-size contain
				display inline-block
				vertical-align middle
	.filter-pop
		position fixed
		top 100%
		left 0
		right 0
		background #fff
		height 100%
		transition top .2s
		-moz-transition top .2s
		-webkit-transition top .2s
		-o-transition top .2s
		&.show
			top 40px
			
</style>