import * as React from 'react';
import Content from '@astro_components/login/content';
import { useRouter } from 'next/router';
import { getLoginInfo } from '@components/helpers/auth';

const Dashboard = () => {
    const router = useRouter();
    const isLogin = getLoginInfo();

    React.useEffect(() => {
        if (isLogin) {
            router.push('/astro');
        }
        console.log(isLogin);
    }, []);

    return <Content router={router} />;
};

export default Dashboard;
