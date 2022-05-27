import * as React from 'react';
import { useRouter } from 'next/router';
import { getLoginInfo } from '@components/helpers/auth';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import DashboardLayout from '@astro_layout';
import Content from '@astro_components/product/create';

const createFaq = () => {
    const router = useRouter();
    const isLogin = getLoginInfo();
    const [open, setOpen] = React.useState(false);
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
    };

    React.useEffect(() => {
        if (!isLogin) {
            router.push('/astro/login');
        }
    }, []);

    if (isLogin) {
        return (
            <DashboardLayout
                pageProps={{
                    title: 'Add New Products',
                }}
            >
                <Content />
            </DashboardLayout>
        );
    }
    return (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                You dont have permission to open this page!
            </Alert>
        </Snackbar>
    );
};

export default createFaq;
