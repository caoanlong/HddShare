import React, { Component } from 'react'
import qs from 'qs'
import { Link } from 'react-router-dom'
import ReactPullLoad, { STATS } from 'react-pullload'
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
            data: [],
            hasMore: true,
            action: STATS.init,
            index: 1
        }
        this.pageNum = 1
        this.pageSize = 10
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    }
    componentWillMount() {
        console.log(STATS)
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
    getList(status) {
        Truck.find({
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            type: this.state.selectedTruckType.constStdID === 100000044 ? '' : this.state.selectedTruckType.constStdID,
            length: this.state.selectedTruckLengthList.map(item => item.constStdID).join(','),
            AppId: this.query.AppId || ''
        }).then(res => {
            if (status === 'refreshed') {
                this.setState({
                    data: res.list,
                    hasMore: true,
                    action: STATS[status],
                    index: 1
                })
            } else {
                if(this.state.index === 0){
                    this.setState({
                        action: STATS[status],
                        hasMore: false
                    })
                } else{
                    this.setState({
                        data: [...this.state.data, ...res.list],
                        action: STATS[status],
                        index: 0,
                        hasMore: res.list.length === this.pageSize
                    })
                }
            }
        })
    }
    handleAction = (action) => {
        console.info(action, this.state.action, action === this.state.action)
        if (action === this.state.action) return false
        if (action === STATS.refreshing) {
            this.handRefreshing()
        } else if (action === STATS.loading) {
            this.handLoadMore()
        } else {
            this.setState({ action })
        }
    }
    handRefreshing = () =>{
        if (STATS.refreshing === this.state.action) return false
        this.getList('refreshed')
        this.setState({ action: STATS.refreshing })
    }
    handLoadMore = () => {
        if (STATS.loading === this.state.action) return false
        //无更多内容则不执行后面逻辑
        if (!this.state.hasMore) return
        this.getList('reset')
        this.setState({ action: STATS.loading })
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
                        hasMore={this.state.hasMore}
                        distanceBottom={100}>
                        <div>
                            {this.state.data.map((item, i) => <TruckItem key={i} truck={item}></TruckItem>)}
                        </div>
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