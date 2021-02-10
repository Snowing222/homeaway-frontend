export function createProperty(propertyObj){

return dispatch => {

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
               console.log(data)
               dispatch({type: "ADD_PROPERTY", payload: data})
           }
        })

    }
}
