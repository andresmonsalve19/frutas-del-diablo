import React from "react";
import ReactDOM from "react-dom/client";
import { themeOptions } from "./config/theme.js";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FavoriteFruitsProvider } from "./context/FavoriteFruitsContext.jsx";
import DataProvider from "./context/DataContext";

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <DataProvider>
                <FavoriteFruitsProvider>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </FavoriteFruitsProvider>
            </DataProvider>
        </ThemeProvider>
    </React.StrictMode>
);
