<template>
	<div class="FaqDetail ql-editor" v-html="content">
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
				const URL = this.__WEBSERVER__ + 'content/findFreeContentListByTopicCode'
				const params = {
					code: this.$route.query.code,
					AppId: this.$route.query.AppId,
					Authorization:this.$route.query.Authorization
				}
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