import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import { baseUrl } from '@config';
import * as Yup from 'yup';

import TextField from '@commons/Forms/TextField';

const Create = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const router = useRouter();

    const FaqSchema = {
        title: Yup.string().required('Title is required.'),
        description: Yup.string().required('Description is required'),
    };

    const initialValue = {
        title: '',
        description: '',
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object().shape(FaqSchema),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            await fetch('/api/astro/faq/create', {
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
                    router.push('/astro/faq');
                })
                .catch(() => {
                    setSuccess(false);
                    setLoading(false);
                });
        },
    });

    const [descriptionInitialValue] = React.useState('');
    const [descriptionValue, setDescriptionValue] = React.useState('');
    const handleDescriptionChange = (value) => {
        setDescriptionValue(value);
    };

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
                        {/* <TextField
                            autoComplete="new-password"
                            label="Description"
                            name="description"
                            value={formik.values.description || ''}
                            onChange="description"
                            error={!!(formik.touched.description && formik.errors.description)}
                            errorMessage={(formik.touched.description && formik.errors.description) || null}
                            tinyMce
                            formik={formik}
                        /> */}
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
