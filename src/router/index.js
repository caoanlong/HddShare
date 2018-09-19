import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FindTruck from '../pages/FindTruck'

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/findTruck" component={FindTruck}/>
        </div>
    </Router>
)