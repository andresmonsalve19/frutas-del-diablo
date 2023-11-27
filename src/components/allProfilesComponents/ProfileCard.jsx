import { motion } from "framer-motion";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { BsBox2, BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProfileResume } from "../profileDetailComponents/ProfileResume";

export const ProfileCard = ({ user }) => {

    return (
        <Card
            className="fruit_card"
            sx={{
                width: {
                    xs: 280,
                },
                borderRadius: 2,
            }}
        >
            <CardMedia
                className="fruit_card"
                sx={{
                    height: {
                        xs: 200,
                    },
                }}
                image={user.userinstance.photo_url}
                title="Fruit"
            />
            <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {user.first_name + " " + user.last_name}
                </Typography>
                <Typography
                    variant="body2"
                >
                    {user.username}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ mt: 3 }}
                >
                    {user.userinstance.description}
                </Typography>
                <Grid
                    container
                    flexDirection="row"
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                    sx={{ height: 40, mt: 2 }}
                    id="card_creator_container"
                >
                    <Grid item>
                        <motion.h1 whileHover={{ scale: 0.9 }}>
                            <Link
                                key={user.id}
                                to={`/profile?username=${user.username}&email=${user.email}&first_name=${user.first_name}&last_name=${user.last_name}&description=${user.userinstance.description}&photo_url=${user.userinstance.photo_url}&id=${user.pk}`}
                                title="Ver más información"
                            >

                                <BsChevronCompactDown
                                    style={{
                                        fontSize: 22,
                                        color: "white",
                                        marginRight: 8,
                                    }}
                                />
                            </Link>
                        </motion.h1>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
