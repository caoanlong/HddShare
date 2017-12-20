<template>
	<div class="listItem bdtb">
		<router-link tag="div" class="baseInfo" :to="{name: 'truckDetail', query: {id: truck.memIDStr}}">
			<div class="ls">
				<img width="70" :src='__IMGWEBSERVER__ +"/"+ truck.headPicture' @error="errorImg"/>
        	</div>
        	<div class="text">
        		<p class="driver">{{truck.realName}} {{truck.plateNo}}</p>
        		<p class="truckInfo">{{truck.truckLengthName}}/{{truck.truckTypeName}}</p>
				<p class="local">{{truck.posUpdateTime}} {{truck.posAreaName}} 离我{{truck.distance}}</p>
            </div>
		</router-link>
	    <!-- <a class=" icon-phone" :href="'tel:'+10086"></a> -->
	    <router-link tag="div" :to="{name: 'AppDownload'}" class="icon-phone"></router-link>
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
					
				
		.icon-phone
			right 15px
			width 30px
			height 30px
			background-image url('../../assets/img/ic_call_phone_image.png')
			background-size cover
			display block
			position absolute
			top 50%
			margin-top -15px
</style>
