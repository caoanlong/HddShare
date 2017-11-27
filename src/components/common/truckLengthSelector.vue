<template>
    <div class="filter-pop" v-if="showSelector">
        <div class="filter-body">
            <div class="tit bdtb">车长</div>
            <ul class="clearfix">
                <li class="selected"><span>不限</span></li>
                <li><span>7.6米</span></li>
                <li><span>11.7米</span></li>
                <li><span>9.6米</span></li>
                <li><span>7.2米</span></li>
                <li><span>12.5米</span></li>
                <li><span>17.5米</span></li>
                <li><span>5米</span></li>
                <li><span>6.8米</span></li>
                <li><span>14米</span></li>
                <li><span>4.2米</span></li>
                <li><span>6.2米</span></li>
                <li><span>18米</span></li>
                <li><span>5.2米</span></li>
                <li><span>4.5米</span></li>
                <li><span>8.2米</span></li>
                <li><span>16米</span></li>
                <li><span>17米</span></li>
                <li><span>8.6米</span></li>
                <li><span>13.5米</span></li>
                <li><span>15米</span></li>
                <li><span>13米</span></li>
            </ul>
        </div>
        <div class="filter-footer bdt">
            <button class="cancelBtn" @click="close('n')"><i></i>取消</button>
			<button class="confirmBtn" @click="close('y')"><i></i>确定</button>
        </div>
    </div>
</template>
<script>
export default {
	props: {
		showSelector: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		close (type) {
			if (type == 'y') {
				this.$emit('close')
			} else {
				this.$emit('close')
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
.filter-pop
	position fixed
	top 0
	left 0
	right 0
	bottom 0
	z-index 99
	background #fff
	transition top .2s
	-moz-transition top .2s
	-webkit-transition top .2s
	-o-transition top .2s
	.filter-header
		height 40px
		line-height 30px
		padding 5px
		font-size 14px
		color #666
		.location
			color #6cc
			border 1px solid #6cc
			border-radius 4px
			margin-right 5px
			padding 5px
		.backBtn
			color #6cc
			background none
			border none
			outline none
			i
				background url('../../assets/img/back_6cc.svg') no-repeat
				background-size cover
				width 14px
				height 14px
				margin-right 5px
				display inline-block
				vertical-align text-top
	.filter-body
		.tit
			padding 5px
			background #f8f8f8
			font-size 14px
		ul
			margin-bottom 10px
			padding 0 5px
			li
				float left
				width 25%
				padding 10px 5px 0
				text-align center
				&.selected
					span
						border-color #6cc
						color #6cc
						background url('../../assets/img/selected.png') no-repeat right top
				span
					border 1px solid #ddd
					display block
					font-size 14px
					padding 5px 0
					border-radius 4px
					color #666
					white-space nowrap
					text-overflow ellipsis
					overflow hidden
	.filter-footer
			height 64px
			padding 10px 5px
			background #eee
			left 0
			right 0
			bottom 0
			position fixed
			display flex
			.cancelBtn
			.confirmBtn
				height 44px
				line-height 44px
				margin 0 10px
				border-radius 22px
				flex 1
				outline none
				border none
				font-size 16px
				i
					width 16px
					height 16px
					display inline-block
					vertical-align text-top
					margin-top 2px
					margin-right 5px
			.cancelBtn
				color #666
				background #ccc
				i
					background url('../../assets/img/back.svg') no-repeat
					background-size cover
			.confirmBtn
				background #6cc
				color #fff
				i
					background url('../../assets/img/ok.svg') no-repeat
					background-size cover
</style>