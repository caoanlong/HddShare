import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import TruckLengthSelector from './components/TruckLengthSelector'

class FindTruck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTruckLengthSelector: false,
            showTruckTypeSelector: false,
            selectedTruckLengthList: [{
                "code": "0",
                "name": "车长"
            }],
            selectedTruckType: {
                "code": "0",
                "name": "车型"
            }
        }
    }
    selectTruckLength() {
        this.setState({ showTruckLengthSelector: true })
    }
    selectTruckType() {
        this.setState({ showTruckTypeSelector: true })
    }
    render() {
        return (
            <div className="find-truck">
                <div className="find-truck-filter-box">
                    <div className="find-truck-filter-box-sort" onClick={this.selectTruckLength.bind(this)}>
                        {this.state.selectedTruckLengthList.map(item => item.name).join(',')}
                    </div>
                    <div className="find-truck-filter-box-length" onClick={this.selectTruckType.bind(this)}>
                        {this.state.selectedTruckType.name}
                    </div>
                    <Link className="find-truck-filter-box-map" to={{pathname: this.props.pathname, search: this.props.search}}><i></i>地图找车</Link>
                </div>
                <div className="find-truck-block"></div>
                <div className="find-truck-wrapper"></div>
                {this.state.showTruckLengthSelector ? <TruckLengthSelector/> : ''}
            </div>
        )
    }
}

export default FindTruck