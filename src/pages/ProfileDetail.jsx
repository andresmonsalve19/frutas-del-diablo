import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { profiles } from "../Data/profiles";
import { ProfileResume } from "../components/profileDetailComponents/ProfileResume";
import { ProfileInfo } from "../components/profileDetailComponents/ProfileInfo";
import { createdFruits } from "../Data";
import { Box, Typography } from "@mui/material";
import { FruitCardCreator, SearchBar } from "../components";
import { useArrayFilter } from "../hooks";

export const ProfileDetail = () => {
    const {arrayFiltered, setTextFilter} = useArrayFilter(createdFruits, "name")
    const { profileId } = useParams();

    const currentUser = profiles.find(
        (profile) => profile.id.toString() === profileId
    );

    return (
        <>
            <Grid
                container
                justifyContent="center"
                sx={{
                    background: "black",
                    color: "white",
                    p: 1,
                    minWidth: 300,
                }}
            >
                <Box
                    flexDirection="row"
                    justifyContent="center"
                    xs={12}
                    sm={10}
                    md={8}
                    lg={6}
                    sx={{
                        mt: 0,
                        pb: 4,
                        minWidth: 300,
                    }}
                >
                    <Grid
                        item
                        container
                        flexDirection="row"
                        justifyContent="center"
                    >
                        <img
                            src={currentUser.image}
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "100%",
                                textAlign: "center",
                                marginTop: "32px",
                            }}
                        />
                        <ProfileResume
                            numberOfCreatedFruits={5}
                            numberOfLikes={5}
                        />
                        <ProfileInfo user={currentUser} />
                    </Grid>
                </Box>
                <Box sx={{ width: "100%"}}>
                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: "bold",
                            mt: 4,
                            mb: 4,
                            fontSize: { xs: "1em", sm: "1.5em", md: "2em" },
                        }}
                    >
                        Frutas creadas por: {currentUser.name}
                    </Typography>
                    <SearchBar filtering={setTextFilter} />
                    <FruitCardCreator data={arrayFiltered} />
                </Box>
            </Grid>
        </>
    );
};
