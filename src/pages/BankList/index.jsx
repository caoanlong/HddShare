import React, { Component } from "react";
import qs from "qs";
import style from './style.scss'
import Pay from "../../api/Pay"

class BankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
		content: ''
	}
	this.query = qs.parse(this.props.location.search, {
		ignoreQueryPrefix: true
	})
  }
  componentWillMount() {
	this.getBankList()
  }
  getBankList() {
    Pay.getSupportBankList({
		AppId: this.query.AppId || "",
		//   AppId: this.query.AppId || "10000003",
		Authorization: this.query.Authorization
    }).then(res => {
		this.setState({ content: res[0].content })
    })
  }

  render() {
    return (
		<div className={style.container}>
			<div className={style.agreenment_con} dangerouslySetInnerHTML={{ __html: this.state.content }}/>
		</div>
    );
  }
}

export default BankList