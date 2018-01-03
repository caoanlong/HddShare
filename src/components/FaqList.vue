<template>
	<div class="Faq">
		<router-link tag="div" class="item bdb" :to="{name:'FaqDetail',query: {code:item.code}}" v-for="(item,index) in list" :key="index">
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
					// Authorization:this.$route.query.Authorization
					Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJzdWIiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJuYmYiOjE1MTQ5NDYyNzYsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MTU1NTEwNzYsImRldmljZSI6IkFQUCIsImlhdCI6MTUxNDk0NjI3Niwic2VxIjozOTgwNTkwNjQwNDA3Njc0ODh9.dgN8Rt_fT5QGg7N7d8nBcfbtpd_yElNnk_fmD3QGhLg'
				};
				this.$http.get(URL,{params:params}).then((res) => {
					this.list = JSON.parse(res.body.data[0].content)
					// console.log(this.list)
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