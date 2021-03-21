import {Route, Redirect} from 'react-router-dom'

// function PrivateRoute({ component: Component, user, ...rest }) {

//     return (
//       <Route
//         {...rest}
//         render={props =>
//           user.login ? (
//             <Component {...props} user = {user} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }


  function PrivateRoute({ component: Component, login, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          login ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute
