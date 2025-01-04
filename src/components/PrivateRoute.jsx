export const PrivateRoute = ({ component, redirectPath }) => {
    isLoggedIn = true;
    return isLoggedIn ? component : <Navigate to={redirectPath}/>
};