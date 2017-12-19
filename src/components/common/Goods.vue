<template>
	<div class="listItem bdtb">
		<router-link tag="div" class="baseInfo" :to="{name: 'goodsDetail', query: {id: goods.cargoSourceIDStr}}">
			<div class="ls">
				<img width="70" height="70" :src='__IMGWEBSERVER__ + "/" + goods.headPicture' @error="errorImg"/>
				<p class="text-center name" v-text="goods.realName"></p>
			</div>
			<div class="text">
				<p class="line bold">
					<span class="from" ref="autoW1">{{goods.areaFromName}}</span>
					<span class="arrow"></span>
					<span class="to" ref="autoW2">{{goods.areaToName}}</span>
				</p>
				<p class="quote">
					<span class="quote_sort" v-show="goods.cargoFreightType == 'Talk'">按吨报价</span>
					<span class="quote_sort quote_sort1" v-show="goods.cargoFreightType == 'Agent'">收信息费</span>
					<span class="quote_status" v-show="goods.cargoFreightType == 'Fix'">已报价{{goods.cargoFreightPrice||0}}{{goods.cargoFreightUnitName}}</span>
				</p>
				<p class="cargoDesc">{{goods.cargoName||'无'}}/{{goods.cargoWeight}}吨/{{goods.cargoVolume}}方/{{goods.cargoNum}}件</p>
				<p class="truckDesc">{{goods.truckLengthName}}/{{goods.truckTypeName}}/需{{goods.truckNum}}车/<span class="c3">剩{{goods.surplusTruckNum}}车</span>/{{goods.loadingDate}}装车</p>
			</div>
		</router-link>
		<!-- <a class=" icon-phone" :href="'tel:'+goods.mobile"></a> -->
		<router-link tag="div" :to="{name: 'AppDownload'}" class="icon-phone"></router-link>
	</div>
</template>
<script>
	import {defaultImg} from '../../assets/data/icons'
	export default {
		props: {
			goods: {
				type: Object
			}
		},
		data() {
			return {
				headPicture: '',
				quote_sort: 1
			}
		},
		mounted() {
			var w = (document.body.clientWidth - 185)/2
			this.$refs.autoW1.style.width = w +'px'
			this.$refs.autoW2.style.width = w +'px'
		},
		methods: {
			errorImg (e) {
				e.target.src = defaultImg
				e.target.onerror = null
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.c1
		color #6cc
	.c3
		color #f60
	.bold
		font-weight bold
	.listItem
		background-color #fff
		margin-bottom 10px
		font-size 12px
		.baseInfo
			padding 10px 50px 10px 90px
			position relative
			min-height 110px
			.ls
				position absolute
				left 10px
				top 10px
				width 70px
				img
					border-radius 4px
				.name
					font-size 13px
					text-align center
			.text
				p
					color #999
				.line
				.quote
				.cargoDesc
				.truckDesc
					position relative
					height 20px
					line-height 20px
					overflow hidden
					padding-left 25px
					margin-top 3px
					text-overflow ellipsis
					white-space nowrap
					&:before
						position absolute
						left 0
						top 0
						content ''
						display block
						width 20px
						height 20px
				.line
					&:before
						background url('../../assets/img/local_icon.svg') no-repeat center
						background-size contain
				.quote
					margin-top 6px
					.quote_sort
						border 1px solid #6cc
						padding 1px 5px
						border-radius 8px
						margin-right 5px
						color #6cc
						&.quote_sort1
							border-color #1a8df8
							color #1a8df8
					.quote_status
						color #f60
					&:before
						background url('../../assets/img/quote_icon.svg') no-repeat center
						background-size 80% 80%
				.cargoDesc
					&:before
						background url('../../assets/img/package.svg') no-repeat center
						background-size 80% 80%
				.truckDesc
					&:before
						background url('../../assets/img/truckDesc_icon.svg') no-repeat center
						background-size contain
				.line
					@extend .bold
					font-size 16px
					color #666
					overflow hidden
					height 20px
					margin-top 0
					span
						display block
						vertical-align top
						float left
						height 20px
						&.from
						&.to
							overflow hidden
							text-overflow ellipsis
							white-space nowrap
					.arrow
						background url('../../assets/img/area_arrow.png') no-repeat center
						background-size contain
						width 20px
						vertical-align middle
		.icon-phone
			right 10px
			width 30px
			height 30px
			background-image url('../../assets/img/ic_call_phone_image.png')
			background-size cover
			display block
			position absolute
			top 50%
			margin-top -15px
</style>
