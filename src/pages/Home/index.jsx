import React, { Component } from 'react'
import './style.css'
import linkList from './linkList'
import LinkInner from './components/LinkInner'
import { T } from 'react-toast-mobile'

class Home extends Component {
    showToast() {
        T.notify('成功！')
    }
    render() {
        return (
            <div className="home">
                <div className="home-title" onClick={this.showToast}>导航</div>
                <div className="home-grids">
                    {linkList.map((item, i) => <LinkInner key={i} pathname={item.pathname} title={item.title} icon={item.icon} search={item.search}/>)}
                </div>
            </div>
        )
    }
}

export default Home