<template>
	<div>
		<div class="container">
			<!-- <div class="titleBar">支付协议</div> -->
			<div class="agreenment_con" v-html="content" ref="content" id="content">
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				content: ''
			}
		},
		created() {
			document.title = '支付协议'
			this.getAgreement()
		},
		methods: {
			getAgreement() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode'
				let params = {
					code: this.$route.query.code || 'Agreement'
				};
				this.$http.get(URL,{params:params}).then((res) => {
					this.content = res.body.data[0].content
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.container
		width 100%
		.titleBar
			background #6cc
			height 44px
			line-height 44px
			text-align center
			color #fff
		.agreenment_con
			padding 15px
			img
				padding 15px 0
				width 100%
</style>