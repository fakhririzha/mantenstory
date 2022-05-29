/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Link from 'next/link';

const Content = () => {
    const [aboutData, setAboutData] = React.useState({});

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openFailed, setOpenFailed] = React.useState(false);
    const position = {
        vertical: 'bottom',
        horizontal: 'center',
    };

    const { vertical, horizontal } = position;

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
        setOpenFailed(false);
    };

    React.useEffect(() => {
        fetch('/api/astro/about')
            .then((data) => data.json())
            .then((results) => {
                setAboutData(results);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                {aboutData && aboutData.data && (
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <TableContainer>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell colSpan={2}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {aboutData.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>
                                                <div dangerouslySetInnerHTML={{ __html: row.description.substr(0, 100) }} />
                                            </TableCell>
                                            <TableCell>
                                                <img src={row.image_base64} alt={row.title} style={{ maxHeight: '128px', width: 'auto' }} />
                                            </TableCell>
                                            <TableCell>
                                                {/* <Link href={`/astro/about/update/${row.id}`} passHref> */}
                                                <Link href="/astro/about/update/" passHref>
                                                    <Button variant="contained" color="success">
                                                        Edit
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={aboutData && aboutData.data && aboutData.data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                )}
            </Grid>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={openSuccess} autoHideDuration={3500} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Success delete blogpost!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={openFailed} autoHideDuration={3500} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    Failed to delete blog post!
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default Content;
