import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img
                    src='https://images.unsplash.com/photo-1533094602577-198d3beab8ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    alt='falls'
                    className='img'
                />
                <Box padding={1}>
                    <Typography variant='subtitle1' component='h2'>
                        Immerse into the Falls
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default TourCard;
