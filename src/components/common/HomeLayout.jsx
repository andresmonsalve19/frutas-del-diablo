import { NavBar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { NavBarInit } from "./NavBarInit";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const HomeLayout = () => {
    const { isAuth } = useContext(DataContext);

    return (
        <>
            {isAuth ? <NavBar /> : <NavBarInit />}
            <Outlet />
        </>
    );
};
