import React from 'react';
import MenuList from '../sidebar/menuList'
import TodoList from './todoList'
import './layout.css'

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