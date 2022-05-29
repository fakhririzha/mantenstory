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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Content = () => {
    const [reviewsData, setReviewsData] = React.useState({});

    const [open, setOpen] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState('');

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

    const router = useRouter();

    React.useEffect(() => {
        fetch('/api/astro/reviews')
            .then((data) => data.json())
            .then((results) => {
                setReviewsData(results);
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

    const handleClick = (ids) => {
        setOpen(true);
        setDeleteId(ids);
    };

    const handleDelete = async () => {
        await fetch('/api/astro/reviews/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: deleteId }),
        })
            .then((data) => data.json())
            .then(() => {
                setOpen(false);
                router.reload();
            })
            .catch(() => {
                console.log('Error');
            });
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                {reviewsData && reviewsData.data && (
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
                                        <TableCell>Caption</TableCell>
                                        <TableCell>Customer Name</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell colSpan={2}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {reviewsData.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.caption}</TableCell>
                                            <TableCell>{row.customer_name}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>
                                                {(row.status === 'pending' && (
                                                    <Link href={`/astro/reviews/update/${row.id}`} passHref>
                                                        {/* <Link href="/astro/about/update/" passHref> */}
                                                        <Button variant="contained" color="success">
                                                            Approve
                                                        </Button>
                                                    </Link>
                                                )) || (
                                                    <Link href={`/astro/reviews/update/${row.id}`} passHref>
                                                        {/* <Link href="/astro/about/update/" passHref> */}
                                                        <Button variant="contained" color="disabled">
                                                            Approve
                                                        </Button>
                                                    </Link>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    onClick={() => {
                                                        handleClick(row.id);
                                                    }}
                                                    variant="contained"
                                                    color="error"
                                                >
                                                    Delete
                                                </Button>
                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                >
                                                    <DialogTitle id="alert-dialog-title">Delete this item?</DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            Are you sure you want to delete reviews item with the id of {deleteId}?
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={handleClose} variant="contained" color="primary">
                                                            Cancel
                                                        </Button>
                                                        <Button onClick={handleDelete} variant="contained" color="error">
                                                            Agree
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={reviewsData && reviewsData.data && reviewsData.data.length}
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
                    Success delete reviews!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={openFailed} autoHideDuration={3500} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    Failed to delete reviews!
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default Content;
