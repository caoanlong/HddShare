<template>
	<div class="container">
		<!-- <div class="titleBar">信息费交易声明</div> -->
		<div class="pannel">
			<div class="agreement" v-html="content"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				content: '',
			}
		},
		created() {
			document.title = '信息费交易声明'
			this.getStatement()
		},
		methods: {
			getStatement() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode'
				let params = {
					code: this.$route.query.code || 'Statement',
					// Authorization:this.$route.query.Authorization
					// Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJzdWIiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJuYmYiOjE1MTQ5NDYyNzYsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MTU1NTEwNzYsImRldmljZSI6IkFQUCIsImlhdCI6MTUxNDk0NjI3Niwic2VxIjozOTgwNTkwNjQwNDA3Njc0ODh9.dgN8Rt_fT5QGg7N7d8nBcfbtpd_yElNnk_fmD3QGhLg'
				}
				this.$http.get(URL, {params: params}).then((res) => {
					if (res.body.code == 200) {
						this.content = res.body.data[0].content
						// console.log(res.body.data)
					}
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
	.pannel
		position: relative;
		overflow: hidden;
		background: #fff;
		color #666
		padding 10px
</style>