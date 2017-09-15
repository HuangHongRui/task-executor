import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "./actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO :{
            return [{
                id : action.id,
                text: action.text,
                select: false
            },
                ...state
        ]
    }
        case TOGGLE_TODO :{
            return state.map((todoItem) => {
                if(todoItem.id === action.id){
                    return {...todoItem, selected:!todoItem.selected }
                }else{
                    return todoItem
                }
            })
        }
        case REMOVE_TODO : {
            return state.filter((todoItem) => {
                return  todoItem.id !== target.id
            })
        }
        default :{
            return state;
        }
    }
}