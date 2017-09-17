import {ADD_ITEM, REMOVE_ITEM, SELECTED_ITEM} from "./actionTypes";

let itemID = 0;

export const addItem = (text) => ({
    type: ADD_ITEM,
    text: text,
    id: itemID++,
    selected: false
});

export const selectedItem = (id) => ({
    type: SELECTED_ITEM,
    id: id
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id: id
});