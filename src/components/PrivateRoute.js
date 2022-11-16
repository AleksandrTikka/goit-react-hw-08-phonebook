import { Navigate } from 'react-router-dom';
// import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  // return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
// export default function PrivateRoute({ children, ...routeProps }) {
//   const { isLoggedIn } = useAuth();
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to="/login"></Redirect>}
//     </Route>
//   );
// }
