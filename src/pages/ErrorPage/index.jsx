import React from 'react'
import style from './style.scss'
export default props => (
  <div>
    <div className={style.empty_icon}>
        <img alt="" src={require("../../assets/img/empty.png")} />
    </div>
    <p>暂无数据</p>
  </div>
);