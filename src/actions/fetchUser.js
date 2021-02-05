export function createUser(userObj){
  
    return dispatch => {
       
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({user: userObj})}
    
        return fetch('http://localhost:3001/api/v1/users', configObj)
        .then(resp => resp.json())
        .then( data => {
            if(data.errors){
                alert(data.errors) 
             }else{
                 localStorage.setItem("token", data.jwt)
                 dispatch({type:"LOG_IN_USER", payload: data.user})
                 
             }
        })
           
        
    }
   
}

export function loginUser(userObj){
  
    return dispatch => {
       
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({user: userObj})}
          
    
        return fetch('http://localhost:3001/api/v1/login', configObj)
        .then(resp => resp.json())
        .then( data => { 
            if(data.errors){
                alert(data.errors) 
             }else{
                 localStorage.setItem("token", data.jwt)
                 dispatch({type:"LOG_IN_USER", payload: data.user})
             }
        })
           
        
    }
   
}