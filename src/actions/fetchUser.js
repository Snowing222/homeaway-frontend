export const createUser = (userObj) => {
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({user: userObj})}
        
    fetch('http://localhost:3001/api/v1/users', configObj)
    .then(resp => resp.json())
    .then(console.log)
}