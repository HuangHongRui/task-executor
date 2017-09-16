import React from 'react';
import MenuList from './sidebar/view/menuList'
import TodoList from './todos/view/todoList'
import 'animate.css';
import './style/app.css';
import './style/layout.css'

export default function App() {
    return (
      <div className="layout">
          <MenuList/>
          <TodoList />
      </div>
    );
}
