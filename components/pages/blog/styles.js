import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        blogContainer: {
            paddingTop: '0rem',
            paddingBottom: '5rem',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        imageWrapperBig: {
            position: 'relative',
            gridRow: '1 / span 2',
        },
        imageWrapperSmall: {
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr',
        },
        figure: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            margin: '0',
            boxSizing: 'border-box',
        },
        img: {
            display: 'block',
            objectFit: 'cover',
            minWidth: '100%',
            flex: '1',
            minHeight: '0',
        },
        figureSmall: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            margin: '0',
            boxSizing: 'border-box',
        },
        imgSmall: {
            display: 'block',
            objectFit: 'cover',
            minWidth: '100%',
            flex: '1',
            minHeight: '0',
        },
        imageCaptionWrapper: {
            position: 'relative',
            top: '-150px',
            padding: '2.5rem 4rem',
            backgroundColor: theme.palette.primaryCard.main,
            color: theme.palette.primary.main,
        },
        headlineWrapper: {
            height: '70vh',
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: '60fr 40fr',
        },
        leftHeadline: {
            backgroundImage: "url('/static/assets/img/blog-1.png')",
            display: 'flex',
        },
        leftHeadlineTitle: {
            fontSize: '25px',
            paddingBottom: '1rem',
        },
        leftHeadlineDescription: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            paddingTop: '1rem',
        },
        leftHeadlineWrapper: {
            position: 'relative',
            alignSelf: 'end',
            height: '35%',
            width: '85%',
            padding: '2.5rem 4rem',
            backgroundColor: theme.palette.primaryCard.main,
        },
        rightHeadline: {
            display: 'grid',
            rowGap: '1rem',
            gridTemplateRows: '1fr 1fr',
        },
        rightHeadlineTitle: {
            fontSize: '25px',
            paddingBottom: '1rem',
        },
        rightHeadlineDescription: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            paddingTop: '1rem',
        },
        rightHeadlineChildTwo: {
            backgroundImage: "url('/static/assets/img/blog-2.png')",
            backgroundSize: 'cover',
            display: 'flex',
        },
        rightHeadlineChildThree: {
            backgroundImage: "url('/static/assets/img/blog-3.png')",
            backgroundSize: 'cover',
            display: 'flex',
        },
        rightHeadlineWrapper: {
            position: 'relative',
            alignSelf: 'end',
            height: '65%',
            width: '85%',
            padding: '2rem',
            backgroundColor: theme.palette.primaryCard.main,
        },
        divider: {
            maxWidth: '100%',
            height: '2px',
            borderTop: '1px solid #707070',
        },
        miniBlogTitle: {
            fontSize: '25px',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            color: theme.palette.primary.main,
        },
        miniBlogDescription: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            paddingTop: '1rem',
        },
    };
};

export default styles;