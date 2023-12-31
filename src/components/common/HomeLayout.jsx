import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import { NavBarInit } from "./NavBarInit";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Box } from "@mui/material";

export const HomeLayout = () => {
    const { isAuth } = useContext(DataContext);

    return (
        <Box sx={{ minWidth: "300px" }}>
            {isAuth == "true" ? <NavBar /> : <NavBarInit />}
            <Outlet />
        </Box>
    );
};
