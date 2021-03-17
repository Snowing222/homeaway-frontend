
export function createUser(userObj, history) {
  return (dispatch) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    };

    return fetch("https://homeaway-backend.herokuapp.com/api/v1/users", configObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          alert(data.errors);
        } else {
          localStorage.setItem("token", data.jwt);
          dispatch({ type: "LOG_IN_USER", payload: data.user });
          history.push("/myprofile");
        }
      });
  };
}

export function loginUser(userObj, history) {
  return (dispatch) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    };

    return fetch("https://homeaway-backend.herokuapp.com/api/v1/login", configObj)
      .then((resp) => {console.log(resp)
      return resp.json()} )
      .then((data) => {
        if (data.errors) {
          alert(data.errors);
        } else {
        
          localStorage.setItem("token", data.jwt);
          dispatch({ type: "LOG_IN_USER", payload: data.user });
          history.push("/myprofile");
        }
      });
  };
}

export function fetchLoggedInUser() {
  return (dispatch) => {
    const token = localStorage.token;
    console.log(token)
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }


    if (token) {
      return fetch("https://homeaway-backend.herokuapp.com/api/v1/auto_login", configObj)
      .then((resp) => {console.log(resp)
        return resp.json()})
      .then((data) => {
          console.log(data);
          if (data.errors) {
            alert(data.errors);
            localStorage.removeItem("token");
          } else {
            dispatch({ type: "LOG_IN_USER", payload: data.user });
          }
        });
    }
  };
}
