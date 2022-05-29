/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { encrypt } from '@helpers/encryption';
import { setLogin } from '@helpers/auth';
import { expiredToken } from '@config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextField from '@commons/Forms/TextField';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <MuiLink color="inherit" href="https://mantenstory.co/">
                Mantenstory.co
            </MuiLink>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

const Login = (props) => {
    const { router } = props;

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

    const LoginSchema = {
        username: Yup.string().required('Username is required.'),
        password: Yup.string().required('Password is required'),
    };

    const initialValue = {
        username: '',
        password: '',
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object().shape(LoginSchema),
        onSubmit: async (values, { resetForm }) => {
            const formData = { ...values };
            dayjs.extend(utc);
            dayjs.extend(timezone);
            dayjs.tz.setDefault('Asia/Jakarta');
            const data = {
                username: formData.username,
                password: encrypt(formData.password),
                last_login: dayjs(new Date().getTime()).format('DD-MM-YYYY HH:mm:ss'),
            };
            await fetch('/api/astro/login/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(async () => {
                    await fetch('/api/astro/login/update', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                        .then((res) => res.json())
                        .then(() => {
                            setLogin(expiredToken, 1);
                            setOpen(true);
                            resetForm();
                            setTimeout(() => {
                                router.push('/astro');
                            }, 1500);
                        })
                        .catch(() => {
                            setOpenFailed(true);
                            resetForm();
                        });
                })
                .catch(() => {
                    setOpenFailed(true);
                    resetForm();
                });
        },
    });

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Success Login!
                    </Alert>
                </Snackbar>
                <Snackbar anchorOrigin={{ vertical, horizontal }} open={openFailed} autoHideDuration={3500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Failed to login. Wrong username or password!
                    </Alert>
                </Snackbar>
                <Box sx={{ mt: 1 }}>
                    <form onSubmit={formik.handleSubmit} autoComplete="new-password">
                        <TextField
                            autoComplete="new-password"
                            label="Username"
                            name="username"
                            value={formik.values.username || ''}
                            onChange={(e) => {
                                formik.setFieldValue('username', e.target.value);
                            }}
                            error={!!(formik.touched.username && formik.errors.username)}
                            errorMessage={(formik.touched.username && formik.errors.username) || null}
                        />
                        <TextField
                            autoComplete="new-password"
                            label="Pasword"
                            name="password"
                            type="password"
                            value={formik.values.password || ''}
                            onChange={(e) => {
                                formik.setFieldValue('password', e.target.value);
                            }}
                            error={!!(formik.touched.password && formik.errors.password)}
                            errorMessage={(formik.touched.password && formik.errors.password) || null}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};

export default Login;
