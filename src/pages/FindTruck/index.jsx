import React, { Component } from 'react'
import qs from 'qs'
import { Link } from 'react-router-dom'
import ReactPullLoad, { STATS } from 'react-pullload'
import 'node_modules/react-pullload/dist/ReactPullLoad.css'
import style from './style.scss'
import TruckLengthSelector from './components/TruckLengthSelector'
import TruckTypeSelector from './components/TruckTypeSelector'
import TruckItem from './components/TruckItem'
import Truck from '../../api/Truck'

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
            },
            list: [],
            hasMore: true,
            action: STATS.init,
            index: loadMoreLimitNum //loading more test time limit
        }
        this.pageNum = 1
        this.pageSize = 10
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    }
    componentWillMount() {
        this.getList()
    }
    selectTruckLength() {
        this.setState({ showTruckLengthSelector: true })
    }
    selectTruckType() {
        this.setState({ showTruckTypeSelector: true })
    }
    callBackTruckLengthSelector(selectedTruckLengthList) {
        this.setState({ showTruckLengthSelector: false })
        if (selectedTruckLengthList) this.setState({ selectedTruckLengthList })
    }
    callBackTruckTypeSelector(selectedTruckType) {
        this.setState({ showTruckTypeSelector: false })
        if (selectedTruckType) this.setState({ selectedTruckType })
    }
    getList() {
        Truck.find({
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            type: this.state.selectedTruckType.constStdID === 100000044 ? '' : this.state.selectedTruckType.constStdID,
            length: this.state.selectedTruckLengthList.map(item => item.constStdID).join(','),
            AppId: this.query.AppId || '',
        }).then(res => {
            this.setState({ list: res.list })
        })
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
                <div className={style.wrapper}>
                    <ReactPullLoad
                        downEnough={150}
                        action={this.state.action}
                        handleAction={this.handleAction}
                        hasMore={hasMore}
                        style={{ paddingTop: 50 }}
                        distanceBottom={1000}
                        >
                        <ul className="test-ul">
                            <button onClick={this.handRefreshing}>refreshing</button>
                            <button onClick={this.handLoadMore}>loading more</button>
                            {this.state.list.map((item, i) => <TruckItem key={i} truck={item}></TruckItem>)}
                        </ul>
                    </ReactPullLoad>
                </div>
                {
                    this.state.showTruckLengthSelector 
                    ? <TruckLengthSelector callback={this.callBackTruckLengthSelector.bind(this)}/> 
                    : ''
                }
                {
                    this.state.showTruckTypeSelector 
                    ? <TruckTypeSelector callback={this.callBackTruckTypeSelector.bind(this)}/> 
                    : ''
                }
            </div>
        )
    }
}

export default FindTruck