import { Grid } from "@mui/material";
import { ProfileCard } from "./ProfileCard";

export const ProfilesCreator = ({profiles}) => {
    return (
        <Grid
                container
                flexDirection="row"
                justifyContent="center"
                alignContent="center"
                sx={{mb:8}}
            >
                {profiles.map((profile) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            key={profile.id}
                            sx={{
                                mt: 4,
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            <ProfileCard key={profile.id} user={profile} />
                        </Grid>
                    );
                })}
            </Grid>
    );
}; 
