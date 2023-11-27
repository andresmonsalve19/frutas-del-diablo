import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ProfileResume } from "../components/profileDetailComponents/ProfileResume";
import { ProfileInfo } from "../components/profileDetailComponents/ProfileInfo";
import { profiles } from "../Data/profiles";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from 'react'

export const Profile = () => {

    const { myProfile } = useContext(DataContext)
    const {myFruitsCreated} = useContext(DataContext)

    const [profileScore, setProfileScore] = useState(0)

    useEffect(() => {
        let body = {"user_id": localStorage.getItem("id")}
        const requestOptions = { method: 'POST', headers: { 'Authorization': `Bearer ${localStorage.getItem("access_token")}`, 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
        fetch(`http://localhost:8000/api/fruits/account_score_of/`, requestOptions)
            .then(res => res.json())
            .then(res => setProfileScore(res))
    }, [])

    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                sx={{
                    background: "black",
                    height: "100vh",
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
                            src={myProfile.userinstance.photo_url}
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "100%",
                                textAlign: "center",
                                marginTop: "32px",
                            }}
                        />
                        <ProfileResume
                            numberOfCreatedFruits={myFruitsCreated.length}
                            numberOfLikes={profileScore["score"]}
                        />
                        <ProfileInfo user={myProfile} />
                        <Button
                            variant="contained"
                            sx={{ mt: 8, width: "60%", height: 50 }}
                        >
                            <Link to="/mis-frutas">
                                <Typography sx={{ color: "white" }} variant="subtitle1">Ver mis frutas creadas</Typography>
                            </Link>
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    );
};
