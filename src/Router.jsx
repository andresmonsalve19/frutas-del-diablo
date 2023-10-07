import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { HomeLayout } from "./common/HomeLayout";
import { FruitHistory } from "./pages/FruitHistory";
import { FruitPage } from "./pages/FruitPage";
import { MyFruits } from "./pages/MyFruits";
import { Profile } from "./pages/Profile";
import { FavoriteFruits } from "./pages/FavoriteFruits";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="fruta" element={<FruitPage />} />
                <Route path="historial" element={<FruitHistory />} />
                <Route path="mis-frutas" element={<MyFruits />} />
                <Route path="mi-perfil" element={<Profile />} />
                <Route path="favoritas" element={<FavoriteFruits />} />
            </Route>
            <Route path="/iniciar-sesion" element={<SignIn />} />
            <Route path="/registro" element={<SignUp />} />
        </Routes>
    );
};
