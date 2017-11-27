<template>
	<div class="filter-pop" v-if="showSelector">
		<div class="areaSelect">
			<div class="from" :class="{'active': selectType == 'simple'}" @click="changeSelectType('simple')">{{startArea.value}}</div>
			<span class="arrow"></span>
			<div class="destination" :class="{'active': selectType == 'mutiple'}" @click="changeSelectType('mutiple')">{{endArea}}</div>
		</div>
		<div class="areaSelected bdt" v-show="selectType == 'mutiple'">
			<p class="tit">已选择地区</p>
			<p class="selectedTags">
				<span v-for="item in selectedAreaList" :key="item.key" @click="deleteAreaList(item.key)">{{item.value}}<i></i></span>
			</p>
		</div>
		<div class="filter-header bdtb">
			当前地区：全部<div class="fr"><span class="location">深圳市</span>
			<span class="backBtn" v-show="isShowReturn" @click="returnBack"><i></i>返回上一级</span></div>
		</div>
		<div class="filter-body">
			<ul class="clearfix">
				<li v-show="firstArea && selectType == 'simple'" :class="{'selected': selectedDist == firstArea?firstArea.key:''}" @click="selectFirstArea(firstArea?firstArea.key:'', firstArea?firstArea.value:'')"><span>{{firstArea?firstArea.value:''}}</span></li>
				<li v-show="firstArea && selectType == 'mutiple'" :class="{'selected': selectedDistList.includes(firstArea?firstArea.key:'')}" @click="selectFirstArea(firstArea?firstArea.key:'', firstArea?firstArea.value:'')"><span>{{firstArea?firstArea.value:''}}</span></li>
				<li v-show="selectType == 'simple'" :class="{'selected': selectedDist == key}" v-for="(value, key) in areaList" :key="key" @click="selectArea(key, value)"><span>{{value}}</span></li>
				<li v-show="selectType == 'mutiple'" :class="{'selected': selectedDistList.includes(key)}" v-for="(value, key) in areaList" :key="key" @click="selectArea(key, value)"><span>{{value}}</span></li>
			</ul>
		</div>
		<div class="filter-footer bdt">
			<button class="cancelBtn" @click="close('n')"><i></i>取消</button>
			<button class="confirmBtn" @click="close('y')"><i></i>确定</button>
		</div>
	</div>
</template>
<script>
import ChineseDistricts from '../../assets/data/distpicker.data'
export default {
	props: {
		showSelector: {
			type: Boolean,
			default: false
		},
		type: String
	},
	data () {
		return {
			selectType: 'simple',
			firstArea: null,  // 列表最前面的一个地区
			areaList: null,
			startArea: {
				key: '1',
				value: '起始地'
			},
			endArea: '目的地',
			isShowReturn: false,
			selected: '', // 当前点击选择的key
			selectedProvince: '', // 当前点击选择省的key
			selectedCity: '', // 当前点击选择市的key
			selectedDist: '', // 当前点击选择区县的key
			selectedProvinceList: [], // 已选择选择省的key列表
			selectedCityList: [], // 已选择选择市的key列表
			selectedDistList: [], // 已选择选择区县的key列表
			selectedAreaList: [] // 已选择选择的地区列表
		}
	},
	watch: {
		type (newVal) {
			this.selectType = newVal
		}
	},
	created () {
		this.areaList = ChineseDistricts[0]
	},
	methods: {
		changeSelectType (type) {
			this.selectType = type
			this.areaList = ChineseDistricts[0]
		},
		selectArea (key, value) {
			this.isShowReturn = true
			this.selected = key
			// 判断当前选择的县市是否已选择
			if (this.selectedDistList.includes(key)) {
				this.deleteAreaList(key)
				return
			}
			// 如果选择的是省
			if (key.substr(2) == '0000') {
				console.log('已选择省:' + value)
				// 进入到城市选择层
				this.firstArea = {
					key: key,
					value: value,
				}
				this.areaList = ChineseDistricts[key]
				this.selectedProvince = key
				if (this.selectType == 'mutiple') {
					this.selectedProvinceList.push(key)
				}
			// 如果选择的是市
			} else if (key.substr(4) == '00') {
				console.log('已选择市:' + value)
				// 进入到区县选择层
				this.firstArea = {
					key: key,
					value: value,
				}
				this.areaList = ChineseDistricts[key]
				this.selectedCity = key
				if (this.selectType == 'mutiple') {
					this.selectedCityList.push(key)
				}
			// 如果选择的是区县
			} else {
				console.log('已选择区县:' + value)
				this.selectedDist = key
				if (this.selectType == 'mutiple') {
					this.selectedDistList.push(key)
					this.selectedAreaList.push({
						key: key,
						value: value
					})
				} else if (this.selectType == 'simple') {
					this.selectType = 'mutiple'
					this.startArea = {
						key: key,
						value: value
					}
					this.isShowReturn = false
					this.areaList = ChineseDistricts[0]
				}
			}
		},
		selectFirstArea (key, value) {
			// 判断当前选择的是否已选择
			if (this.selectedDistList.includes(key)) {
				this.deleteAreaList(key)
				return
			}
			this.selected = key
			this.selectedDist = key
			if (this.selectType == 'mutiple') {
				this.selectedDistList.push(key)
				this.selectedAreaList.push({
					key: key,
					value: value
				})
			} else if (this.selectType == 'simple') {
				this.selectType = 'mutiple'
				this.startArea = {
					key: key,
					value: value
				}
				this.firstArea = null
				this.isShowReturn = false
				this.areaList = ChineseDistricts[0]
			}
		},
		deleteAreaList (key) {
			for (let i = 0; i < this.selectedDistList.length; i++) {
				if (this.selectedDistList[i] == key) {
					this.selectedDistList.splice(i, 1)
				}
			}
			for (let i = 0; i < this.selectedAreaList.length; i++) {
				if (this.selectedAreaList[i].key == key) {
					this.selectedAreaList.splice(i, 1)
				}
			}
		},
		returnBack () {
			console.log(this.selected)
			// 如果选择的是省
			if (this.firstArea.key.substr(2) == '0000') {
				this.isShowReturn = false
				this.areaList = ChineseDistricts[0]
				this.firstArea = null
			// 如果选择的是市
			} else if (this.firstArea.key.substr(4) == '00') {
				console.log(this.firstArea.key.substring(0,2)+'0000')
				this.areaList = ChineseDistricts[this.firstArea.key.substring(0,2)+'0000']
				this.firstArea = {
					key: this.firstArea.key.substring(0,2)+'0000',
					value: ChineseDistricts[0][this.firstArea.key.substring(0,2)+'0000'],
				} 
			// 如果选择的是区县
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
		padding-bottom 74px
		background #fff
		overflow auto
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
		.areaSelected
			padding 5px
			.tit
				padding 5px
				font-size 14px
			.selectedTags
				padding 0 5px 5px
				span
					background #ffc526
					color #fff
					display inline-block
					font-size 14px
					margin  5px 5px 0 0
					padding 5px 25px 5px 5px
					height 30px
					line-height 20px
					border-radius 4px
					position relative
					&:after
						content ''
						position absolute
						width 18px
						height 18px
						background url('../../assets/img/remove.svg') no-repeat
						background-size cover
						display block
						right 5px
						top 6px
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


