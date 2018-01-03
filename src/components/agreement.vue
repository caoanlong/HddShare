<template>
	<div>
		<div class="container">
			<!-- <div class="titleBar">用户协议</div> -->
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
			document.title = '注册协议'
			this.getAgreement()
		},
		methods: {
			getAgreement() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode'
				let params = {
					code: this.$route.query.code || 'Agreement',
					// Authorization:this.$route.query.Authorization
					Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJzdWIiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJuYmYiOjE1MTQ5NDYyNzYsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MTU1NTEwNzYsImRldmljZSI6IkFQUCIsImlhdCI6MTUxNDk0NjI3Niwic2VxIjozOTgwNTkwNjQwNDA3Njc0ODh9.dgN8Rt_fT5QGg7N7d8nBcfbtpd_yElNnk_fmD3QGhLg'
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