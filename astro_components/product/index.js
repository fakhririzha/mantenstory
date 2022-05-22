/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
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
    const [faqData, setFaqData] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const router = useRouter();

    React.useEffect(() => {
        fetch('/api/astro/product')
            .then((data) => data.json())
            .then((results) => {
                setFaqData(results);
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

    const handleClick = (id, title) => {
        setOpen(true);
        setDeleteId({ id, title });
    };

    const handleDelete = async () => {
        await fetch('/api/astro/product/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: deleteId.id }),
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
            <Grid item xs={12}>
                <Link href="/astro/product/create" passHref>
                    <Button variant="contained" color="secondary">
                        Add New Products
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={12}>
                {faqData && faqData.data && (
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
                                        <TableCell>Title</TableCell>
                                        <TableCell>Short Description</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell colSpan={2}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {faqData.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.title}</TableCell>
                                            <TableCell>
                                                <div dangerouslySetInnerHTML={{ __html: row.short_description }} />
                                            </TableCell>
                                            <TableCell>
                                                <div dangerouslySetInnerHTML={{ __html: row.description }} />
                                            </TableCell>
                                            <TableCell>
                                                <img style={{ maxWidth: '450px', height: 'auto' }} src={row.image_base64} alt={row.title} />
                                            </TableCell>
                                            <TableCell>
                                                <Link href={`/astro/product/update/${row.id}`} passHref>
                                                    <Button variant="contained" color="success">
                                                        Edit
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    onClick={() => {
                                                        handleClick(row.id, row.title);
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
                                                            Are you sure you want to delete Product item with the name of {deleteId.title}?
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
                            count={faqData && faqData.data && faqData.data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                )}
            </Grid>
        </Grid>
    );
};

export default Content;
