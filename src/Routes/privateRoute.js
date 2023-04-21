import { Navigate } from "react-router-dom";
import UserContext from "../contexts/userContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { client } = useContext(UserContext)

    console.log(client);
    return client.isLogged ? children : <Navigate to="/" />;
}

export default PrivateRoute;