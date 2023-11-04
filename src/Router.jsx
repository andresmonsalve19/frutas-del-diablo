import { Route, Routes } from "react-router-dom";
import {
    FavoriteFruits,
    FruitHistory,
    FruitPage,
    Home,
    MyFruits,
    Profile,
    RegisterFruit,
    SignIn,
    SignUp,
} from "./pages";
import { HomeLayout } from "./common/HomeLayout";
import DataProvider from "./context/DataContext";

export const Router = () => {
    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="fruta" element={<FruitPage />} />
                    <Route path="historial" element={<FruitHistory />} />
                    <Route path="mis-frutas" element={<MyFruits />} />
                    <Route path="mi-perfil" element={<Profile />} />
                    <Route path="favoritas" element={<FavoriteFruits />} />
                    <Route path="registrar-fruta" element={<RegisterFruit />} />
                </Route>
                <Route path="/iniciar-sesion" element={<SignIn />} />
                <Route path="/registro" element={<SignUp />} />
            </Routes>
        </DataProvider>
    );
};
