<template>
	<div class="filter-pop" v-if="showSelector">
		<div class="areaSelect">
			<div class="from" :class="{'active': selectType == 'simple'}" @click="changeSelectType('simple')">{{startArea}}</div>
			<span class="arrow"></span>
			<div class="destination" :class="{'active': selectType == 'mutiple'}" @click="changeSelectType('mutiple')">{{endArea}}</div>
		</div>
		<div class="areaSelected">
			<p>已选择地区</p>
		</div>
		<div class="filter-header bdtb">
			当前地区：全部<div class="fr"><span class="location">深圳市</span><span class="backBtn"><i></i>返回上一级</span></div>
		</div>
		<div class="filter-body">
			<ul class="clearfix">
				<li v-show="selectType == 'simple'" :class="{'selected': selectedDist == key}" v-for="(value, key) in areaList" :key="key" @click="selectArea(key, value)"><span>{{value}}</span></li>
				<li v-show="selectType == 'mutiple'" :class="{'selected': selectedDistList.includes(key)}" v-for="(value, key) in areaList" :key="key" @click="selectArea(key, value)"><span>{{value}}</span></li>
			</ul>
		</div>
		<div class="filter-footer bdt">
			<button class="cancelBtn"><i></i>取消</button><button class="confirmBtn"><i></i>确定</button>
		</div>
	</div>
</template>
<script>
import ChineseDistricts from '../../assets/data/distpicker.data'
export default {
	props: {
		showSelector: {
			type: Boolean,
			default: true
		},
		type: String
	},
	data () {
		return {
			selectType: 'simple',
			areaList: null,
			startArea: '起始地',
			endArea: '目的地',
			selected: '', // 当前点击选择的key
			selectedProvince: '', // 当前点击选择省的key
			selectedCity: '', // 当前点击选择市的key
			selectedDist: '', // 当前点击选择区县的key
			selectedProvinceList: [], // 已选择选择省的key列表
			selectedCityList: [], // 已选择选择市的key列表
			selectedDistList: [], // 已选择选择区县的key列表
		}
	},
	created () {
		this.areaList = ChineseDistricts[0]
	},
	methods: {
		changeSelectType (type) {
			if (type == this.selectType) {
				return
			}
			this.selectType = type
			this.areaList = ChineseDistricts[0]
		},
		selectArea (key, value) {
			this.selected = key
			// 判断当前选择的县市是否已选择
			if (this.selectedDistList.includes(key)) {
				for (let i = 0; i < this.selectedDistList.length; i++) {
					if (this.selectedDistList[i] == key) {
						this.selectedDistList.splice(i, 1)
						break
					}
				}
				return
			}
			if (key.substr(2) == '0000') {
				console.log('已选择省:' + value)
				// 进入到城市选择层
				this.areaList = ChineseDistricts[key]
				this.selectedProvince = key
				if (this.selectType == 'mutiple') {
					this.selectedProvinceList.push(key)
				}
			} else if (key.substr(4) == '00') {
				console.log('已选择市:' + value)
				// 进入到区县选择层
				this.areaList = ChineseDistricts[key]
				this.selectedCity = key
				if (this.selectType == 'mutiple') {
					this.selectedCityList.push(key)
				}
			} else {
				console.log('已选择区县:' + value)
				this.selectedDist = key
				if (this.selectType == 'mutiple') {
					this.selectedDistList.push(key)
				} else if (this.selectType == 'simple') {
					this.selectType = 'mutiple'
					this.startArea = value
					this.areaList = ChineseDistricts[0]
				}
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
		.areaSelect
			background #fff
			height 40px
			padding 5px
			display flex
			font-size 12px
			.from
			.destination
				flex 1
				border 1px solid #ddd
				padding 0 30px 0 5px
				line-height 28px
				border-radius 4px
				background url('../../assets/img/arrow-b.png') no-repeat right center
			.active
				color #6cc
				border 1px solid #6cc
			.arrow
				flex 0 40px
				background url('../../assets/img/arrow.svg') no-repeat center
				display inline-block
				background-size contain
				width 40px
				height 30px
				vertical-align top
			.more
				flex 0 50px
				text-align center
				line-height 30px
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


