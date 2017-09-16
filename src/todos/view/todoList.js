//父组件
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Icon} from 'antd';
import TodoItem from './todoItem'
import {toggleTodo, removeTodo} from "../actions";
import { FilterTypes } from '../../constants.js';
import AddTodo from './addTodo'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
            <div className="ct">
                <header>
                    <h1>开心每一天</h1>
                    <div>
                        <button>
                            <Icon type="bars" />
                            排序</button>
                        <button>
                            <Icon type="ellipsis" />
                        </button>
                    </div>
                </header>
                <div className='content'>
                    <ul>
                        {
                            todos.map((item) => (
                                <TodoItem
                                key = {item.id}
                                text = {item.text}
                                selected = { item.selected }
                                timer = {item.timer}
                                onToggle = {() => {onToggleTodo(item.id)}}
                                onRemove = {() => {onRemoveTodo(item.id)}}
                                />
                            ))
                        }
                    </ul>
                </div>
                <AddTodo />
            </div>
    )
};


TodoList.propTypes = {
    todos : PropTypes.array.isRequired
};

const selectVisibleTodos = (todos,filter) => {
    switch (filter) {
        case FilterTypes.All:
            return todos;
        case FilterTypes.SELECTED:
            return todos.filter(item => todos.selected);
        case FilterTypes.UNSELECTED:
            return todos.filter(item => !todos.selected);
        default:
            throw new Error('UNSUPPORTED FILTER')
    }
};

const mapStateToProps = (state) => {
    return {
        todos : selectVisibleTodos(state.todos, state.filter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            console.log(id);
            dispatch(toggleTodo(id))
        },
        onRemoveTodo : (id) => {
            console.log(id);
            dispatch(removeTodo(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
