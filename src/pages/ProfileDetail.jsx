import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { profiles } from "../Data/profiles";
import { ProfileResume } from "../components/profileDetailComponents/ProfileResume";
import { ProfileInfo } from "../components/profileDetailComponents/ProfileInfo";
import { createdFruits } from "../Data";
import { Box, Typography } from "@mui/material";
import { FruitCardCreator, SearchBar } from "../components";
import { useArrayFilter } from "../hooks";
import { DataContext } from "../context/DataContext";
import { useEffect, useState } from 'react'

export const ProfileDetail = () => {

    let [fruitsCreatedByUser, setFruitsCreatedByUser] = useState([])
    const { arrayFiltered, setTextFilter } = useArrayFilter(fruitsCreatedByUser, "name")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let username = urlParams.get('username')
    let email = urlParams.get('email')
    let first_name = urlParams.get('first_name')
    let last_name = urlParams.get('last_name')
    let photo_url = urlParams.get('photo_url')
    let description = urlParams.get('description')
    let id = urlParams.get('user_id')
    const [profileScore, setProfileScore] = useState(0)

    let currentUser = { "username": username, "email": email, "first_name": first_name, "last_name": last_name, "photo_url": photo_url, "description": description, "id": id }

    useEffect(() => {
        let body = { "user_id": id }
        const requestOptions = { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
        fetch(`http://localhost:8000/api/fruits/created_by/`, requestOptions)
            .then(res => res.json())
            .then(res => setFruitsCreatedByUser(res))

        const requestOptions2 = { method: 'POST', headers: { 'Authorization': `Bearer ${localStorage.getItem("access_token")}`, 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
        fetch(`http://localhost:8000/api/fruits/account_score_of/`, requestOptions2)
            .then(res => res.json())
            .then(res => setProfileScore(res))

    }, [])

    useEffect(() => {
        let body = { "user_id": id }

    }, [])

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
                            src={photo_url}
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "100%",
                                textAlign: "center",
                                marginTop: "32px",
                            }}
                        />
                        <ProfileResume
                            numberOfCreatedFruits={fruitsCreatedByUser.length}
                            numberOfLikes={profileScore["score"]}
                        />
                        <ProfileInfo user={currentUser} />
                    </Grid>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: "bold",
                            mt: 4,
                            mb: 4,
                            fontSize: { xs: "1em", sm: "1.5em", md: "2em" },
                        }}
                    >
                        Frutas creadas por: {first_name}
                    </Typography>
                    <SearchBar filtering={setTextFilter} />
                    <FruitCardCreator data={arrayFiltered} />
                </Box>
            </Grid>
        </>
    );
};
