<template>
	<div class="FaqDetail" v-html="content">
		<!-- <div class="charge" v-if="$route.query.code=='ServiceCharge'">
			<table>
				<thead>
					<tr>
						<th>提现金额</th>
						<th>手续费率</th>
						<th>最低</th>
						<th>最高</th>
					</tr>
				</thead>
				<tbody>
				   <tr v-for="(item, index) in content.content" :key="index">
					   <td>{{item.amountOfCash}}</td>
					   <td class="txt-c">{{item.formalityRate}}</td>
					   <td class="txt-c">{{item.minimum}}</td>
					   <td class="txt-c">{{item.highest}}</td>
				   </tr>
				</tbody>     
			</table>
		</div>
		<div class="charge" v-else-if="$route.query.code=='PaymentAgreement'" v-html="content"></div>
		<div class="Withdrawals" v-else-if="$route.query.code=='Withdrawals'">
			<div class="cells bdb" style="margin-top:0">
				<div class="cell">
					<div class="cell__bd">
						提现时间
					</div>
					<div class="cell__ft">
						{{content.PresentTime}}
					</div>
				</div>
				<div class="cell">
					<div class="cell__bd">
						可提额度
					</div>
					<div class="cell__ft">
						{{content.quotableAmount}}
					</div>
				</div>
				<div class="cell">
					<div class="cell__bd">
						单日提现限额
					</div>
					<div class="cell__ft">
						{{content.singleDayCashLimit}}
					</div>
				</div>
				<div class="cell">
					<div class="cell__bd">
						单日提现次数
					</div>
					<div class="cell__ft">
						{{content.singleDayPresentation}}
					</div>
				</div>
				<div class="cell">
					<div class="cell__bd">
						到账时间
					</div>
					<div class="cell__ft">
						{{content.paymentDate}}
					</div>
				</div>
			</div>
			<div class="tips">
				<img src="../assets/img/zjtsy.png" alt="" />
				<p>仅支持提现到储蓄卡</p>
				<p>出现提示提现失败的用户，请核查银行卡的预留信息是否更改，并向银行咨询银行卡状态是否正常</p>
			</div>
		</div>
		<div v-else>
			<div class="title bdb">{{content.title}}</div>
			<div class="cells bdt" >
				<div class="cell bdb" v-for="p in content.content">
					<div class="cell__hd"></div>
					<div class="cell__bd">
						{{p}}
					</div>
				</div>
			</div>
		</div>
		 -->
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
					// Authorization:this.$route.query.Authorization
					Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJzdWIiOiIzNzg0OTI3Njg3OTQwNjY5NDQiLCJuYmYiOjE1MTQ5NDYyNzYsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MTU1NTEwNzYsImRldmljZSI6IkFQUCIsImlhdCI6MTUxNDk0NjI3Niwic2VxIjozOTgwNTkwNjQwNDA3Njc0ODh9.dgN8Rt_fT5QGg7N7d8nBcfbtpd_yElNnk_fmD3QGhLg'
				};
				this.$http.get(URL,{params:params}).then((res) => {
					// if(params.code=='PaymentAgreement'){
					// 	this.content = res.body.data[0].content
					// }else{
					// 	this.content = JSON.parse(res.body.data[0].content)
					// }
					
					this.content = res.body.data[0].content
					console.log(this.content)
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.FaqDetail
		padding 10px
		// .title
		// 	background #fff
		// 	text-align center
		// 	padding 20px 0
		// 	color #585657	
		// .cells
		// 	color #878787
		// 	.cell__hd
		// 		position relative
		// 		width 16px
		// 		margin 0
		// 		&:before
		// 			content ''
		// 			width 8px
		// 			height 8px
		// 			border-radius 4px
		// 			background #6cc
		// 			display block
		// 			position absolute
		// 			left 0
		// 			top 8px
		// 	.cell__bd
		// 		font-size 14px
		// 	.cell
		// 		&.bdb:not(:last-child)
		// 			&:after
		// 				left 15px
		// .charge
		// 	padding 10px
		// 	table
		// 		background #6cc
		// 		width 100%
		// 		border-spacing 1px
		// 		color #999
		// 		border-radius 4px
		// 		th
		// 			color #fff
		// 			font-size 14px
		// 			padding 10px 0
		// 			font-weight normal
		// 			text-align center
		// 		td
		// 			background #fff
		// 			font-size 12px
		// 			padding 15px 10px
		// 			&.txt-c
		// 				text-align center
		// 		tr
		// 			&:last-child
		// 				td
		// 					&:first-child
		// 						border-radius 0 0 0 3px
		// 					&:last-child
		// 						border-radius 0 0 3px 0		
		// .Withdrawals
		// 	.cell__bd
		// 		color #878787
		// 	.cell__ft
		// 		color #585858
		// 		font-size 14px
		// 	.tips
		// 		color #7990a5
		// 		position relative
		// 		padding 10px 10px 10px 40px
		// 		img
		// 			width 24px
		// 			height 24px
		// 			position absolute
		// 			left 10px
		// 			top 14px
		// 		p
		// 			line-height 30px
		// 			font-size 14px
</style>