
import React, { Component } from "react";
import qs from "qs";
import style from './style.scss'
import Content from "../../api/Content";

class InfoFee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
  }
  componentWillMount() {
    this.getContent();
  }
  getContent() {
    Content.getContent({
      code: this.query.code || "InformationFees",
      AppId: this.query.AppId || "",
      //   AppId: this.query.AppId || "10000003",
      Authorization: this.query.Authorization
    }).then(res => {
      this.setState({ content: res[0].content });
    });
  }

	render() {
		return (
			<div className={style.container}>
        		<div className="padd">
          			<div className="item">
						<img className="icon" src="../assets/img/position_icon.svg">
						<div className="lineInfo">
						<span className="start">{{ infoData.areaFromName }}</span>
						<span className="arrow"></span>
						<span className="end">{{ infoData.areaToName }}</span>
					</div>
				</div>
            	<div className="item">
              		<img className="icon" src="../assets/img/detail_icon2.svg">
                		<div className="goodInfo">{{ infoData.cargoName ? infoData.cargoName + '/' : '' }}{{ infoData.cargoWeight ? infoData.cargoWeight + '吨' : '' }}{{ infoData.cargoVolume ? '/' + infoData.cargoVolume + '方' : '' }}{{ infoData.cargoNum ? '/' + infoData.cargoNum + '件' : '' }}</div>
				</div>
				<img className="success_icon" src="../assets/img/success_icon.png" />
			</div>
    );
  }
}

export default InfoFee