import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './style.scss'

const modalRoot = document.getElementById('root')

export const ToastInner = props => (
    <div className={style.modal}>{props.title}</div>
)

export class Toast extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount() {
        modalRoot.appendChild(this.el)
        setTimeout(() => {
            modalRoot.removeChild(this.el)
        }, this.props.duration || 2000);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}