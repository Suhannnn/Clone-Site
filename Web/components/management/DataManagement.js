import React from "react";
import "./DataManagement.css";
import { Button } from "react-bootstrap";
import HotApp from "./HotApp";
import Data from "./Data";
import Cloud from "./Cloud";

import Statistic from "./Statistic";
import Function from "./Function";

function DataManagement() {
  return (
    <div>
      <div
        className="background-image"
        style={{
          backgroundImage: `url("https://trainingindustry.com/content/uploads/2021/06/Creating-a-Learning-Culture-for-the-Improvement-of-your-Organization-928x522.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="shadow">
          <div className="flex">
            <h1>大数据概念应用到IT操作工具</h1>
            <p className="sub">
              大数据分析的产生旨在于IT管理，企业可以将实时数据流分析和历史相关数据相结合
            </p>

            <Button
              block
              style={{
                backgroundColor: "rgb(48, 101, 245, 0.4)",
                borderColor: "white",
                color: "white",
              }}
            >
              了解详情
            </Button>
          </div>
        </div>
        <HotApp />
        <Data />
        <Cloud />
        <Function />
        <Statistic />
      </div>
    </div>
  );
}

export default DataManagement;
