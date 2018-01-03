<template>
	<transition name="fade">
		<div class="msg" ref="msg" :style="{width: width}" v-show="isShow">
			<div v-text="content"></div>
		</div>
	</transition>
</template>
<script>
	export default {
		name: 'msg',
		props: {
			width: {
				type: String,
				default: 'auto'
			},
			isShow: {
				type: Boolean,
				default: false
			},
			time: {
				type: Number,
				default: 2000
			},
			content: String,
		},
		watch: {
			isShow(newVal) {
				if (newVal) {
					this.$emit('on-show')
					clearTimeout(this.timeout)
					this.timeout = setTimeout(() => {
						this.isShow = false
						// document.body.removeChild(this.$refs.msg)
					},this.time)
				}
			}
		}
	}
</script>

<style type="text/css" scoped>
	.msg {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 1000;
		transform: translate(-50% , -50%);
		-webkit-transform: translate(-50% , -50%);
		-ms-transform: translate(-50% , -50%);
		-moz-transform: translate(-50% , -50%);
		-o-transform: translate(-50% , -50%);
		padding: 15px 30px;
		background: rgba(0, 0, 0, .7);
		color: #fff;
		font-size: 14px;
		border-radius: 4px;
		text-align: center;
	}
	.fade-enter-active,.fade-leave-active {
	  	opacity: 1;
	  	transition: opacity linear 0.2s;
	}
	.fade-enter, .fade-leave-to {
	  	opacity: 0;
	}
</style>