import ActionDto from "../../models/ActionDto"
import { LOGIN } from '../actions/ActionType';

const initialState= {
    
    isLoggedIn: false
}

const AuthReducer= (state= initialState, action: ActionDto)=> {
    switch(action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggedIn: true
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;