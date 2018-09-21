import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import style from './style.scss'

class TruckItem extends Component {
    render() {
        const truckInfo = [
            this.props.truck.truckLengthName, 
            this.props.truck.truckTypeName, 
            this.props.truck.loads
        ].join('/')
        return (
            <div className={style.truck}>
                <Link className={style.baseInfo} to={{
                        pathname: 'truckDetail', 
                        search: `?id=${this.props.truck.memIDStr}`
                    }}>
                    <div className={style.ls}>
                        <LazyLoad>
                            <img width="70" src={window.IMG_API + this.props.truck.headPicture} alt=""/>
                        </LazyLoad>
                    </div>
                    <div className={style.text}>
                        <div className={style.driver}>{this.props.truck.realName} {this.props.truck.plateNo}</div>
                        <div className={style.truckInfo}>{truckInfo}吨</div>
                        <div className={style.local}>
                            {this.props.truck.posUpdateTimeStr} {this.props.truck.posAreaName}
                        </div>
                    </div>
                </Link>
                <a className={style.tel} href={'tel:' + this.props.truck.mobile}>
                    <img src={require('../../../../assets/icons/ic_call_phone_image.png')} alt=""/>
                </a>
            </div>
        )
    }
}

export default TruckItem