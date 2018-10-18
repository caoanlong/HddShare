
import React, { Component } from "react";
import style from './style.scss'
import Content from "../../api/Content";
class Agreenment extends Component {
    componentWillMount() {
        this.getContent().then(res => {
            this.setState({
                data: res.list,
            })
        })
    }
    getContent() {
        return Content.getContent({
            code:'Agreement',
            // AppId: this.query.AppId || ""
        });
    }
    render() {
        return (
            <div className={style.container}>
                <div className={style.agreenment_con} />
            </div>
        )
    }
}

export default Agreenment