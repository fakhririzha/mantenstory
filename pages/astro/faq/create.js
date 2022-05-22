import DashboardLayout from '../../../astro_components/dashboard';
import Content from '../../../astro_components/faq/create';

const createFaq = () => (
    <DashboardLayout
        pageProps={{
            title: 'Add New FAQ',
        }}
    >
        <Content />
    </DashboardLayout>
);

export default createFaq;
