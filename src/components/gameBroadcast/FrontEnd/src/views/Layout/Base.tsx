import React, { ReactElement, ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import routes from '../../routes/route';

const { Content, Sider } = Layout;

function Base({ children }: { children: ReactNode }): ReactElement {
  const history = useHistory();

  const goTo = (path: string) => {
    history.push(path);
  };

  return (
    <Layout>
      <Sider
        width={240}
        style={{
          backgroundColor: '#492d66',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          borderRight: '1px solid white',
        }}
        className="layout-base-sider">
        <Menu
          mode="vertical"
          style={{
            backgroundColor: '#492d66',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 400,
            border: 0,
          }}>
          {routes.map(({ name, path }) => (
            <Menu.Item
              key={name}
              onClick={() => goTo(path)}
              className="layout-base-menu-item">
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 240, height: '100vh' }}>
        <Content style={{ overflow: 'initial', backgroundColor: '#391958' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Base;
