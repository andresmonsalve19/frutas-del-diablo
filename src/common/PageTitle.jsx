import { Container, Typography } from "@mui/material";

export const PageTitle = ({ title, variant }) => {
    return (
        <Container maxWidth="100%">
            <Typography
                variant={variant}
                textAlign="center"
                sx={{ fontWeight: "bold", mt: 4 }}
            >
                {title}
            </Typography>
        </Container>
    );
};
