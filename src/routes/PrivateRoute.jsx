import { useContext } from "react";
import { AuthContext } from "../assets/Components/Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

  const   {user,loading} =useContext(AuthContext)

  if(loading){
return  <div><span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span></div>
  }
  if(user){
    return children
  }

    return (
    <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;