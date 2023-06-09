// import React from 'react';
// import './index.css';
// import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
  const { token: { 
    colorBgContainer
   }, } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Home', href: 'https://www.youtube.com/' },{ title:'List' }]} />
        <div className="site-layout-content" style={{ background:  colorBgContainer}}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;