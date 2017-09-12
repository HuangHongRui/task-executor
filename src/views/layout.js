import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './layout.css'

//const { Header, Content, Footer, Sider } = Layout;
//const SubMenu = Menu.SubMenu;


export default class View extends React.Component {
  render() {
    return (
      <div className="layout">
            <div className="sidebar">
              <div className="avator">
                <img src="https://avatars3.githubusercontent.com/u/26321899?v=4&s=88"/>
              </div>
              <ul>

                <li key="1" className="selected">
                  <Icon type="smile-o" className="icon" />
                  <span className='text'>开心每一天</span>
                  <span>66</span>
                </li>

                <li key="2">
                  <Icon type="smile-o" className="icon" />
                  <span className='text'>开心每一天</span>
                  <span>66</span>
                </li>

                <li key="3">
                  <Icon type="smile-o" className="icon" />
                  <span className='text'>开心每一天</span>
                  <span>66</span>
                </li>

              </ul>
              <button>
                <Icon type="api" />
                  <span>新建清单</span>
                <Icon type="api" />
              </button>
            </div>

            <div className="ct">
              <header />
              <content>
                <div >
                  Bill is a cat.
                </div>
              </content>
              <footer>
                  HuangHongRui.
              </footer>
            </div>
      </div>
    );
  }
}

