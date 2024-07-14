import { FC } from 'react';

const styles: Record<string, React.CSSProperties> = {
    title: {
        // 300
        color:'#67e8f9',
        marginBottom:'20px',
    },
};

interface Title2Props {
    text: string;
}

const SubTitle: FC<Title2Props> = ({ text }) => {
    const classes = styles;

    return (
        <h3 style={classes.title}>{text}</h3>
    );
};

export default SubTitle;