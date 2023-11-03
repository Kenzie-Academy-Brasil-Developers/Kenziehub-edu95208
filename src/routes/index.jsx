import { Route, Routes } from "react-router-dom";
import { Error } from "../pages/ErroPages/Index";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoutes } from "./PrivateRoutes";
import { Userpage } from "../pages/UserPage";
import { PublicRoutes } from "./plublicRoutes";


export const RoutesMain = () => {

    return <Routes>

        <Route element={<PublicRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userpage" element={<Userpage />} />
        </Route>

        <Route path="/*" element={<Error />} />

    </Routes>
};