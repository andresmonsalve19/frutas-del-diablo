import React from "react";
import ReactDOM from "react-dom/client";
import { DevilFruits } from "./DevilFruits.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { themeOptions } from "./config/theme.js";

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <DevilFruits />
        </ThemeProvider>
    </React.StrictMode>
);
