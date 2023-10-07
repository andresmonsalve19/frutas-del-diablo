import { NavBar } from "../common/Navbar";
import { Outlet } from "react-router-dom";
import { NavBarInit } from "./NavBarInit";

export const HomeLayout = () => {
    let isAuth = false;

    return (
        <>
            {isAuth ? <NavBar /> : <NavBarInit />}
            <Outlet />
        </>
    );
};
