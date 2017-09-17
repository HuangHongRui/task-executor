import {ADD_ITEM, REMOVE_ITEM, SELECTED_ITEM} from "./actionTypes";

export default (state = [],action) => {
    switch (action.type) {
        case ADD_ITEM : {
            return [{
                id: action.id,
                text: action.text,
                selected: false
            },
                ...state
            ]
        }

        case SELECTED_ITEM : {
            return state.map((item) => {

               if(item.id !== action.id){
                   return({...item , selected: false})
               }else{
                   return({...item , selected: true})
               }
            })
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