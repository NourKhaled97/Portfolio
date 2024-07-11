import { FC } from 'react';

const styles = {
    container: {
        padding: '0px 60px 50px',
    },
};


const Experiences: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container}>
            <h1>Experiences</h1>
        </div>
    );
};

export default Experiences;