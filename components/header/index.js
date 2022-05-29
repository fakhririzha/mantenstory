import * as React from 'react';
import { Parallax } from 'react-parallax';

import makeStyles from './styles';

const Header = () => {
    const [headerData, setHeaderData] = React.useState({});
    const styles = makeStyles();

    React.useEffect(() => {
        fetch('/api/astro/header')
            .then((data) => data.json())
            .then((results) => {
                setHeaderData(results);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    return (
        <Parallax
            bgImage={headerData && headerData.data && headerData.data[0].image_base64}
            bgImageStyle={{
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            strength={-300}
        >
            <div style={styles.headerParallax} />
        </Parallax>
    );
};

export default Header;
