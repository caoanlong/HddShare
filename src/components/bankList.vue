<template>
	<div class="bankList">
		<div class="item bdb">
			<img src="../assets/img/bankIcon/gsyh.png" />
			<p>中国工商银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/nyyh.png" />
			<p>中国农业银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/zgyh.png" />
			<p>中国银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/jsyh.png" />
			<p>中国建设银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/jtyh.png" />
			<p>交通银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/zxyh.png" />
			<p>中信银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/msyh.png" />
			<p>中国民生银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/zggdyh.png" />
			<p>中国光大银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/zsyh.png" />
			<p>招商银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/pfyh.png" />
			<p>浦发银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/gfyh.png" />
			<p>广发银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/hxyh.png" />
			<p>华夏银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/payh.png" />
			<p>平安银行</p>
		</div>
		<div class="item bdb">
			<img src="../assets/img/bankIcon/dyyh.png" />
			<p>东亚银行</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			document.title = '支持银行列表'
		}
	}
</script>
<style lang="stylus" scoped>
	.bankList
		.item
			position relative
			padding 10px 10px 10px 60px
			img
				width 40px
				height 40px
				position absolute
				left 10px
			p
				line-height 40px
</style>