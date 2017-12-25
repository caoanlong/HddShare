<template>
	<div class="listItem bdtb">
		<router-link tag="div" class="baseInfo" :to="{name: 'truckDetail', query: {id: truck.memIDStr}}">
			<div class="ls">
				<img width="70" :src='__IMGWEBSERVER__ +"/"+ truck.headPicture' @error="errorImg"/>
        	</div>
        	<div class="text">
        		<p class="driver">{{truck.realName}} {{truck.plateNo}}</p>
        		<p class="truckInfo">{{truck.truckLengthName}}/{{truck.truckTypeName}}/{{truck.loads}}吨</p>
				<p class="local">{{truck.posUpdateTime}} {{truck.posAreaName}}</p>
            </div>
		</router-link>
	    <!-- <a class=" icon-phone" :href="'tel:'+10086"></a> -->
	    <router-link tag="div" :to="{name: 'AppDownload'}" class="tel"><img src="../../assets/img/ic_call_phone_image.png" /></router-link>
    </div>
</template>
<script>
	import {defaultImg} from '../../assets/data/icons'
	export default {
		props: {
			truck: {
				type: Object
			}
		},
		data() {
			return {
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
	.bold
		font-weight bold
	.listItem
		background-color #fff
		margin-bottom 10px
		font-size 12px
		.baseInfo
			padding 10px 50px 10px 85px
			position relative
			min-height 90px
			.ls
				position absolute
				left 10px
				top 10px
				width 70px
				img
					border-radius 4px
			.text
				color #999
				.driver
				.truckInfo
				.local
					height 24px
					line-height 24px
					padding-left 18px
					position relative
					&:before
						content ''
						position absolute
						left 0
						top 3px
						width 14px
						height 14px
				.driver
					font-size 14px
					font-weight bold
					&:before
						background url('../../assets/img/driver.svg') no-repeat center
						background-size contain
						font-size 14px
				.truckInfo
					color #6cc
					&:before
						background url('../../assets/img/truckDesc_icon.svg') no-repeat center
						background-size contain
				.local
					&:before
						background url('../../assets/img/local_icon.svg') no-repeat center
						background-size contain
		.tel
			position absolute
			right 15px
			top 50%
			width 40px
			height 40px
			-webkit-transform translateY(-50%)
			transform translateY(-50%)
			img
				width 40px
				height 40px
				vertical-algin top
</style>
