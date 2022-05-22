import { useRouter } from 'next/router';
import DashboardLayout from '@astro_layout';
import Content from '@astro_components/faq/update';

const UpdateFaq = () => {
    const router = useRouter();
    return (
        <DashboardLayout
            pageProps={{
                title: 'Edit FAQ',
            }}
        >
            <Content routes={router} />
        </DashboardLayout>
    );
};

export default UpdateFaq;
