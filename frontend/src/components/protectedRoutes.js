import { Navigate } from "react-router-dom";
const ProtectedRoute = ({element})=>{
    const auth = false;
    return auth ? element : <Navigate to='/login'/>
}
export default ProtectedRoute;