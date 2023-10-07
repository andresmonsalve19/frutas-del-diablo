import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { HomeLayout } from "./common/HomeLayout";
import { HomeLayoutInit } from "./common/HomeLayoutInit";
import { HomeInit } from "./pages/HomeInit";
import { RegisterFruit } from "./pages/RegisterFruit";
import { NavBarInit } from "./common/NavBarInit";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayoutInit />}>
                <Route path="/" element={<HomeInit />} />
            </Route>
            <Route path="/home" element={<HomeLayout />}>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/registerfruit" element={<RegisterFruit />} />
            
            <Route path="/navbarinit" element={<NavBarInit/>} />
        </Routes>
    );
};
