import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { BsHeart, BsPlusCircle } from "react-icons/bs";

export const FruitCard = ({ name, image, description }) => {

    return (
        <>
            <motion.h1 whileHover={{ scale: 0.9 }}>
                <Card className="fruit_card" sx={{
                    width: {
                        xs: 150,
                        sm: 200,
                        md: 200,
                        lg: 220,
                        xl: 220,
                    }
                }}>
                    <CardMedia className="fruit_card" sx={{
                        height: {
                            xs: 150,
                            sm: 200,
                            md: 200,
                            lg: 220,
                            xl: 220,
                        }
                    }} image={image} title="Fruit" />
                    <CardContent>
                        <Typography style={{ fontSize: "20px" }}>
                            {name}
                        </Typography>
                        <Typography style={{ fontSize: "12px" }}>
                            {description}
                        </Typography>
                        <Grid container direction="row" justifyContent="center" id="card_creator_container">
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <Typography style={{ fontSize: "20px", marginTop: "20px" }}>
                                    <BsHeart />
                                </Typography>
                            </Grid>
                            <Grid item xl={0}>
                                <Typography style={{ fontSize: "20px", marginTop: "20px" }}>
                                    <BsPlusCircle />
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </motion.h1>
        </>
    )

};