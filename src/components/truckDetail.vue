<template>
	<div class="container">
		<div class="titleBar">车源详情</div>
		<div class="baseInfo bdb">
			<img  src='../assets/img/defaultImg.svg' class="pic" />
		    <p>
		    	<b class="name">罗凯</b>
		    	<span class="attention"><img src="../assets/img/attention.svg" />已认证</span>
		    </p>
		    <p>驾龄：7年</p>
		    <p class="history">平台承运<span class="c1">998</span>笔 / 好评率<span class="c2">99.5%</span></p>
		    <div class="tel"><img src="../assets/img/ic_call_phone_image.png" /></div>
		</div>
		<div class="truckInfo bdtb">
			<img  src='../assets/img/defaultImg.svg' class="pic" />
			<p><b class="truckNum">云A·12345</b></p>
		    	<p>9.6米/集装箱车/车龄3年</p>
		    	<p>刚刚定位 昆明 离我56Km</p>
		    	<div class="viewMap"><img src="../../static/img/viewMap.png" /></div>
		</div>

		<div class="cells bdtb">
			<div class="cell">
				<div class="cell__hd"><img class="icon" src="../assets/img/position_icon.svg"></div>
				<div class="cell__bd"><label class="labels">求货流向</label><span class="fr f12 c9">5分钟前发布 2017-06-15 可装货</span></div>
			</div>
			<div class="cell bdt">
				<div class="cell__hd"><img class="icon" src="../assets/img/start_icon.svg" width="22"></div>
				<div class="cell__bd">云南 昆明</div>
			</div>
			<div class="cell bdt">
				<div class="cell__hd"><img class="icon" src="../assets/img/end_icon.svg" width="22"></div>
				<div class="cell__bd">云南 保山、深圳 南山区、广东 深圳市、北京 北京市、上海 上海市</div>
			</div>
			<div class="cell bdt">
				<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon5.svg"></div>
				<div class="cell__bd"><label class="labels">车主留言</label></div>
			</div>
			<div class="cell bdt">
				<div class="cell__bd">经常跑云南到广东,可以装蔬菜,水果等农产品</div>
			</div>
		</div>
		<div class="padd">
			<router-link tag="div" to="" class="btn"><img src="../assets/img/push.svg" />推送货源</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		
	}
</script>
<style lang="stylus" scoped>
	
	.titleBar
		background #6cc
		height 44px
		line-height 44px
		text-align center
		color #fff
	.baseInfo
		background #fff
		padding 10px 15px 10px 85px
		position relative
		height 80px
		color #999
		font-size 14px
		.pic
			position absolute
			left 15px
			top 10px
			border-radius 4px
			width 60px
			height 60px
		.name
			font-size 16px
			color #666
			font-weight bold
		.history
			span
				padding 0 5px
		.attention
		.name
			display inline-block
			vertical-align top
			margin-right 5px
		.attention
			border 1px solid #6cc
			padding 1px 8px
			border-radius 10px
			font-size 12px
			color #6cc
			img
				width 12px
				height 12px
				vertical-align top
				margin-top 2px
		.tel
			position absolute
			right 15px
			top 50%
			width 40px
			height 40px
			-webkit-transform translateY(-50%)
			transform translateY(-50%)
			img
				width 100%
	.truckInfo
		background #fff
		margin-top 10px
		padding 10px 15px 10px 85px
		position relative
		height 80px
		color #999
		font-size 14px
		.truckNum
			font-size 16px
			color #666
			font-weight bold
		.pic
			position absolute
			left 15px
			top 10px
			border-radius 4px
			width 60px
			height 60px
		.viewMap
			position absolute
			right 15px
			top 50%
			width 40px
			height 40px
			-webkit-transform translateY(-50%)
			transform translateY(-50%)
			img
				width 100%
	.cell__hd
		.icon
			vertical-align middle
	.cell__bd
		color #666
		span
			display inline-block
			vertical-align middle
			height 24px
			line-height 24px
			b
				color #f60
				padding 0 5px
			&.arrow
				background url('../assets/img/arrow.svg') no-repeat center
				width 30px
				height 24px
				background-size cover
		.labels
			width 80px
			color #999
			display inline-block
			vertical-align middle
	.btn
		color #fff
		height 44px
		line-height 44px
		border-radius 4px
		background #ffc426
		text-align center
		img
			height 20px
			vertical-align middle
			margin -2px 5px 0 0
			
				
</style>