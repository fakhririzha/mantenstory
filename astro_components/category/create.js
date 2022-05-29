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
import * as Yup from 'yup';

import DropFile from '@astro_plugins/DropFile';
import { Typography } from 'node_modules/@mui/material/index';
import TextField from '@commons/Forms/TextField';

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

    const CategorySchema = {
        name: Yup.string().required('Name is required.'),
        short_description: Yup.string().required('Short Description is required'),
        detail_description: Yup.string().required('Detail Description is required'),
        filename: Yup.string().required('Image cannot be empty'),
        image_base64: Yup.string().required('Image cannot be empty'),
    };

    const initialValue = {
        name: '',
        short_description: '',
        detail_description: '',
        filename: '',
        image_base64: '',
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object().shape(CategorySchema),
        onSubmit: async (values, { resetForm }) => {
            const formData = { ...values };
            const data = {
                name: formData.name,
                short_description: formData.short_description,
                detail_description: formData.detail_description,
                image_base64: formData.image_base64,
            };
            setLoading(true);
            await fetch('/api/astro/category/create', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(() => {
                    setSuccess(true);
                    setOpen(true);
                    setLoading(false);
                    resetForm();
                    setTimeout(() => {
                        router.push('/astro/category');
                    }, 2000);
                })
                .catch(() => {
                    setOpenFailed(true);
                    setSuccess(false);
                    setLoading(false);
                    resetForm();
                });
        },
    });

    const handleDropFile = (files) => {
        const fileName = files[0].file.name;
        const { baseCode } = files[0];
        formik.setFieldValue('filename', fileName);
        formik.setFieldValue('image_base64', baseCode);
    };

    const [shortDescriptionInitialValue] = React.useState('');
    const [shortDescriptionValue, setShortDescriptionValue] = React.useState('');
    const handleShortDescriptionChange = (value) => {
        setShortDescriptionValue(value);
    };

    useEffect(() => {
        setShortDescriptionValue(shortDescriptionInitialValue ?? '');
    }, [shortDescriptionInitialValue]);

    useEffect(() => {
        formik.setFieldValue('short_description', shortDescriptionValue);
    }, [shortDescriptionValue]);

    const [detailDescriptionInitialValue] = React.useState('');
    const [detailDescriptionValue, setDetailDescriptionValue] = React.useState('');
    const handleDetailDescriptionChange = (value) => {
        setDetailDescriptionValue(value);
    };

    useEffect(() => {
        setDetailDescriptionValue(detailDescriptionInitialValue ?? '');
    }, [detailDescriptionInitialValue]);

    useEffect(() => {
        formik.setFieldValue('detail_description', detailDescriptionValue);
    }, [detailDescriptionValue]);

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
                        <TextField
                            autoComplete="new-password"
                            label="Name"
                            name="name"
                            value={formik.values.name || ''}
                            onChange={(e) => {
                                formik.setFieldValue('name', e.target.value);
                            }}
                            error={!!(formik.touched.name && formik.errors.name)}
                            errorMessage={(formik.touched.name && formik.errors.name) || null}
                        />
                        <Typography>Short Description</Typography>
                        <Editor
                            tinymceScriptSrc={`${baseUrl}/tinymce/tinymce.min.js`}
                            onInit={(evt, editor) => {
                                editorRef.current = editor;
                            }}
                            initialValue={shortDescriptionInitialValue}
                            value={shortDescriptionValue}
                            onEditorChange={handleShortDescriptionChange}
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
                        <Typography>Detail Description</Typography>
                        <Editor
                            tinymceScriptSrc={`${baseUrl}/tinymce/tinymce.min.js`}
                            onInit={(evt, editor) => {
                                editorRef.current = editor;
                            }}
                            initialValue={detailDescriptionInitialValue}
                            value={detailDescriptionValue}
                            onEditorChange={handleDetailDescriptionChange}
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
                            Success adding category!
                        </Alert>
                    </Snackbar>
                    <Snackbar anchorOrigin={{ vertical, horizontal }} open={openFailed} autoHideDuration={3500} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Failed to add category! Check if there is an empty field.
                        </Alert>
                    </Snackbar>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Create;
