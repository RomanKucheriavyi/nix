import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getName } from "../store/userSlice";

export default function AuthRoute() {
    const name = useSelector(getName);
    return(
        name ? <Outlet/> : <Navigate to="/login"/>
    )
};
