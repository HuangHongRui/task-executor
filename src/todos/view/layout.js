import React from 'react';
import './layout.css'
import MenuList from './menuList'
import TodoList from './todoList'

export default class View extends React.Component {
  render() {
    return (
      <div className="layout">
          <MenuList/>

          <TodoList />
      </div>
    );
  }
}








  {/*<div className="sidebar">*/}
              {/*<div className="avator">*/}
                {/*<img src="https://avatars3.githubusercontent.com/u/26321899?v=4&s=88"/>*/}
              {/*</div>*/}
              {/*<ul>*/}

                {/*<li key="1" className="selected">*/}
                  {/*<Icon type="smile-o" className="icon" />*/}
                  {/*<span className='text'>开心每一天</span>*/}
                  {/*<span>66</span>*/}
                {/*</li>*/}

              {/*</ul>*/}
              {/*<button>*/}
                {/*<Icon type="api" />*/}
                  {/*<span>新建清单</span>*/}
                {/*<Icon type="api" />*/}
              {/*</button>*/}
            {/*</div>*/}

                        {/*<div className="ct">*/}
              {/*<header>*/}
                  {/*<h1>开心每一天</h1>*/}
                  {/*<div>*/}
                    {/*<button>*/}
                        {/*<Icon type="bars" />*/}
                    {/*排序</button>*/}
                    {/*<button>*/}
                        {/*<Icon type="ellipsis" />*/}
                    {/*</button>*/}
                  {/*</div>*/}
              {/*</header>*/}
              {/*<content>*/}
                {/*<ul>*/}
                  {/*<li>*/}
                      {/*<div>*/}
                        {/*<Icon type="pushpin-o" className="icon"/>*/}
                        {/*<span>*/}
                          {/*Bill is a cat.*/}
                        {/*</span>*/}
                      {/*</div>*/}
                      {/*<Icon type="minus" className="icon"/>*/}
                  {/*</li>*/}
                {/*</ul>*/}
              {/*</content>*/}
              {/*<footer>*/}
                  {/*<input type="text" placeholder='新增待办' />*/}
              {/*</footer>*/}
            {/*</div>*/}
