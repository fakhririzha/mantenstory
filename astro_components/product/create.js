import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import { baseUrl } from '@config';
import * as Yup from 'yup';

import DropFile from '@astro_plugins/DropFile';
import { Typography } from 'node_modules/@mui/material/index';
import TextField from '../../commons/Forms/TextField';

const Create = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const router = useRouter();

    const FaqSchema = {
        title: Yup.string().required('Title is required.'),
        short_description: Yup.string().required('Short Description is required'),
        description: Yup.string().required('Description is required'),
        filename: Yup.string().required('Image cannot be empty'),
        image_base64: Yup.string().required('Image cannot be empty'),
    };

    const initialValue = {
        title: '',
        short_description: '',
        description: '',
        filename: '',
        image_base64: '',
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object().shape(FaqSchema),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            await fetch('/api/astro/product/create', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((data) => data.json())
                .then(() => {
                    setSuccess(true);
                    setLoading(false);
                    resetForm();
                    router.push('/astro/product');
                })
                .catch((err) => {
                    console.log(err);
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

    const [descriptionInitialValue] = React.useState('');
    const [descriptionValue, setDescriptionValue] = React.useState('');
    const handleDescriptionChange = (value) => {
        setDescriptionValue(value);
    };

    const [shortDescriptionInitialValue] = React.useState('');
    const [shortDescriptionValue, setShortDescriptionValue] = React.useState('');
    const handleShortDescriptionChange = (value) => {
        setShortDescriptionValue(value);
    };

    useEffect(() => {
        setDescriptionValue(descriptionInitialValue ?? '');
    }, [descriptionInitialValue]);

    useEffect(() => {
        setShortDescriptionValue(shortDescriptionInitialValue ?? '');
    }, [shortDescriptionInitialValue]);

    useEffect(() => {
        formik.setFieldValue('description', descriptionValue);
    }, [descriptionValue]);

    useEffect(() => {
        formik.setFieldValue('short_description', shortDescriptionValue);
    }, [shortDescriptionValue]);

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
                            label="Title"
                            name="title"
                            value={formik.values.title || ''}
                            onChange={(e) => {
                                formik.setFieldValue('title', e.target.value);
                            }}
                            error={!!(formik.touched.title && formik.errors.title)}
                            errorMessage={(formik.touched.title && formik.errors.title) || null}
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
                            label="Product Image (MAX 500kb)"
                            acceptedFile=".jpg,.jpeg,.png,.pdf,.gif"
                            multiple={false}
                            error={(formik.errors.filename && formik.touched.filename) || (formik.errors.image_base64 && formik.touched.image_base64)}
                            getBase64={handleDropFile}
                        />
                        <Button type="submit" fullWidth disabled={loading} variant="contained">
                            {success ? 'Submitted!' : 'Submit'}
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Create;