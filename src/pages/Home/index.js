import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'
import linkList from './linkList'

const LinkInner = props => (
    <Link className={style.grid} to={{pathname: props.pathname, search: props.search}}>
        <div className={style.grid_icon}>
            <img alt={props.title} src={props.icon} />
        </div>
        <div className={style.grid_label}>{props.title}</div>
    </Link>
)

class Home extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.titleBar}>导航</div>
                <div className={style.grids}>
                    {linkList.map((item, i) => <LinkInner key={i} pathname={item.pathname} title={item.title} icon={item.icon} search={item.search}/>)}
                </div>
            </div>
        )
    }
}

export default Home