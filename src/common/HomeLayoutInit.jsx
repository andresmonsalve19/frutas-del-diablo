import { Outlet } from "react-router-dom";
import { NavBarInit } from "./NavBarInit";

export const HomeLayoutInit = () => {
    return (
        <>
            <NavBarInit />
            <Outlet />
        </>
    );
};
