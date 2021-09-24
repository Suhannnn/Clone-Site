import React from "react";
import "./Cloud.css";

function Cloud() {
  return (
    <div className="cloud">
      <div className="title">
        <h5>平台云动态</h5>
        <h6>副标题</h6>
      </div>
      <div className="table-x">
        <div className="table-1">
          <table>
            <tbody>
              <tr>
                <td className="hr" id="back">
                  <span id="back-1">数据 </span> <span id="back-2"></span>
                  入仓信息
                </td>
                <td className="hr"></td>
                <td className="hr"></td>
                <td className="hr"></td>
              </tr>

              <tr>
                <td>系统</td>
                <td id="center-data">表数量</td>
                <td id="center-data">数据量</td>
                <td id="center-data">入仓时间</td>
              </tr>

              <tr>
                <td>油气价值链</td>
                <td id="center-data">51</td>
                <td id="center-data">24G</td>
                <td id="center-data">2019-07-02</td>
              </tr>
              <tr>
                <td>集中报销系统</td>
                <td id="center-data">41</td>
                <td id="center-data">38G</td>
                <td id="center-data">2019-08-29</td>
              </tr>
              <tr>
                <td>投资管理系统</td>
                <td id="center-data">41</td>
                <td id="center-data">755G</td>
                <td id="center-data">2019-08-29</td>
              </tr>
              <tr>
                <td>A7工程技术管理系统</td>
                <td id="center-data">41</td>
                <td id="center-data">4100M</td>
                <td id="center-data">2019-08-29</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-2">
          <table>
            <tbody>
              <tr>
                <td className="hr" id="back">
                  <span id="back-1">平台 </span> <span id="back-2"></span>动态
                </td>
                <td className="hr" id="center-data">
                  查看更多 >>
                </td>
              </tr>

              <tr>
                <td>汽油价值链</td>

                <td id="center-data">2019-07-02</td>
              </tr>

              <tr>
                <td>油气价值链</td>

                <td id="center-data">2019-07-02</td>
              </tr>
              <tr>
                <td>集中报销系统</td>

                <td id="center-data">2019-08-29</td>
              </tr>
              <tr>
                <td>投资管理系统</td>

                <td id="center-data">2019-08-29</td>
              </tr>
              <tr>
                <td>A7工程技术管理系统</td>

                <td id="center-data">2019-08-29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cloud;
