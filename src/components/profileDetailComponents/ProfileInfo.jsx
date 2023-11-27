import { Grid, Typography } from "@mui/material";

export const ProfileInfo = ({ user }) => {

    return (
        <Grid item xs={12} sx={{mt: 4}}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
                {user.first_name + " " + user.last_name}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
                @{user.username}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 4 }}>
                {user.description}
            </Typography>
        </Grid>
    );
};
