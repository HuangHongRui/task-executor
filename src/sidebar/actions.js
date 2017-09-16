import {ADD_ITEM, REMOVE_ITEM} from "./actionTypes";

let itemID = 0;

export const addItem = (text) => ({
    type: ADD_ITEM,
    text: text,
    id: itemID++
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id: id
});