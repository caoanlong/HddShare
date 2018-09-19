import React from 'react'
import { Link } from 'react-router-dom'
import style from './LinkInner.css'

export default props => (
    <Link className={style.grid} to={{pathname: props.pathname, search: props.search}}>
        <div className={style.grid_icon}>
            <img alt={props.title} src={props.icon} />
        </div>
        <div className={style.grid_label}>{props.title}</div>
    </Link>
)