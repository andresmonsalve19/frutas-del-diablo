import {
    Avatar,
    Grid,
    Typography,
} from "@mui/material";

export const HistoryItem = (props) => {
    const { historyInfo } = props;
    const { comment, date, historyType, userIconSrc, userName } = historyInfo;

    return (
            <Grid
                container
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                sx={{ mt: 2, mb: 2, minWidth: 300, width: "100%" }}
            >
                <Grid item xs={6} sm={3} md={2} lg={2} display="flex" justifyContent="center">
                    <Avatar
                        alt={userName}
                        src={userIconSrc}
                        sx={{ width: 100, height: 100 }}
                    />
                </Grid>
                <Grid item container xs={6} sm={9} md={10} lg={10} flexDirection="column" spacing={2}>
                    <Grid item>
                        <Typography variant="subtitle1">
                            {historyType}
                        </Typography>
                        <Typography variant="body2">{date}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{comment}</Typography>
                    </Grid>
                </Grid>
            </Grid>
    );
};
