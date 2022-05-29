import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import TextField from '@commons/Forms/TextField';
import Textarea from '@commons/Forms/Textarea';

const Create = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const router = useRouter();

    const ReviewSchema = {
        caption: Yup.string().required('Review Caption is required.'),
        customer_name: Yup.string().required('Customer Name is required'),
    };

    const initialValue = {
        caption: '',
        customer_name: '',
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object().shape(ReviewSchema),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            await fetch('/api/astro/reviews/create', {
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
                    router.push('/');
                })
                .catch(() => {
                    setSuccess(false);
                    setLoading(false);
                });
        },
    });

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
                            name="customer_name"
                            value={formik.values.customer_name || ''}
                            onChange={(e) => {
                                formik.setFieldValue('customer_name', e.target.value);
                            }}
                            error={!!(formik.touched.customer_name && formik.errors.customer_name)}
                            errorMessage={(formik.touched.customer_name && formik.errors.customer_name) || null}
                        />
                        <Textarea
                            autoComplete="new-password"
                            label="Review"
                            name="caption"
                            value={formik.values.caption || ''}
                            onChange={(e) => {
                                formik.setFieldValue('caption', e.target.value);
                            }}
                            error={!!(formik.touched.caption && formik.errors.caption)}
                            errorMessage={(formik.touched.caption && formik.errors.caption) || null}
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
