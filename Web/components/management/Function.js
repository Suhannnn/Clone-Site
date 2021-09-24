import React from "react";
import "./Function.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  ApplicationTwo,
  Tips,
  Protect,
  Finance,
  Avocado,
} from "@icon-park/react";

function Function() {
  return (
    <div className="function">
      <div className="function-box">
        <Router>
          <div className="my-app">
            <ApplicationTwo
              theme="filled"
              size="26"
              fill="#33a0ee"
              className="icon-3"
            />
            <p className="para">我的应用</p>
            <nav>
              <ul>
                <li>
                  <Link to="/我的应用/我的待办" className="link-1">
                    我的待办
                  </Link>
                </li>
                <li>
                  <Link to="/我的应用/我的已办" className="link-1">
                    我的已办
                  </Link>
                </li>
                <li>
                  <Link to="/我的应用/流程管理" className="link-1">
                    流程管理
                  </Link>
                </li>
                <li>
                  <Link to="/我的应用/岗位管理" className="link-1">
                    岗位管理
                  </Link>
                </li>
              </ul>
              <Switch>
                <Route path="/我的应用/我的待办">
                  <Todo />
                </Route>
                <Route path="/我的应用/我的已办">
                  <Done />
                </Route>
                <Route path="/我的应用/流程管理">
                  <ProcessManagement />
                </Route>
                <Route path="/我的应用/岗位管理">
                  <PositionManagement />
                </Route>
              </Switch>
            </nav>
          </div>
        </Router>
        <Router>
          <div className="support">
            <Tips theme="filled" size="27" fill="#33a0ee" className="icon-3" />
            <p className="para">决策支持</p>
            <nav>
              <ul>
                <li>
                  <Link to="/决策支持/管理驾驶舱" className="link-1">
                    管理驾驶舱
                  </Link>
                </li>
                <li>
                  <Link to="/决策支持/自助分析" className="link-1">
                    自助分析
                  </Link>
                </li>
                <li>
                  <Link to="/决策支持/指标体系" className="link-1">
                    指标体系
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/决策支持/管理驾驶舱">
                <DriveManagement />
              </Route>
              <Route path="/决策支持/自助分析">
                <SelfAnalysis />
              </Route>
              <Route path="/决策支持/指标体系">
                <System />
              </Route>
            </Switch>
          </div>
        </Router>
        <Router>
          <div className="control">
            <Protect
              theme="filled"
              size="26"
              fill="#33a0ee"
              className="icon-3"
            />
            <p className="para">风控部</p>
            <nav>
              <ul>
                <li>
                  <Link to="/风控部/原油贸易统计分析" className="link-1">
                    原油贸易统计分析
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/风控部/原油贸易统计分析">
                <OilCommerce />
              </Route>
            </Switch>
          </div>
        </Router>
        <Router>
          <div className="finance">
            <Finance
              theme="filled"
              size="27"
              fill="#33a0ee"
              className="icon-3"
            />
            <p className="para">财务部</p>
            <nav>
              <ul>
                <li>
                  <Link to="/财务部/公司贸易统计分析" className="link-1">
                    公司贸易统计分析
                  </Link>
                </li>
                <li>
                  <Link to="/财务部/预算与实际对比" className="link-1">
                    预算与实际对比
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/财务部/公司贸易统计分析">
                <CompanyCommerce />
              </Route>
              <Route path="/财务部/预算与实际对比">
                <Budget />
              </Route>
            </Switch>
          </div>
        </Router>
        <Router>
          <div className="oil">
            <Avocado
              theme="filled"
              size="28"
              fill="#33a0ee"
              className="icon-3"
            />
            <p className="para">原油部</p>
            <nav>
              <ul>
                <li>
                  <Link to="/原油部/原油贸易统计分析" className="link-1">
                    原油贸易统计分析
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/原油部/原油贸易统计分析">
                <OilCommerce />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Function;

function Todo() {
  return <h1>todo</h1>;
}

function Done() {
  return <h1>done</h1>;
}
function ProcessManagement() {
  return <h1>ProcessManagement</h1>;
}
function PositionManagement() {
  return <h1>PositionManagement</h1>;
}

function DriveManagement() {
  return <h1>DriveManagement</h1>;
}

function SelfAnalysis() {
  return <h1>SelfAnalysis</h1>;
}

function System() {
  return <h1>System</h1>;
}

function OilCommerce() {
  return <h1>OilCommerce</h1>;
}
function CompanyCommerce() {
  return <h1>CompanyCommerce</h1>;
}

function Budget() {
  return <h1>Budget</h1>;
}
