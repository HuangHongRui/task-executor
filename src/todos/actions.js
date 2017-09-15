import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "./actionTypes";

let todoID = 0;
export const addTodo = (text,timer) => ({
    type: ADD_TODO,
    id : todoID++,
    text: text,
    selected: false,
    timer: timer
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});