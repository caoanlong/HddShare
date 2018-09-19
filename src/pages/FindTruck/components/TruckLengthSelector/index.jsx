import React, { Component } from 'react'
import './style.css'
import { T } from 'react-toast-mobile'
import BaseConstant from '../../../../api/BaseConstant'

class TruckLengthSelector extends Component {
    constructor() {
        super()
        this.state = {
            truckLengthList: [],
            selected: [{
				"code": "51",
				"constStdID": 100000044,
				"name": "不限",
				"value": "51"
			}]
        }
    }
    componentWillMount() {
        this.getList('TruckLength')
    }
    getList(type) {
        BaseConstant.findByType({ type }).then(res => {
            this.setState({ truckLengthList: res })
        })
    }
    selectOption(obj) {
        const constStdIDs = this.state.selected.map(item => item.constStdID)
        // 如果选择的选项已经勾选
        if (constStdIDs.includes(obj.constStdID)) {
            this.state.selected.splice(constStdIDs.indexOf(obj.constStdID), 1)
            return
        // 如果选择的选项没有勾选
        } else {
            // 如果勾选的是“不限”
            if (obj.constStdID === 100000044) {
                this.setState({ selected: [obj]})
            // 如果勾选的是“其他”
            } else {
                // 如果包含不限
                if (constStdIDs.includes(100000044)) {
                    this.setState({ selected: [obj]})
                } else {
                    if (this.state.selected.length === 3) {
                        T.notify('最多选择3个车长！')
                        return
                    }
                    this.setState({ selected: Array.from(this.state.selected).push(obj)})
                }
            }
        }
        console.log(this.state.selected)
    }
    close() {

    }
    render() {
        return (
            <div className="tls">
                <div className="tls-body">
                    <div className="tls-body-tit">车长</div>
                    <ul className="clearfix">
                    {this.state.truckLengthList.map((item,i) => 
                        <li 
                            key={i} 
                            className={this.state.selected.map(val => val.constStdID).includes(item.constStdID) ? 'tls-body-tit-selected' : ''} 
                            onClick={this.selectOption.bind(this, item)}>
                            <span>{item.name}</span>
                        </li>)}
                    </ul>
                </div>
                <div className="tls-footer">
                    <button className="tls-footer-cancel" onClick={this.close.bind(this, 'n')}><i></i>取消</button>
                    <button className="tls-footer-confirm" onClick={this.close.bind(this, 'y')}><i></i>确定</button>
                </div>
            </div>
        )
    }
}

export default TruckLengthSelector