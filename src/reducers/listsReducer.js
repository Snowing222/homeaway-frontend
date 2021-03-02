export default function listingReducer(state=[], action) {
   
    switch(action.type){
       
        case 'SET_LISTINGS':
            return action.payload
        case 'ADD_LISTING':
            return [...state, action.payload]
        case 'DELETE_LISTING':
            return state.filter(listing => listing.id !== action.payload.listing_id)
        case 'DELETE_PROPERTY':
            console.log(action)
            return state.filter(listing => listing.property_id !== action.payload.property_id)
        default:
            return state
    }

 
}
