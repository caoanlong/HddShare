import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default props => (
    <Link className="link-grid" to={{pathname: props.pathname, search: props.search}}>
        <div className="link-grid-icon">
            <img alt={props.title} src={props.icon} />
        </div>
        <div className="link-grid-label">{props.title}</div>
    </Link>
)