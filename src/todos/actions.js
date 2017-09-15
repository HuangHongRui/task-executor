import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "./actionTypes";

todoID

export const addTodo = (id) => ({
    type: ADD_TODO,
    id : todoID++,
    selected: false,
    text: text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id,
});

export const RemoveTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});