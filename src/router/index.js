import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FindTruck from '../pages/FindTruck'
import FindTruckByMap from '../pages/FindTruckByMap'
import TruckDetail from '../pages/TruckDetail'
import About from '../pages/About'
import AppDownLoad from '../pages/AppDownLoad'
import ConsignorDownload from '../pages/ConsignorDownload'
import FindGoods from '../pages/FindGoods'
import GoodsDetail from '../pages/GoodsDetail'
import GoodsLine from '../pages/GoodsLine'
import DriverDownload from '../pages/DriverDownload'
import Agreement from '../pages/Agreement'
import Statement from '../pages/Statement'
import ErrorPage from '../pages/ErrorPage'
import FaqList from '../pages/FaqList'
import FaqDetail from '../pages/FaqDetail'

export default () => (
    <Router>
        <div>
            <Route exact path = "/" component = {Home}/>
			<Route exact path = "/appdownload" component = {AppDownLoad}/>
			<Route exact path = "/consignorDownload" component = {ConsignorDownload}/>
			<Route exact path = "/driverDownload" component = {DriverDownload}/>
			<Route exact path = "/about" component = {About}/>
			<Route exact path = "/agreement" component = {Agreement}/>
            <Route exact path = "/findTruck" component = {FindTruck}/>
            <Route exact path = "/findTruckByMap" component = {FindTruckByMap}/>
            <Route exact path = "/truckDetail" component = {TruckDetail}/>
            <Route exact path = "/findGoods" component = {FindGoods}/>
            <Route exact path = "/goodsDetail" component = {GoodsDetail}/>
			<Route exact path = "/goodsLine" component = {GoodsLine}/>
            <Route exact path = "/statement" component = {Statement}/>
            <Route exact path = "/error" component = {ErrorPage}/>
            <Route exact path = "/FaqList" component = {FaqList}/>
            <Route exact path = "/FaqDetail" component = {FaqDetail}/>
        </div>
    </Router>
)