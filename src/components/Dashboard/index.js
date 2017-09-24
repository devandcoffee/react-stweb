import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';

const { Header, Content, Footer } = Layout;


export default class Dashboard extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  goTo = ({ key }) => {
    this.context.router.history.push(key);
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <p>WASTP</p>
          </div>
          <Menu
            onClick={this.goTo}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">Home</Menu.Item>
            <Menu.Item key="/tournaments">Tournaments</Menu.Item>
            <Menu.Item key="/teams">Teams</Menu.Item>
            <Menu.Item key="/players">Players</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          StWeb ©2017 Created By DevAndCoffee
        </Footer>
      </Layout>
    )
  }
}
