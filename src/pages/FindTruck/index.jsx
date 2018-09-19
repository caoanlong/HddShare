import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'
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
            <div className={style.findTruck}>
                <div className={style.filterBox}>
                    <div className={style.sort} onClick={this.selectTruckLength.bind(this)}>
                        {this.state.selectedTruckLengthList.map(item => item.name).join(',')}
                    </div>
                    <div className={style.length} onClick={this.selectTruckType.bind(this)}>
                        {this.state.selectedTruckType.name}
                    </div>
                    <Link className={style.map} to={{pathname: this.props.pathname, search: this.props.search}}><i></i>地图找车</Link>
                </div>
                <div className={style.block}></div>
                <div className={style.wrapper}></div>
                {this.state.showTruckLengthSelector ? <TruckLengthSelector/> : ''}
            </div>
        )
    }
}

export default FindTruck