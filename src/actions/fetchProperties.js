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

         

        return fetch('http://localhost:3001/api/v1/properties', configObj)
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
