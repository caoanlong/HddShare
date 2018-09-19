import React, { Component } from 'react'
import style from './style.css'
import linkList from './linkList'
import LinkInner from './components/LinkInner'
import { T } from 'react-toast-mobile'

class Home extends Component {
    constructor() {
        super()
    }
    showToast() {
        T.notify('成功！')
    }
    render() {
        return (
            <div className={style.container}>
                <div className={style.titleBar} onClick={this.showToast}>导航</div>
                <div className={style.grids}>
                    {linkList.map((item, i) => <LinkInner key={i} pathname={item.pathname} title={item.title} icon={item.icon} search={item.search}/>)}
                </div>
            </div>
        )
    }
}

export default Home