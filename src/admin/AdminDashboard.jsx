import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      
      <h1 className="navbar-brand custom-logo pt-3 ps-2 pb-2 mb-0 border-bottom border-warning" style={{backgroundColor: "#2e0854"}}>Occult Studio</h1>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/admin/user">User Management</Link>,
              },
              {
                key: "2",
                icon: <LineChartOutlined />,
                label: <Link to="/admin/chart">Chart Analytics</Link>,
              },
            ]}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              backgroundColor: "#2e0854",
            }}
          >
            
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              padding: 25,
              minHeight: 250,
              background: colorBgContainer,
              backgroundColor: "#4c0082"
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminDashboard;
