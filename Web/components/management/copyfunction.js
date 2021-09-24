import React from "react";
import "./Function.css";

function Function() {
  return (
    <div className="function">
      <div className="function-box">
        <div className="my-app">
           <p className="para">我的应用</p>
          <ul>
            <li>我的待办</li>
            <li>我的已办</li>
            <li>流程管理</li>
            <li>岗位管理</li>
          </ul>
        </div>
        <div className="support">
           <p className="para">决策支持</p>
          <ul>
            <li>管理驾驶舱</li>
            <li>自助分析</li>
            <li>指标体系</li>
          </ul>
        </div>
        <div className="control">
           <p className="para">风控部</p>
          <ul>
            <li>原油贸易统计分析</li>
          </ul>
        </div>
        <div className="finance">
           <p className="para">财务部</p>
          <ul>
            <li>公司贸易统计分析</li>
            <li>预算与实际对比</li>
          </ul>
        </div>
        <div className="oil">
           <p className="para">原油部</p>
          <ul>
            <li>原油贸易统计分析</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Function;
