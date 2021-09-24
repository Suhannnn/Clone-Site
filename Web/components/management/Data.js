import React from "react";
import "./Data.css";
import { Family, Workbench, TrendTwo } from "@icon-park/react";

function Data() {
  return (
    <div className="data-flex">
      <h5>相关平台数据</h5>
      <h6>副标题</h6>
      <div className="box-box">
        <div className="guest">
          <p className="para">
            <Family
              theme="filled"
              size="20"
              fill="#33a0ee"
              className="icon-2"
            />
            今日访客
          </p>
          <div className="inbox-low">
            <div className="inbox-1">
              <p className="para">
                3746 <small id="pa">人次</small>
              </p>
              <small>访问数</small>
            </div>
            <div className="inbox-2">
              <p className="para">
                14 <small id="pa">人</small>
              </p>
              <small>用户数</small>
            </div>
          </div>
        </div>

        <div className="system">
          <p className="para">
            <Workbench
              theme="filled"
              size="20"
              fill="#33a0ee"
              className="icon-2"
            />
            集成系统
          </p>
          <div className="inbox-low">
            <div className="inbox-1">
              <p className="para">38</p>
              <small>内部系统</small>
            </div>
            <div className="inbox-2">
              <p className="para">1</p>
              <small>外部系统</small>
            </div>
          </div>
        </div>
        <div className="volume">
          <p className="para">
            <TrendTwo
              theme="filled"
              size="20"
              fill="#33a0ee"
              className="icon-2"
            />
            数据量
          </p>
          <div className="inbox-low">
            <div className="inbox-1">
              <p className="para">22T</p>
              <small>内部数据量</small>
            </div>
            <div className="inbox-2">
              <p className="para">57</p>
              <small>外部数据量</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
