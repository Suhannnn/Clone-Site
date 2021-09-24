import React from "react";
import "./Banner.css";
import { ApiApp, Workbench } from "@icon-park/react";

function Banner() {
  return (
    <div className="banner">
      {/**image */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url("https://trainingindustry.com/content/uploads/2021/06/Creating-a-Learning-Culture-for-the-Improvement-of-your-Organization-928x522.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="shadow">
          <div className="banner-title">
            <h1>平台能力</h1>
            <p>一站式服务为您提供数据驱动运营所需的所有工具</p>
          </div>
        </div>
      </div>
      <div className="banner-box">
        <div className="bf-1">
          <div className="banner-top-1">
            <ApiApp theme="outline" size="26" fill="#e43a46" />
            <p>热门应用</p>
          </div>
          <div className="banner-top-2">
            <p>
              <span id="top">Top1</span> 访问平台工具<div id="pad"></div>
              <span id="hot">HOT</span>
            </p>
            <small>说明说明说明说明</small>
          </div>

          <div className="banner-top-3">
            <p>
              <span id="top">Top2</span> 访问平台工具<div id="pad"></div>
            </p>
            <small>说明说明说明说明</small>
          </div>
          <div className="banner-top-4">
            <p>
              <span id="top">Top3</span> 访问平台工具<div id="pad"></div>
            </p>
            <small>说明说明说明说明</small>
          </div>
        </div>
        <div className="bf-2">
          <div className="banner-top-1">
            <Workbench theme="outline" size="26" fill="#e43a46" />
            <p>热门应用</p>
          </div>
          <div className="banner-top-2">
            <p>
              <span id="top">Top1</span> 访问示范应用<div id="pad"></div>
            </p>
            <small>说明说明说明说明</small>
          </div>
          <div className="banner-top-3">
            <p>
              <span id="top">Top2</span> 访问示范应用<div id="pad"></div>
            </p>
            <small>说明说明说明说明</small>
          </div>
          <div className="banner-top-4">
            <p>
              <span id="top">Top3</span> 访问示范应用<div id="pad"></div>
            </p>
            <small>说明说明说明说明</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
