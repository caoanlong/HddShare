<template>
	<div class="Faq">
		<router-link tag="div" class="item bdb" :to="{name:'FaqDetail',query: {code:item.code,Authorization:$route.query.Authorization}}" v-for="(item,index) in list" :key="index">
			<p>{{item.name}}</p>
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				list: ''
			}
		},
		created () {
			document.title = '常见问题',
			this.getList()
		},
		methods: {
			getList() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode'
				let params = {
					code: 'CommonProblemList',
					Authorization:this.$route.query.Authorization
				};
				this.$http.get(URL,{params:params}).then((res) => {
					this.list = JSON.parse(res.body.data[0].content)
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.Faq
		.item
			position relative
			padding 10px
			p
				position relative
				padding 0 20px
				height 30px
				line-height 30px
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
				&:before
					content ''
					background url('../assets/img/wtzn.png') no-repeat
					width 14px
					height 14px
					display block
					position absolute
					left 0
					top 8px
					background-size 100%
				&:after
					content ''
					background url('../assets/img/arrow-r.svg') no-repeat
					width 14px
					height 14px
					display block
					position absolute
					right 0
					top 8px
					background-size 100%
					
				
</style>