import {Route, Redirect} from 'react-router-dom'

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
