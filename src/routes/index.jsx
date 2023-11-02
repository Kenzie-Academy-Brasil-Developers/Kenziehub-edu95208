import { Route, Routes } from "react-router-dom";
import { Error } from "../pages/ErroPages/Index";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoutes } from "./PrivateRoutes";


export const RoutesMain = () => {

    return <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<PrivateRoutes/>}>
            <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/*" element={<Error />} />
    </Routes>
};