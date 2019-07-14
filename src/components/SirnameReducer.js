import {ADD_SIRNAME} from './SirnameAction'
import { combineReducers } from "redux";

const sirname = (state = [], action) => {
    console.log("reducer ", state, action)
    switch (action.type) {
        case ADD_SIRNAME:
            return action.name
        default:
            return state
    }
}


export default combineReducers({
    sirname
})

