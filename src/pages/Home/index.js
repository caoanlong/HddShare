import React, { Component } from 'react'
import style from './style.scss'
import linkList from './linkList'
import LinkInner from './components/LinkInner'
import { Toast, ToastInner } from '../../components/Toast'

class Home extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.titleBar}>导航</div>
                <div className={style.grids}>
                    {linkList.map((item, i) => <LinkInner key={i} pathname={item.pathname} title={item.title} icon={item.icon} search={item.search}/>)}
                </div>
                <Toast><ToastInner title="你好"/></Toast>
            </div>
        )
    }
}

export default Home