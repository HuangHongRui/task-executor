import React, {Component} from 'react';
import { Icon } from 'antd';

export default class MenuList extends Component {
    constructor(props) {
        super(props);
        this.newList = this.newList.bind(this);
        this.state = {
            key : 0
        }
    }
    newList(){
        console.log('Hello World')
    }
    render(){
        return (
            <div className="sidebar">
              <div className="avator">
                <img src="https://avatars3.githubusercontent.com/u/26321899?v=4&s=88" alt="Avator"/>
              </div>
              <ul>

                <li key="1" className="selected">
                  <Icon type="smile-o" className="icon" />
                  <span className='text'>开心每一天</span>
                  <span>66</span>
                </li>

              </ul>
              <button onSubmit={this.newList}>
                <Icon type="api" />
                  <span>新建清单</span>
                <Icon type="api" />
              </button>
            </div>
        )
    }
}