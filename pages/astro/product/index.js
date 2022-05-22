import DashboardLayout from '@astro_layout';
import Content from '@astro_components/product';

const Dashboard = () => (
    <DashboardLayout
        pageProps={{
            title: 'Manage Products',
        }}
    >
        <Content />
    </DashboardLayout>
);

export default Dashboard;
