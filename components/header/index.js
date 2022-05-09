import * as React from 'react';
import { Parallax } from 'react-parallax';

import makeStyles from './styles';

const Header = () => {
    const styles = makeStyles();

    return (
        <Parallax
            bgImage="/static/assets/img/header.jpg"
            bgImageStyle={{
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            bgClassName="test"
            strength={-300}
        >
            <div style={styles.headerParallax} />
        </Parallax>
    );
};

export default Header;
