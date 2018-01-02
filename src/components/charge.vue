<template>
	<div class="charge">
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
			   <tr>
				   <td>500元以下</td>
				   <td class="txt-c">提现金额*0.5%</td>
				   <td class="txt-c">5元/笔</td>
				   <td class="txt-c">10元/笔</td>
			   </tr>
			   <tr>
				   <td>500-4999元</td>
				   <td class="txt-c">提现金额*0.3%</td>
				   <td class="txt-c">5元/笔</td>
				   <td class="txt-c">10元/笔</td>
			   </tr>
			   <tr>
				   <td>5000-19999元</td>
				   <td class="txt-c">提现金额*0.2%</td>
				   <td class="txt-c">5元/笔</td>
				   <td class="txt-c">10元/笔</td>
			   </tr>
			   <tr>
				   <td>20000元以上</td>
				   <td class="txt-c">提现金额*0.1%</td>
				   <td class="txt-c">5元/笔</td>
				   <td class="txt-c">10元/笔</td>
			   </tr>
			</tbody>     
		</table>
	</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			document.title = '提现手续费'
		}
	}
</script>
<style lang="stylus" scoped>
	.charge
		padding 10px
		table
			background #6cc
			width 100%
			border-spacing 1px
			color #999
			border-radius 4px
			th
				color #fff
				font-size 14px
				padding 10px 0
				font-weight normal
				text-align center
			td
				background #fff
				font-size 12px
				padding 15px 10px
				&.txt-c
					text-align center
			tr
				&:last-child
					td
						&:first-child
							border-radius 0 0 0 3px
						&:last-child
							border-radius 0 0 3px 0
</style>