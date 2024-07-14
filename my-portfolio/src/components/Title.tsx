import { FC } from 'react';

const styles: Record<string, React.CSSProperties> = {
    title: {
        // 500
        color:'#06b6d4',
        marginBottom:'30px',
        fontSize:'40px'
    },
};

interface Title2Props {
    text: string;
}

const Title: FC<Title2Props> = ({ text }) => {
    const classes = styles;

    return (
        <h2 style={classes.title}>{text}</h2>
    );
};

export default Title;