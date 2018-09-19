import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FindTruck from '../pages/FindTruck'
import About from '../pages/About'
import AppDownLoad from '../pages/AppDownLoad'
export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
			<Route exact path="/appdownload" component={AppDownLoad}/>
			<Route exact path="/about" component={About}/>
            <Route exact path="/findTruck" component={FindTruck}/>
        </div>
    </Router>
)