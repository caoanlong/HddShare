<template>
    <div class="filter-pop" v-if="showSelector">
        <div class="filter-body">
            <div class="tit bdtb">车长</div>
            <ul class="clearfix">
                <li :class="{'selected': selected.includes(truckLength.code)}" v-for="truckLength in truckLengthList" :key="truckLength.code" @click="selectOption(truckLength.code)"><span>{{truckLength.name}}</span></li>
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
	data () {
		return {
			truckLengthList: [
				{
					"code": "01",
					"name": "不限"
				},{
					"code": "7.6",
					"name": "7.6米"
				},{
					"code": "11.7",
					"name": "11.7米"
				},{
					"code": "9.6",
					"name": "9.6米"
				},{
					"code": "7.2",
					"name": "7.2米"
				},{
					"code": "12.5",
					"name": "12.5米"
				},{
					"code": "17.5",
					"name": "17.5米"
				},{
					"code": "5",
					"name": "5米"
				},{
					"code": "6.8",
					"name": "6.8米"
				},{
					"code": "14",
					"name": "14米"
				},{
					"code": "4.2",
					"name": "4.2米"
				},{
					"code": "6.2",
					"name": "6.2米"
				}
			],
			selected: ["01"]
		}
	},
	methods: {
		selectOption (code) {
			if (this.selected.includes(code)) {
				for (let i = 0; i < this.selected.length; i++) {
					if (this.selected[i] == code) {
						this.selected.splice(i, 1)
					}
				}
			} else {
				this.selected.push(code)
			}
		},
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