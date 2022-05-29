import React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import DropFile from '@astro_plugins/DropFile';

const Create = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [openFailed, setOpenFailed] = React.useState(false);
    const position = {
        vertical: 'bottom',
        horizontal: 'center',
    };

    const { vertical, horizontal } = position;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenFailed(false);
    };

    const router = useRouter();

    const HeaderSchema = {
        image_base64: Yup.string().required('Image cannot be empty'),
    };

    const initialValue = {
        image_base64: '',
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object().shape(HeaderSchema),
        onSubmit: async (values, { resetForm }) => {
            const formData = { ...values };
            const data = {
                image_base64: formData.image_base64,
            };
            setLoading(true);
            await fetch('/api/astro/header/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(() => {
                    setTimeout(() => {
                        setSuccess(true);
                        setOpen(true);
                    }, 1500);
                    setLoading(false);
                    resetForm();
                    setTimeout(() => {
                        router.push('/astro/blog');
                    }, 1500);
                })
                .catch(() => {
                    setTimeout(() => {
                        setOpenFailed(true);
                    }, 1500);
                    setSuccess(false);
                    setLoading(false);
                });
        },
    });

    const handleDropFile = (files) => {
        const fileName = files[0].file.name;
        const { baseCode } = files[0];
        formik.setFieldValue('filename', fileName);
        formik.setFieldValue('image_base64', baseCode);
    };

    React.useEffect(() => {
        if (router.query.id !== undefined) {
            fetch(`/api/astro/about/getSingleHeader/${router.query.id}`)
                .then((data) => data.json())
                .then((results) => {
                    formik.setFieldValue('image_base64', results.data[0].image_base64);
                })
                .catch((err) => console.error('Error: ', err));
        }
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <form onSubmit={formik.handleSubmit} autoComplete="new-password">
                        <DropFile
                            title="Product Image (MAX 500kb)"
                            acceptedFile=".jpg,.jpeg,.png"
                            multiple={false}
                            error={(formik.errors.filename && formik.touched.filename) || (formik.errors.image_base64 && formik.touched.image_base64)}
                            getBase64={handleDropFile}
                        />
                        <Button type="submit" fullWidth disabled={loading} variant="contained">
                            {success ? 'Submitted!' : 'Submit'}
                        </Button>
                    </form>
                    <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3500} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Success saving data!
                        </Alert>
                    </Snackbar>
                    <Snackbar anchorOrigin={{ vertical, horizontal }} open={openFailed} autoHideDuration={3500} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Failed to update header image! Check if there is an empty field.
                        </Alert>
                    </Snackbar>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Create;
