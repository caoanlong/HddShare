<template>
	<div class="listItem bdtb">
		<router-link tag="div" class="baseInfo" :to="{name: 'goodsDetail', query: {id: goods.cargoSourceIDStr}}">
			<div class="ls">
				<img width="70" height="70" :src='__IMGWEBSERVER__ + "/" + goods.headPicture' @error="errorImg"/>
				<p class="text-center name" v-text="goods.realName"></p>
			</div>
			<div class="text">
				<p class="line bold">
					<span class="from">{{goods.areaFromName.split(',').length == 4 ? goods.areaFromName.split(',')[1] + goods.areaFromName.split(',')[2] : goods.areaFromName.split(',')[0] + goods.areaFromName.split(',')[1]}}</span>
					<span class="arrow"></span>
					<span class="to">{{goods.areaToName.split(',').length == 4 ? goods.areaToName.split(',')[1]+goods.areaToName.split(',')[2] :goods.areaToName.split(',')[0] + goods.areaToName.split(',')[1]}}</span>
				</p>
				<p class="quote">
					<span class="quote_sort" v-show="goods.cargoFreightType == 'Talk'">按{{goods.cargoFreightUnitName.split('/')[1]}}报价</span>
					<span class="quote_sort quote_sort1" v-show="goods.cargoFreightType == 'Agent'">收信息费</span>
					<span class="quote_status" v-show="goods.cargoFreightType == 'Fix'">{{goods.cargoFreightPrice||'--'}}{{goods.cargoFreightUnitName}}</span>
				</p>
				<p class="cargoDesc">{{goods.cargoName||'无'}}/{{goods.cargoWeight}}吨/{{goods.cargoVolume}}方/{{goods.cargoNum}}件</p>
				<p class="truckDesc">{{goods.truckLengthName}}/{{goods.truckTypeName}}/<span class="c3">剩{{goods.surplusTruckNum}}车</span>/{{goods.loadingDate || '随时'}}装车</p>
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
			padding 10px 10px 10px 85px
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
					line-height 20px
					padding-left 18px
					margin-top 3px
					&:before
						position absolute
						left 0
						top 3px
						content ''
						display block
						width 14px
						height 14px
				.line
					padding-right 20px
					&:before
						background url('../../assets/img/local_icon.svg') no-repeat center
						background-size contain
				.quote
					margin-top 6px
					padding-right 40px
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
						border 1px solid #f60
						padding 1px 5px
						border-radius 8px
					&:before
						background url('../../assets/img/quote_icon.svg') no-repeat center
						background-size 80% 80%
				.cargoDesc
					padding-right 40px
					&:before
						background url('../../assets/img/package.svg') no-repeat center
						background-size 80% 80%
				.truckDesc
					padding-right 40px
					&:before
						background url('../../assets/img/truckDesc_icon.svg') no-repeat center
						background-size contain
				.line
					@extend .bold
					font-size 14px
					color #666
					overflow hidden
					height 20px
					margin-top 0
					span
						display block
						float left
						height 20px
						&.from
						&.to
							overflow hidden
							text-overflow ellipsis
							white-space nowrap
					.arrow
						flex 0 0 20px
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
			transform translateY(-50%)
</style>
