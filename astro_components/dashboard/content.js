import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Content = () => (
    <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                Silahkan klik menu sebelah kiri untuk akses menu administrator
            </Paper>
        </Grid>
    </Grid>
);

export default Content;
