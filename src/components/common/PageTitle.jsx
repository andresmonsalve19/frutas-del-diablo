import { Container, Typography } from "@mui/material";

export const PageTitle = ({ title, variant }) => {
    return (
        <Container maxWidth="100%">
            <Typography
                variant={variant}
                textAlign="center"
                sx={{
                    fontWeight: "bold",
                    mt: 4,
                    fontSize: { xs: "1.5em", sm: "2em", md: "3em" },
                }}
            >
                {title}
            </Typography>
        </Container>
    );
};
