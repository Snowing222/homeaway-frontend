export function fetchListings(query=""){
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/listings${query}`)
        .then(resp => resp.json())
        .then( data => {console.log(typeof(data))
            dispatch ({type: "SET_LISTINGS", payload: data})
        })
           
        
    } 
} 

export function createListing(listingObj, history){
    return dispatch =>{
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({listing: listingObj})}

        return fetch('http://localhost:3001/api/v1/listings', configObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.errors){
                alert(data.errors)
            }else{
                dispatch({type:"ADD_LISTING", payload: data})
                      let {user, property, ...rest} = data
                      dispatch({type:"UPDATE_PROPERTY_LISTING", payload: rest})
                let url = `/myprofile/properties/${property.id}/listings/${rest.id}`
                history.push(url)
            }
         })
    }
}


