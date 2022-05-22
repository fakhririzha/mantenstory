import DashboardLayout from '../../astro_components/dashboard';
import Content from '../../astro_components/dashboard/content';

const Dashboard = () => (
    <DashboardLayout
        pageProps={{
            title: 'Administrator Dashboard',
        }}
    >
        <Content />
    </DashboardLayout>
);

export default Dashboard;
