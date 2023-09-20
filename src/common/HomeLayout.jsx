import { NavBar } from "../common/Navbar";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};
