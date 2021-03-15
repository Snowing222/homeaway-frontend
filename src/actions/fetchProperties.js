export function createProperty(propertyObj, history){

return dispatch => {
    dispatch({ type: 'CREATING_PROPERTY' })

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({property: propertyObj})}

         

        return fetch(`${API_ROOT}/api/v1/properties`, configObj)
        .then(resp=>resp.json())
        .then(data => {
           if(data.errors){
               alert(data.errors)
           }else{
               dispatch({type: "ADD_PROPERTY", payload: {...data, listings:[]}})
               let url = `/myprofile/properties/${data.id}`
               history.push(url)
           }
        })

    }
}




export function deleteProperty(propertyId, history){


    return dispatch => {
        return fetch(`${API_ROOT}/api/v1/properties/${propertyId}`, { method: 'DELETE' })
        .then(resp=>resp.json())
        .then(data=>{
            if(data.errors){
                alert(data.errors)
            }else{
                let payload = {property_id: data.id}
                dispatch({type:'DELETE_PROPERTY', payload: payload})
                history.push("/myprofile/properties")
            }
        })
     

    }
}
