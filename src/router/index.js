import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FindTruck from '../pages/FindTruck'
import FindTruckByMap from '../pages/FindTruckByMap'
import About from '../pages/About'
import AppDownLoad from '../pages/AppDownLoad'
import ConsignorDownload from '../pages/ConsignorDownload'
import FindGoods from '../pages/FindGoods'
import GoodsDetail from '../pages/GoodsDetail'
import DriverDownload from '../pages/DriverDownload'
export default () => (
    <Router>
        <div>
            <Route exact path = "/" component = {Home}/>
			<Route exact path = "/appdownload" component = {AppDownLoad}/>
			<Route exact path = "/ConsignorDownload" component = {ConsignorDownload}/>
			<Route exact path = "/DriverDownload" component = {DriverDownload}/>
			<Route exact path = "/about" component = {About}/>
            <Route exact path = "/findTruck" component = {FindTruck}/>
            <Route exact path="/findTruckByMap" component={FindTruckByMap}/>
            <Route exact path="/findGoods" component={FindGoods}/>
            <Route exact path="/goodsDetail" component={GoodsDetail}/>
        </div>
    </Router>
)