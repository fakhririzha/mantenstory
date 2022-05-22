import DashboardLayout from '../../../astro_components/dashboard';
import Content from '../../../astro_components/faq';

const Dashboard = () => (
    <DashboardLayout
        pageProps={{
            title: 'Manage FAQ',
        }}
    >
        <Content />
    </DashboardLayout>
);

export default Dashboard;
