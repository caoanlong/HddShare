<template>
	<div class="bankList">
		<div class="item bdtb" v-for="item in bankList" :key="item.bankName" 
		:style="{backgroundImage:'url(' + item.bgUrl + ')'}">
			<img :src="item.logoUrl" @error="errorImg"/>
			<p>{{item.bankName}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {defaultImg} from '../assets/data/icons'
	export default {
		data() {
			return {
				bankList:[]
			}
		},
		created () {
			document.title = '支持银行列表'
			this.getBankList()
		},
		methods: {
			getBankList() {
				let URL = this.__WEBSERVER__ + 'pay/bankCard/getSupportBankList'
				let params = {
					// Authorization: this.$route.query.Authorization
					Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0MTY4OTM3Njc4NzkzNzY4OTYiLCJzdWIiOiI0MTY4OTM3Njc4NzkzNzY4OTYiLCJuYmYiOjE1MTk2OTcwNTMsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MjAzMDE4NTMsImRldmljZSI6IkFQUCIsImlhdCI6MTUxOTY5NzA1Mywic2VxIjo0MTc5ODUyNjg1NzEwNjIyNzJ9.mIHsXhvjDQ4hQWLSxD9lPFdqrIfqmyLtt7ItU1PiiY0'
				}
				this.$http.get(URL , {params: params}).then((res) => {
					if (res.body.code == 200) {
						this.bankList = res.body.data
						// console.log(res.body.data)
					} 
				})
			},
			errorImg (e) {
				e.target.src = defaultImg
				e.target.onerror = null
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.bankList
		.item
			position relative
			padding 10px 10px 10px 60px
			margin-bottom 10px
			background-size cover
			background-repeat no-repeat
			background-color #fff
			img
				width 40px
				height 40px
				position absolute
				left 10px
			p
				line-height 40px
</style>