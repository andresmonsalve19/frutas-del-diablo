import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { HomeLayout } from "./common/HomeLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};
