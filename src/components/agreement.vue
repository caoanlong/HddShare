<template>
	<div>
		<div class="container">
			<div class="titleBar">用户协议</div>
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
			this.getAgreement();
		},
		mounted() {
			
			// this.$refs.content.children[0].style.lineHeight = 1.5
		},
		methods: {
			getAgreement() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode';
				let params = {code: 'Agreement'};
				this.$http.get(URL,{params:params}).then((res) => {
					this.content = res.body.data[0].content;
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
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