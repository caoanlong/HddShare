<template>
	<div class="container">
		<div class="titleBar">信息费服务协议</div>
		<div class="padd">
			<div class="item">
				<img class="icon" src="../assets/img/position_icon.svg">
				<div class="lineInfo"><span class="start">昆明呈贡</span><span class="arrow"></span><span class="end">云南保山</span></div>
			</div>
			<div class="item">
				<img class="icon" src="../assets/img/detail_icon2.svg">
				<div class="goodInfo">食品/30吨/45方/裸装</div>
			</div>
			<img class="success_icon" src="../assets/img/success_icon.png">
		</div>
		<div class="pannel bdtb">

			<div class="pannel_item">
				<div class="panel_box">
					<label>装车时间</label>562017091954878
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>付款时间</label>2017-09-19  22:12:33
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>协商信息费</label><b class="c2">500.00元</b>
				</div>
			</div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c2">托运方</div>
			<div class="pannel_item">
				<div class="panel_box">
					<label>托运单位</label>云南巨峰物流
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>单位地址</label>昆明官渡区彩云北路浩宏物流园204
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>托运人</label>罗凯
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>身份证号码</label>440************452
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>13424389894
				</div>
			</div>
			<div class="section section1"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c1">承运方</div>
			<div class="pannel_item">
				<div class="panel_box">
					<label>车牌号码</label>云A·2349D
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>承运人</label>贾坤
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>身份证号码</label>440************874
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>13421645315
				</div>
			</div>
			<div class="section section2"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c3">装车信息</div>
			<div class="pannel_item">
				<div class="panel_box">
					<label>车牌号码</label>云A·2349D
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>装车地址</label>昆明五华区五华农贸市场B区4950昆明五华区五华农贸市场B区4950
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>联系人</label>刘柱
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>13590178478
				</div>
			</div>
			<div class="section section3"></div>
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
	.c3
		color #69f
	.padd
		position relative
		.item
			padding 10px 0
			color #666
			img
			.goodInfo
			.lineInfo
				display inline-block
				vertical-align middle
			.lineInfo
				font-weight bold
				color #333
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
		.success_icon
			height 80%
			position absolute
			top 50%
			right 15px
			transform:translateY(-50%)
	.pannel
		position: relative;
		overflow: hidden;
		margin-top: 10px;
		background: #fff;
		color #666
		.pannel_title
			padding 10px 15px
			font-size 16px
		.pannel_item
			position relative
			padding 10px 15px
			font-size 14px
			.panel_box
				padding-left 90px
				text-align right
				position relative
				line-height 24px
				label
					width 90px
					position absolute
					left 0
					text-align left

		.section
			width 5px
			height 100%
			position absolute
			top 0
			left 0
			&.section1 
				background #f3be40
			&.section2 
				background #6cc
			&.section3 
				background #69f

						
</style>