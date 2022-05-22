import DashboardLayout from '@astro_layout';
import Content from '@astro_components/product/create';

const createFaq = () => (
    <DashboardLayout
        pageProps={{
            title: 'Add New Products',
        }}
    >
        <Content />
    </DashboardLayout>
);

export default createFaq;
