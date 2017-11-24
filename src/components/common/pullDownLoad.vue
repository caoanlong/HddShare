<template>
	<div class="container">
		<canvas class="process" id="processCanvas" width="60" height="60" v-show="loadStatus == '下拉'"></canvas>
		<div class="process"><img src="../../assets/img/loading.gif" v-show="loadStatus == '加载中'"/></div>
	</div>
</template>
<script>
export default {
	props: {
		process: {
			type: Number,
			default: 0
		},
		loadStatus: {
			type: String,
			default: '下拉'
		}
	},
	watch: {
		process(newVal) {
			if (newVal < 100) {
				this.drawProcess(newVal)
			}
		}
	},
	methods: {
		drawProcess(newVal) {
			let canvas = document.getElementById('processCanvas')
			let context = canvas.getContext('2d')
			context.clearRect(0, 0, 48, 48)
			// 绘制底部
			context.beginPath()
			context.moveTo(30, 30)
			context.arc(30, 30, 11, 0, Math.PI * 2, false)
			context.closePath()
			context.fillStyle = '#ddd'  
			context.fill()

			// 画进度  
			context.beginPath()
			// 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形  
			context.moveTo(30, 30)
			// 跟上面的圆唯一的区别在这里,不画满圆,画个扇形  
			context.arc(30, 30, 11, 0, Math.PI * 2 * newVal / 100, false)
			context.closePath()
			context.fillStyle = '#aaa'
			context.fill()

			// 画内部空白  
			context.beginPath()
			context.moveTo(30, 30)
			context.arc(30, 30, 8, 0, Math.PI * 2, true)
			context.closePath()
			context.fillStyle = 'rgba(255,255,255,1)'
			context.fill()
		}
	}
}
</script>
<style lang="stylus" scoped>
	.container
		width 100%
		height 60px
		position fixed
		left 0
		top 40px
		// background-color #555
		.process
			display block
			width 60px
			height 60px
			// background-color green
			margin 0 auto
			img
				display block
				margin 18px auto
				width 24px
				height 24px
</style>



