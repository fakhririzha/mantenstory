import React, { useRef, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { useFormik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import { baseUrl } from '@config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import * as Yup from 'yup';

import DropFile from '@astro_plugins/DropFile';
import { Typography } from 'node_modules/@mui/material/index';

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

    const AboutSchema = {
        description: Yup.string().required('Description is required'),
        filename: Yup.string().required('Image cannot be empty'),
        image_base64: Yup.string().required('Image cannot be empty'),
    };

    const initialValue = {
        description: '',
        filename: '',
        image_base64: '',
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object().shape(AboutSchema),
        onSubmit: async (values, { resetForm }) => {
            const formData = { ...values };
            dayjs.extend(utc);
            dayjs.extend(timezone);
            dayjs.tz.setDefault('Asia/Jakarta');
            const data = {
                description: formData.description,
                image_base64: formData.image_base64,
            };
            setLoading(true);
            await fetch('/api/astro/about/update', {
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
                .catch((err) => {
                    console.log(err);
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

    const [descriptionInitialValue, setDescriptionInitialValue] = React.useState('');
    const [descriptionValue, setDescriptionValue] = React.useState('');
    const handleDescriptionChange = (value) => {
        setDescriptionValue(value);
    };

    React.useEffect(() => {
        // if (router.query.id !== undefined) {
        // fetch(`/api/astro/about/getSingleAbout/${router.query.id}`)
        fetch('/api/astro/about/getSingleAbout')
            .then((data) => data.json())
            .then((results) => {
                formik.setFieldValue('description', results.data[0].description);
                formik.setFieldValue('image_base64', results.data[0].image_base64);
                setDescriptionInitialValue(results.data[0].description);
                console.log(results);
            })
            .catch((err) => console.error('Error: ', err));
        // }
    }, []);

    useEffect(() => {
        setDescriptionValue(descriptionInitialValue ?? '');
    }, [descriptionInitialValue]);

    useEffect(() => {
        formik.setFieldValue('description', descriptionValue);
    }, [descriptionValue]);

    const editorRef = useRef(null);

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
                        <Typography>Description</Typography>
                        <Editor
                            tinymceScriptSrc={`${baseUrl}/tinymce/tinymce.min.js`}
                            onInit={(evt, editor) => {
                                editorRef.current = editor;
                            }}
                            initialValue={descriptionInitialValue}
                            value={descriptionValue}
                            onEditorChange={handleDescriptionChange}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: ['lists'],
                                // eslint-disable-next-line max-len
                                toolbar:
                                    'undo redo | formatselect | bold italic | alignleft aligncenter | alignright alignjustify | bullist numlist ',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            }}
                        />
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
                            Failed to update about us! Check if there is an empty field.
                        </Alert>
                    </Snackbar>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Create;
