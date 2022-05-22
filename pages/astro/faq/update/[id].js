import { useRouter } from 'next/router';
import DashboardLayout from '../../../../astro_components/dashboard';
import Content from '../../../../astro_components/faq/update';

const UpdateFaq = () => {
    const router = useRouter();
    return (
        <DashboardLayout
            pageProps={{
                title: 'Add New FAQ',
            }}
        >
            <Content routes={router} />
        </DashboardLayout>
    );
};

export default UpdateFaq;
