import React from "react";
import "./Nav.css";
import { Form, FormControl } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DataManagement from "./management/DataManagement";
import { Me, Helpcenter, Remind } from "@icon-park/react";
import PlatformAbility from "./ability/PlatformAbility";

function Nav() {
  function Home() {
    return <h1>Home</h1>;
  }

  function Help() {
    return <h1>帮助</h1>;
  }
  function Message() {
    return <h1>消息</h1>;
  }

  return (
    <div>
      <Router>
        <div className="nav">
          <div className="nav_1">
            <div>
              <Link to="/" className="link">
                <img
                  className="logo"
                  src="https://upload.wikimedia.org/wikipedia/zh/thumb/2/2b/Petrochina_logo.svg/180px-Petrochina_logo.svg.png"
                  alt=""
                />
              </Link>
            </div>

            <li>
              <Link to="/home" className="link">
                <strong>中联油大数据平台</strong>
              </Link>
            </li>
          </div>
          <div className="nav_2">
            <li>
              <Link to="/数据管理" className="link">
                数据管理
              </Link>
            </li>
            <li>
              <Link to="/平台能力" className="link">
                平台能力
              </Link>
            </li>
          </div>
          <div className="nav_3">
            <div>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="全局搜索"
                  className="mr-2"
                />
              </Form>
            </div>
            <div class="verticleLine"></div>
            <li>
              <Helpcenter
                theme="outline"
                size="21"
                fill="#d4d2d2"
                className="icon"
              />
              <Link to="/帮助" className="link">
                帮助
              </Link>
            </li>
            <li>
              <Remind
                theme="outline"
                size="18"
                fill="#d4d2d2"
                className="icon"
              />
              <Link to="/消息" className="link">
                消息
              </Link>
            </li>
            <div class="verticleLine"></div>
            <NavDropdown title="用户名" id="nav-dropdown">
              <NavDropdown.Item href="/clone site用户名/姓名">
                姓名
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/用户名/我的共享">
                我的共享
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/用户名/我的工具">
                我的工具
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/用户名/设置">设置</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/用户名/退出登录">
                退出登录
              </NavDropdown.Item>
            </NavDropdown>
            <Me theme="outline" size="23" fill="#d4d2d2" />
          </div>
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/数据管理">
            <DataManagement />
          </Route>
          <Route path="/平台能力">
            <PlatformAbility />
          </Route>
          <Route path="/帮助">
            <Help />
          </Route>
          <Route path="/消息">
            <Message />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Nav;
