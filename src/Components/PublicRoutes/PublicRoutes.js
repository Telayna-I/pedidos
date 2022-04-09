import { useAuth } from "../../Context/AuthContext"
import { Outlet } from "react-router-dom"

const PublicRoutes = () => {
    
    const { loged } = useAuth();

    return !loged && <Outlet/>

}

export default PublicRoutes