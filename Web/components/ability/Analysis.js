import React from "react";
import "./Analysis.css";
import {
  Workbench,
  MonitorOne,
  IMac,
  PaintedScreen,
  TableReport,
  DateComesBack,
  MarketAnalysis,
  ChartHistogramOne,
  DataArrival,
  DataScreen,
  DataAll,
  Dropbox,
  Windows,
  ConnectionBox,
} from "@icon-park/react";

function Analysis() {
  return (
    <div className="analysis">
      <div className="analysis-box">
        <div className="a-title">
          <Workbench theme="filled" size="22" fill="#e43c30" />
          <h5>数据分析</h5>
        </div>
        <hr />
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <MonitorOne theme="outline" size="26" fill="#e43a46" />
              <div className="a-box-2">
                <p>管理驾驶舱设计器</p>
                <small>在线设计并快速构建驾驶舱应用</small>
              </div>
            </div>
            <div className="a-box-1">
              <PaintedScreen theme="outline" size="26" fill="#020202" />
              <div className="a-box-2">
                <p>智能报告</p>
                <small>设计数据报告，直观了解分析洞见</small>
              </div>
            </div>
            <div className="a-box-1">
              <TableReport theme="outline" size="24" fill="#020202" />
              <div className="a-box-2">
                <p>帆软报表</p>
                <small>灵活报表设计与应用</small>
              </div>
            </div>
          </div>
        </div>
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <IMac theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>敏捷BI</p>
                <small>可视化建模与交互分析，快速呈现分析简介</small>
              </div>
            </div>
            <div className="a-box-1">
              <DateComesBack theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>数据挖掘</p>
                <small>图形化的在线数据挖掘与机器学习平台</small>
              </div>
            </div>
            <div className="a-box-1">
              <MarketAnalysis theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>多维建模</p>
                <small>设计并实例化Cube，为业务提前进行聚合运算</small>
              </div>
            </div>
          </div>
        </div>
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <ChartHistogramOne theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>自助分析</p>
                <small>对HBASE数据的可视化页面查询</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataArrival theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>智能识别</p>
                <small>智能识别图片文字并转换为结构化信息</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataScreen theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>手工数据收集</p>
                <small>为业务应用提供在线手工填报数据的入口</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="analysis-box">
        <div className="a-title">
          <DataAll theme="filled" size="20" fill="#e43c30" />
          <h5>数据开发</h5>
        </div>
        <hr />
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <DataArrival theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>数据集成</p>
                <small>基于全平台的全栈式数据收集平台</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataScreen theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>任务调度</p>
                <small>分部可视化DAG工作流任务调度</small>
              </div>
            </div>
            <div className="a-box-1">
              <ChartHistogramOne theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>定时任务</p>
                <small>分布式定时任务管理</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="analysis-box">
        <div className="a-title">
          <ConnectionBox theme="filled" size="19" fill="#e43c30" />
          <h5>数据管理</h5>
        </div>
        <hr />
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <MonitorOne theme="outline" size="26" fill="#020202" />
              <div className="a-box-2">
                <p>源系统信息登记</p>
                <small>登记所需数据信息及其所在源系统信息</small>
              </div>
            </div>
            <div className="a-box-1">
              <PaintedScreen theme="outline" size="26" fill="#020202" />
              <div className="a-box-2">
                <p>数据目录</p>
                <small>展示大数据平台的业务数据、技术数据等</small>
              </div>
            </div>
            <div className="a-box-1">
              <TableReport theme="outline" size="24" fill="#020202" />
              <div className="a-box-2">
                <p>数据质量</p>
                <small>提供质量管理规则与任务设定，形成数据质量分析</small>
              </div>
            </div>
          </div>
        </div>
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <IMac theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>共享管理</p>
                <small>对平台内数据资源的统一管理</small>
              </div>
            </div>
            <div className="a-box-1">
              <DateComesBack theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>数据关系分析</p>
                <small>基于元数据生成数据地图、血缘分析、影响分析</small>
              </div>
            </div>
            <div className="a-box-1"></div>
          </div>
        </div>
      </div>
      <div className="analysis-box">
        <div className="a-title">
          <Windows theme="filled" size="22" fill="#e43c30" />
          <h5>系统开发</h5>
        </div>
        <hr />
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <ChartHistogramOne theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>应用市场</p>
                <small>云平台应用创建发布</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataArrival theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>管理后台</p>
                <small>集中了用户资源的自管理的功能</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataScreen theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>服务目录</p>
                <small>系统内API服务目录显示与信息发布</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="analysis-box">
        <div className="a-title">
          <Dropbox theme="filled" size="22" fill="#e43a46" />
          <h5>运维管理</h5>
        </div>
        <hr />
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <MonitorOne theme="outline" size="26" fill="#020202" />
              <div className="a-box-2">
                <p>权限管理</p>
                <small>统一的平台内租户、资源与工具的权限管理</small>
              </div>
            </div>
            <div className="a-box-1">
              <PaintedScreen theme="outline" size="26" fill="#020202" />
              <div className="a-box-2">
                <p>账户管理</p>
                <small>包括账户维护、分组、登录日志、账户维护功能</small>
              </div>
            </div>
            <div className="a-box-1">
              <TableReport theme="outline" size="24" fill="#020202" />
              <div className="a-box-2">
                <p>统一监控</p>
                <small>平台监控、数据监控与应用监控</small>
              </div>
            </div>
          </div>
        </div>
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <IMac theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>云平台管理</p>
                <small>对整个大数据云平台的管理</small>
              </div>
            </div>
            <div className="a-box-1">
              <DateComesBack theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>安全中心</p>
                <small>实现细粒度权限控制与管理</small>
              </div>
            </div>
            <div className="a-box-1">
              <MarketAnalysis theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>变更管理</p>
                <small>对平台工具与模块软件的升级或不定提供一键式部署</small>
              </div>
            </div>
          </div>
        </div>
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <ChartHistogramOne theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>传输管理</p>
                <small>对多个环境间脚本/程序等的部署实现一键传输</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataArrival theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>工单管理</p>
                <small>对平台运维工作的任务申请与分配管理</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataScreen theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>Oracle数据管理</p>
                <small>提供对Oracle数据库的链接与配置管理</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="analysis-box">
        <div className="a-title">
          <Workbench theme="filled" size="22" fill="#e43c30" />
          <h5>数据分析</h5>
        </div>
        <hr />

        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <IMac theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>租户中心</p>
                <small>统一的租户管理与租户项目操作的入口</small>
              </div>
            </div>
            <div className="a-box-1">
              <DateComesBack theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>智能推荐</p>
                <small>按用户访问频次、类别、主题等特性所智能推荐内容</small>
              </div>
            </div>
            <div className="a-box-1">
              <MarketAnalysis theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>内容管理</p>
                <small>对平台动态信息和技术文档管理</small>
              </div>
            </div>
          </div>
        </div>
        <div className="a-flexbox">
          <div className="a-box">
            <div className="a-box-1">
              <ChartHistogramOne theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>市场管理</p>
                <small>配置终端用户登陆大数据平台的入口内容</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataArrival theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>流程管理</p>
                <small>对平台内相关申请的在线处理</small>
              </div>
            </div>
            <div className="a-box-1">
              <DataScreen theme="outline" size="25" fill="#020202" />
              <div className="a-box-2">
                <p>用户分析</p>
                <small>平台内用户访问情况的可视化分析展现</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
