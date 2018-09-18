import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'

const linkList = [
    {
        title: 'App下载',
        pathname: '/AppDownload',
        icon: require('../../assets/img/download.svg')
    },
    {
        title: '货主下载',
        pathname: '/ConsignorDownload',
        icon: require('../../assets/img/download.svg')
    },
    {
        title: '司机下载',
        pathname: '/DriverDownload',
        icon: require('../../assets/img/download.svg')
    },
    {
        title: '关于货多多',
        pathname: '/aboutHdd',
        icon: require('../../assets/img/about.svg')
    },
    {
        title: '注册协议',
        pathname: '/agreement',
        icon: require('../../assets/img/agreement.svg')
    },
    {
        title: '信息费协议',
        pathname: '/infoFee',
        icon: require('../../assets/img/agreement.svg')
    },
    {
        title: '运输费协议',
        pathname: '/transFee',
        icon: require('../../assets/img/download.svg')
    },
    {
        title: '支付协议',
        pathname: '/PaymentAgreement',
        icon: require('../../assets/img/PaymentAgreement.svg')
    },
    {
        title: '货源详情',
        pathname: '/goodsDetail',
        icon: require('../../assets/img/detail.svg')
    },
    {
        title: '车辆详情',
        pathname: '/truckDetail',
        icon: require('../../assets/img/detail.svg')
    },
    {
        title: '寻找货源',
        pathname: '/findGoods',
        icon: require('../../assets/img/goods_icon.svg')
    },
    {
        title: '寻找车辆',
        pathname: '/findTruck',
        icon: require('../../assets/img/truck_icon.svg')
    },
    {
        title: '银行列表',
        pathname: '/bankList',
        icon: require('../../assets/img/bank.svg')
    },
    {
        title: '提现手续费',
        pathname: '/findTruck',
        icon: require('../../assets/img/truck_icon.svg')
    },
    {
        title: '寻找车辆',
        pathname: '/findTruck',
        icon: require('../../assets/img/truck_icon.svg')
    },
    {
        title: '寻找车辆',
        pathname: '/findTruck',
        icon: require('../../assets/img/truck_icon.svg')
    },
    {
        title: '寻找车辆',
        pathname: '/findTruck',
        icon: require('../../assets/img/truck_icon.svg')
    },
]
const LinkInner = (props) => (
    <Link className={style.grid} to={{pathname: props.pathname}}>
        <div className={style.grid_icon}>
            <img src={props.icon} />
        </div>
        <div className={style.grid_label}>{props.title}</div>
    </Link>
)

class Home extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.titleBar}>APP内嵌套单页</div>
                <div className={style.grids}>
                    { linkList.map(item => <LinkInner pathname={item.pathname} title={item.title} icon={item.icon} />) }
                    <Link className={style.grid} to={{pathname: 'FaqDetail',query: {code:'ServiceCharge'}}}>
                        {/* <div className={grid_icon}><img src="../assets/img/charge.svg"></div>
                        <div className={grid_label}>提现手续费</div> */}
                    </Link>
                    <Link className={style.grid} to={{pathname: 'FaqDetail',query: {code:'Withdrawals'}}}>
                        {/* <div className={grid_icon}><img src="../assets/img/rules.svg"></div>
                        <div className={grid_label}>提现规则</div> */}
                    </Link>
                    <Link className={style.grid} to={{pathname: 'FaqList'}}>
                        {/* <div className={grid_icon}><img src="../assets/img/help.svg"></div>
                        <div className={grid_label}>常见问题</div> */}
                    </Link>
                    <Link className={style.grid} to={{pathname: 'statement'}}>
                        {/* <div className={grid_icon}><img src="../assets/img/statement.svg"></div>
                        <div className={grid_label}>交易申明</div> */}
                    </Link>
                    <Link className={style.grid} to={{pathname: 'updata'}}>
                        {/* <div className={grid_icon}><img src="../assets/img/updata_icon.svg" class="rotate"></div>
                        <div className={grid_label}>版本更新</div> */}
                    </Link>
                    <Link className={style.grid} to={{pathname: 'error'}}>
                        {/* <div className={grid_icon}><img src="../assets/img/404.svg"></div>
                        <div className={grid_label}>404页面</div> */}
                    </Link>
                    <Link className={style.grid} to="">
                        {/* <div className={grid_icon}><img src="../assets/img/more.svg"></div>
                        <div className={grid_label}>敬请期待</div> */}
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home