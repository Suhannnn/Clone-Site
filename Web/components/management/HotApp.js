import React from "react";
import "./HotApp.css";
import { Helpcenter, Audit } from "@icon-park/react";

function HotApp() {
  return (
    <div>
      <div className="hot-app-flex">
        <h5>热门应用</h5>
        <h6>副标题</h6>
        <div className="hot-app-box">
          <Helpcenter
            theme="outline"
            size="28"
            fill="#33a0ee"
            className="icon-1"
          />
          <div className="help">
            <p className="para">帮助中心</p>
            <p>查看平台核心软件及工具的操作手册，在线提交问题与反馈</p>
          </div>
          <div className="vl"></div>

          <Audit theme="outline" size="30" fill="#33a0ee" className="icon-1" />
          <div className="management">
            <p className="para">管理审批</p>
            <p>查询相关申请事项的状态，提交在线事项的审批要求</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotApp;
