import {ADD_ITEM, REMOVE_ITEM} from "./actionTypes";

export default (state = [],action) => {
    switch (action.type) {
        case ADD_ITEM : {
            return [{
                id: action.id,
                text: action.text
            },
                ...state
            ]
        }
        case REMOVE_ITEM: {
            return state.filter((menuItem)=>{
                return menuItem.id !== action.id
            })
        }
        default :{
            return state;
        }
    }
}