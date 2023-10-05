import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { HomeLayout } from "./common/HomeLayout";
import { HomeLayoutInit } from "./common/HomeLayoutInit";
import { HomeInit } from "./pages/HomeInit";
import { FruitPage } from "./pages/FruitPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayoutInit />}>
                <Route path="/" element={<HomeInit />} />
                <Route path="/fruit" element={<FruitPage />} />
            </Route>
            <Route path="/home" element={<HomeLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/home/fruit" element={<FruitPage />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};
