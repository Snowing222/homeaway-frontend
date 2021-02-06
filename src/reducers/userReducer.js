import { StaticRouter } from "react-router-dom"

export default function userReducer(state={user:{}, login:false}, action) {
    console.log(action)
    switch(action.type){
        case 'LOG_IN_USER':
            return {...state, user: action.payload, login: true}
        case 'LOGOUT_USER':
            return {...state, user:{}, login: false}
        default:
            return state
    }
    
}
