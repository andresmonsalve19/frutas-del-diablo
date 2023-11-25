import { Navigate, Route, Routes } from "react-router-dom";
import {
    FavoriteFruits,
    FruitHistory,
    FruitDetail,
    Home,
    MyFruits,
    Profile,
    RegisterFruit,
    SignIn,
    SignUp,
    EditFruit,
} from "./pages";
import { HomeLayout } from "./components/common/HomeLayout";
import DataProvider from "./context/DataContext";

export const Router = () => {
    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="fruta" element={<FruitDetail />} />
                    <Route path="historial" element={<FruitHistory />} />
                    <Route path="mis-frutas" element={<MyFruits />} />
                    <Route path="mi-perfil" element={<Profile />} />
                    <Route path="favoritas" element={<FavoriteFruits />} />
                    <Route path="registrar-fruta" element={<RegisterFruit />} />
                    <Route path="editar-fruta/:fruitId" element={<EditFruit />} />
                </Route>
                <Route path="iniciar-sesion" element={<SignIn />} />
                <Route path="registro" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </DataProvider>
    );
};
