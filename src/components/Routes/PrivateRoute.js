import { Redirect, Route } from "react-router-dom";
import userService from "../../services/userService";

export default function PrivateRoute({ children, ...rest }) {
  const isLogged = userService.isLogged();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

