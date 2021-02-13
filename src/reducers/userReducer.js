import produce from "immer"

export default function userReducer(state={user:{}, requesting: false, login:false}, action) {
    console.log(action)
    switch(action.type){
        case 'LOG_IN_USER':
            return {...state, user: action.payload, login: true}
        case 'LOGOUT_USER':
            return {...state, user:{}, login: false}
        case 'ADD_PROPERTY':
            return produce(state, draftState => {
                draftState.user.properties.push(action.payload)
                draftState.requesting = false
            })
        case 'CREATING_PROPERTY':
            return produce(state, draftState => {
                draftState.requesting = true
            })
        case 'UPDATE_PROPERTY_LISTING':
              return produce(state, draftState => {
                const index = draftState.user.properties.findIndex(p=> p.id === action.payload.property_id)
                if (index !== -1) draftState.user.properties[index].listings.push(action.payload)
                draftState.requesting = false
            })
        default:
            return state
    }
    
}
