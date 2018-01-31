<template>
	<div class="FaqDetail" v-html="content">
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				content: ''
			}
		},
		created () {
			document.title = '常见问题详情',
			this.getContent()
		},
		methods: {
			getContent() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode'
				let params = {
					code: this.$route.query.code,
					Authorization:this.$route.query.Authorization
				};
				this.$http.get(URL,{params:params}).then((res) => {
					this.content = res.body.data[0].content
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.FaqDetail
		padding 10px
</style>