export default function listingReducer(state=[], action) {
   
    switch(action.type){
       
        case 'SET_LISTINGS':
            return action.payload
        case 'ADD_LISTING':
            console.log([...state, action.payload])
            return [...state, action.payload]
        default:
            return state
    }

 
}
