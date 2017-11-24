<template>
	<div class="findGoods">
		<div class="filter-box">
			<div class="from" @click="filterPop(0)">起始地</div>
			<span class="arrow"></span>
			<div class="destination"  @click="filterPop(1)">目的地</div>
			<div class="more"  @click="filterPop(2)">更多</div>
		</div>
		<Scroll ref="scroll"
              :data="goodsList"
              :scrollbar="true"
              :pullDownRefresh="pullDownRefreshObj"
              :pullUpLoad="pullUpLoadObj"
              :startY="0"
              @pullingDown="onPullingDown"
              @pullingUp="onPullingUp">
          	<Goods v-for="goods in goodsList" :goods="goods" :key="goods.cargoSourceID"></Goods>
      	</Scroll>
		<div class="filter-pop" :class="{'show':popShow}" v-if="filterList == 0">
			<div class="filter-header bdb">
  				当前地区：全部<span class="backBtn fr"><i></i>返回上一级</span>
  			</div>
      		<div class="filter-body">
  				<ul class="clearfix">
				    <li class="selected"><span>北京</span></li>
				    <li><span>天津</span></li>
				    <li><span>河北省</span></li>
				    <li><span>山西省</span></li>
				    <li><span>内蒙古自治区</span></li>
				    <li><span>辽宁省</span></li>
				    <li><span>吉林省</span></li>
				    <li><span>黑龙江省</span></li>
				    <li><span>上海</span></li>
				    <li><span>江苏省</span></li>
				    <li><span>浙江省</span></li>
				    <li><span>安徽省</span></li>
				    <li><span>福建省</span></li>
				    <li><span>江西省</span></li>
				    <li><span>山东省</span></li>
				    <li><span>河南省</span></li>
				    <li><span>湖北省</span></li>
				    <li><span>湖南省</span></li>
				    <li><span>广东省</span></li>
				    <li><span>广西壮族自治区</span></li>
				    <li><span>海南省</span></li>
				    <li><span>重庆</span></li>
				    <li><span>四川省</span></li>
				    <li><span>贵州省</span></li>
				    <li><span>云南省</span></li>
				    <li><span>西藏自治区</span></li>
				    <li><span>陕西省</span></li>
				    <li><span>甘肃省</span></li>
				    <li><span>青海省</span></li>
				    <li><span>宁夏回族自治区</span></li>
				    <li><span>新疆维吾尔自治区</span></li>
				    <li><span>台湾省</span></li>
				    <li><span>香港特别行政区</span></li>
				    <li><span>澳门特别行政区</span></li>
				</ul>
      		</div>
      		<div class="filter-footer bdt">
				<button class="cancelBtn"><i></i>取消</button><button class="confirmBtn"><i></i>确定</button>
			</div>
      	</div>
      	<div class="filter-pop" :class="{'show':popShow}" v-if="filterList ==1">
      		<div class="filter-header bdb">
  				当前地区：全部<span class="backBtn fr"><i></i>返回上一级</span>
  			</div>
      		<div class="filter-body">
      			<ul class="clearfix">
				    <li><span>北京</span></li>
				    <li><span>天津</span></li>
				    <li><span>河北省</span></li>
				    <li><span>山西省</span></li>
				    <li><span>内蒙古自治区</span></li>
				    <li><span>辽宁省</span></li>
				    <li><span>吉林省</span></li>
				    <li><span>黑龙江省</span></li>
				    <li><span>上海</span></li>
				    <li><span>江苏省</span></li>
				    <li><span>浙江省</span></li>
				    <li><span>安徽省</span></li>
				    <li><span>福建省</span></li>
				    <li><span>江西省</span></li>
				    <li><span>山东省</span></li>
				    <li><span>河南省</span></li>
				    <li><span>湖北省</span></li>
				    <li><span>湖南省</span></li>
				    <li><span>广东省</span></li>
				    <li><span>广西壮族自治区</span></li>
				    <li><span>海南省</span></li>
				    <li><span>重庆</span></li>
				    <li><span>四川省</span></li>
				    <li><span>贵州省</span></li>
				    <li><span>云南省</span></li>
				    <li><span>西藏自治区</span></li>
				    <li><span>陕西省</span></li>
				    <li><span>甘肃省</span></li>
				    <li><span>青海省</span></li>
				    <li><span>宁夏回族自治区</span></li>
				    <li><span>新疆维吾尔自治区</span></li>
				    <li><span>台湾省</span></li>
				    <li><span>香港特别行政区</span></li>
				    <li><span>澳门特别行政区</span></li>
				</ul>
      		</div>
      		<div class="filter-footer bdt">
				<button class="cancelBtn"><i></i>取消</button><button class="confirmBtn"><i></i>确定</button>
			</div>
      	</div>
      	<div class="filter-pop" :class="{'show':popShow}" v-if="filterList ==2">
			<div class="filter-body">
				<div class="tit bdtb">车长</div>
				<ul class="clearfix">
					<li class="selected"><span>不限</span></li>
				    <li><span>7.6米</span></li>
				    <li><span>11.7米</span></li>
				    <li><span>9.6米</span></li>
				    <li><span>7.2米</span></li>
				    <li><span>12.5米</span></li>
				    <li><span>17.5米</span></li>
				    <li><span>5米</span></li>
				    <li><span>6.8米</span></li>
				    <li><span>14米</span></li>
				    <li><span>4.2米</span></li>
				    <li><span>6.2米</span></li>
				    <li><span>18米</span></li>
				    <li><span>5.2米</span></li>
				    <li><span>4.5米</span></li>
				    <li><span>8.2米</span></li>
				    <li><span>16米</span></li>
				    <li><span>17米</span></li>
				    <li><span>8.6米</span></li>
				    <li><span>13.5米</span></li>
				    <li><span>15米</span></li>
				    <li><span>13米</span></li>
				</ul>
				<div class="tit bdtb">车型</div>
				<ul class="clearfix">
				    <li class="selected"><span>仓栅式挂车</span></li>
				    <li><span>平板挂车</span></li>
				    <li><span>集装箱车</span></li>
				    <li><span>专项作业车</span></li>
				    <li><span>普通挂车</span></li>
				    <li><span>专项作业挂车</span></li>
				    <li><span>自卸货车</span></li>
				    <li><span>罐式货车</span></li>
				    <li><span>仓栅式货车</span></li>
				    <li><span>厢式货车</span></li>
				    <li><span>普通货车</span></li>
				    <li><span>车辆运输车</span></li>
				    <li><span>厢式挂车</span></li>
				    <li><span>车辆运输车(单排)</span></li>
				    <li><span>自卸挂车</span></li>
				    <li><span>特殊结构货车</span></li>
				    <li><span>平板货车</span></li>
				    <li><span>牵引车</span></li>
				    <li><span>罐式挂车</span></li>
				    <li><span>集装箱挂车</span></li>
				    <li><span>封闭货车</span></li>
				</ul>
			</div>
			<div class="filter-footer bdt">
				<button class="cancelBtn"><i></i>取消</button><button class="confirmBtn"><i></i>确定</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Scroll from './common/Scroll'
	import Goods from './FindGoods/Goods'
	export default {
		data () {
			return {
				popShow: false,
				filterList: '',
				goodsList: [{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":33,"cargoDesc":"913 快速消费品 1000吨 77元 定价 铁箱 ","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Fix","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"356826344610742272","cargoSourceNum":10,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-11 15:40:30","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"云南,昆明,五华,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-09-28","loadingTime":"19:40","loadingTimeSlot":"Limit","memID":"351746646088237056","memberType":"NoTruck","mobile":"13714261162","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"无车承运62","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"广东,深圳,","truckDesc":"平板货车 22米/18米 1车","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":47,"cargoDesc":"912 农产品 10吨  议价 大件设备 ","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Talk","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"356825571562766336","cargoSourceNum":10,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-11 15:37:25","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"云南,昆明,盘龙,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-09-28","loadingTime":null,"loadingTimeSlot":"AM","memID":"351746646088237056","memberType":"NoTruck","mobile":"13714261162","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"无车承运62","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"广东,深圳,宝安,","truckDesc":"厢式货车 13米/15米 2车","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":15,"cargoDesc":"911 冷藏货物 333吨 67元 定价 托盘 ","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Fix","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"356824810531471360","cargoSourceNum":10,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-11 15:34:24","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"云南,昆明,官渡,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-09-27","loadingTime":null,"loadingTimeSlot":"NoLimit","memID":"351746646088237056","memberType":"NoTruck","mobile":"13714261162","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"无车承运62","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"广东,深圳,南山,","truckDesc":"牵引车 33.3米/12.3米/6.6米 3车","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":26,"cargoDesc":"大米 农产品 1吨 10000元 定价 大件设备 ","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Fix","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"356786267075526656","cargoSourceNum":5,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-11 13:01:14","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"天津,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-08-24","loadingTime":null,"loadingTimeSlot":"","memID":"344579245516783616","memberType":"IndShipper","mobile":"15084798888","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"泪无痕","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"湖南,长沙,","truckDesc":"平板挂车 11.7米 1车","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":6,"cargoDesc":"","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"议价","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"356114761525903360","cargoSourceNum":5,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-09 16:32:55","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"广东,广州,荔湾,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-09-11","loadingTime":null,"loadingTimeSlot":"","memID":"344579245516783616","memberType":"IndShipper","mobile":"15084798888","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"泪无痕","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"湖北,武汉,江岸,","truckDesc":"","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":5,"cargoDesc":"","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"定价","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"356108204973113344","cargoSourceNum":5,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-09 16:06:52","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"广东,江门,新会,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-09-14","loadingTime":null,"loadingTimeSlot":"","memID":"344579245516783616","memberType":"IndShipper","mobile":"15084798888","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"泪无痕","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"山东,潍坊,坊子,","truckDesc":"","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":22,"cargoDesc":"大米 农产品 1吨 10000元 定价 大件设备 ","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Fix","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"355239956392067072","cargoSourceNum":5,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-07 06:36:45","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"天津,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-08-24","loadingTime":null,"loadingTimeSlot":"","memID":"344579245516783616","memberType":"IndShipper","mobile":"15084798888","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"泪无痕","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"湖南,长沙,","truckDesc":"平板挂车 11.7米 1车","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":80,"cargoDesc":"电脑/电子产品/200/200/50/木箱","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Fix","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"354941173078835200","cargoSourceNum":2,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-06 10:49:30","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"广东,深圳,南山,","headPicture":"group1/M00/00/0B/CgoEG1muYlaAdntOAAF-WbvflTk6.image","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":null,"loadingTime":null,"loadingTimeSlot":"","memID":"354665674008051712","memberType":"3PL","mobile":"18026357231","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"朱静静","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"湖北,武汉,江汉,","truckDesc":"仓栅式挂车/1","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":5,"cargoDesc":"噼噼啪啪 你还没 2.5吨 6元 定价  ","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Fix","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"354935977498001408","cargoSourceNum":10,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-06 10:28:51","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"广东,深圳,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":null,"loadingTime":null,"loadingTimeSlot":"","memID":"351746646088237056","memberType":"NoTruck","mobile":"13714261162","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"无车承运62","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"江西,吉安,永新,","truckDesc":"平板货车 18米/17米 3车","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0},{"areaFrom":"","areaFromBaseArea":null,"areaTo":"","areaToBaseArea":null,"arrivalsNum":0,"browseNum":36,"cargoDesc":"货物1 农产品 1.5吨  议价 木箱 ","cargoFreightPrice":0,"cargoFreightTotalPrice":0,"cargoFreightType":"Talk","cargoFreightUnit":"","cargoFreightUnitConstant":null,"cargoName":"","cargoNum":"","cargoPackage":"","cargoPackageConstant":null,"cargoSourceID":"354590096743612416","cargoSourceNum":10,"cargoSourcePublishToList":[],"cargoTypeConstant":null,"cargoTypeID":"","cargoVolume":"","cargoWeight":"","certifyStatus":"","code":"","createTime":"2017-09-05 11:34:27","entFlag":"","estimateMileage":0,"focusmemId":"","fromAreaName":"云南,昆明,五华,","headPicture":"","invisibleCity":"","invisibleCityDesc":"","invisibleCityList":[],"loadedNum":0,"loadingDate":"2017-09-20","loadingTime":null,"loadingTimeSlot":"Night","memID":"351746646088237056","memberType":"NoTruck","mobile":"13714261162","nickName":"","offerNum":0,"publishToDesc":"","publishToFleetFlag":"","publishToFocusEnterpriseFlag":"","publishToFreightYardFlag":"","publishToID":"","publishToParkFlag":"","publishType":"","realName":"无车承运62","remark":"","remarkList":[],"sentAgreementNum":0,"status":"Pub","toAreaName":"江西,吉安,井冈山,","truckDesc":"车辆运输车(单排) 18米 2车","truckLength":"","truckLengthList":[],"truckNum":0,"truckType":"","truckTypeConstant":null,"updateTime":null,"vesselNum":0}],
				pullDownRefresh: true,
		        pullDownRefreshThreshold: 90,
		        pullDownRefreshStop: 72,
		        pullUpLoad: true,
		        pullUpLoadThreshold: 0,
		        pullUpLoadMoreTxt: '',
		        pullUpLoadNoMoreTxt: '没有更多数据了',
		        scrollToX: 0,
		        scrollToY: -200,
		        scrollToTime: 700,
		        scrollToEasing: 'bounce',
		        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce']
			}
		},
		computed: {
	      	pullDownRefreshObj() {
	        	return this.pullDownRefresh ? {
	          		threshold: parseInt(this.pullDownRefreshThreshold),
	          		stop: parseInt(this.pullDownRefreshStop)
	        	} : false
	      	},
	      	pullUpLoadObj() {
	        	return this.pullUpLoad ? {threshold: parseInt(this.pullUpLoadThreshold), txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}} : false
	      	}
	    },
	    watch: {
	      	pullDownRefreshObj() {
	        	this.rebuildScroll()
	      	},
	      	pullUpLoadObj() {
	        	this.rebuildScroll()
	      	}
	    },
		created () {
			document.title = '寻找货源'
		},
		methods: {
			getGoodsList(endIndex) {
				let URL = this.__WEBSERVER__ + 'cargoSource/findByCondition';
				let params = {
					"endIndex": endIndex,
					"pageSize": this.PAGESIZE,
				};
				this.$http.get(URL,{params:params}).then(
					(res) => {
						// console.log(JSON.stringify(res.body));
						if (res.body.code == 200) {
							this.goodsList = res.body.data.list;
							console.log(JSON.stringify(this.goodsList))
						}
					},
					(res) => {
						console.log(JSON.stringify(res));
					}
				)
			},
			onPullingDown() {
		        setTimeout(() => {
		          	this.getGoodsList()
		        }, 1000)
	      	},
	      	onPullingUp() {
		        setTimeout(() => {
		          	if (Math.random() > 0.5) {
		            	// 如果有新数据
		            	this.goodsList = this.goodsList.concat(this.goodsList)
		          	} else {
		            	// 如果没有新数据
		            	this.$refs.scroll.forceUpdate()
		          	}
		        }, 1000)
	      	},
			rebuildScroll() {
		        this.$nextTick(() => {
		          this.$refs.scroll.destroy()
		          this.$refs.scroll.initScroll()
		        })
	      	},
			filterPop(i) {
				this.popShow = !this.popShow
				this.filterList = i
				console.log(this.filterList)
			}
		},
		components: {
			Scroll,
			Goods
		}
	}
</script>
<style lang="stylus" scoped>
	.findGoods
		padding-top 40px
		.filter-box
			background #fff
			box-shadow 0 0 5px rgba(0,0,0,.5)
			position fixed
			top 0
			left 0
			right 0
			z-index 10
			height 40px
			padding 5px
			display flex
			font-size 12px
			.from
			.destination
				flex 1
				border 1px solid #ddd
				padding 0 30px 0 5px
				line-height 28px
				border-radius 4px
				background url('../assets/img/arrow-b.png') no-repeat right center
			.arrow
				flex 0 40px
				background url('../assets/img/arrow.svg') no-repeat center
				display inline-block
				background-size contain
				width 40px
				height 30px
				vertical-align top
			.more
				flex 0 50px
				text-align center
				line-height 30px
		.filter-pop
			position fixed
			top 100%
			left 0
			right 0
			bottom 0
			background #fff
			transition top .2s
			-moz-transition top .2s
			-webkit-transition top .2s
			-o-transition top .2s
			&.show
				top 40px
				bottom 64px
				.filter-footer
					display flex
			.filter-header
				height 40px
				line-height 30px
				padding 5px
				font-size 14px
				color #666
				.backBtn
					color #6cc
					background none
					border none
					outline none
					i
						background url('../assets/img/back_6cc.svg') no-repeat
						background-size cover
						width 14px
						height 14px
						margin-right 5px
						display inline-block
						vertical-align text-top
			.filter-body
				.tit
					padding 5px
					background #f8f8f8
					font-size 14px
				ul
					margin-bottom 10px
					li
						float left
						width 25%
						padding 10px 10px 0
						text-align center
						&.selected
							span
								border-color #6cc
								color #6cc
								background url('../assets/img/selected.png') no-repeat right top
						span
							border 1px solid #ddd
							display block
							font-size 14px
							padding 2px 0
							border-radius 4px
							color #666
							white-space nowrap
							text-overflow ellipsis
							overflow hidden
			.filter-footer
				height 64px
				padding 10px 5px
				background #eee
				left 0
				right 0
				bottom 0
				position fixed
				display none
				.cancelBtn
				.confirmBtn
					height 44px
					line-height 44px
					margin 0 10px
					border-radius 22px
					flex 1
					outline none
					border none
					
					i
						width 14px
						height 14px
						display inline-block
						vertical-align text-top
						margin-right 5px
				.cancelBtn
					color #666
					background #ccc
					i
						background url('../assets/img/back.svg') no-repeat
						background-size cover
				.confirmBtn
					background #6cc
					color #fff
					i
						background url('../assets/img/ok.svg') no-repeat
						background-size cover
</style>