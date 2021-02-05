export function fetchListings(query=""){
  
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/listings${query}`)
        .then(resp => resp.json())
        .then( data => {console.log(data)
            dispatch ({type: "SET_LISTINGS", payload: data})
        })
           
        
    }
   
}
