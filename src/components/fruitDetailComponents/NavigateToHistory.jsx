import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigateToHistory = () => {
    return (
        <Grid item >
            <Link to="/historial">
                <Typography letiant="overline" sx={{ color: "#C0CAC4" }}>
                    Ver historial de versiones
                </Typography>
            </Link>
        </Grid>
    );
};
