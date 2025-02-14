import { useLocation, Navigate } from "react-router-dom";
import { useAuth  } from "../hooks/useAuth";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {user} = useAuth();

  if (!user) {
    console.log('я не ауф');
    return <Navigate to="/login" state={{from: location }}/>;
  }

  return children
};

export default RequireAuth;
