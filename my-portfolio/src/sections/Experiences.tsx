import { FC } from 'react';
import Title from '../components/Title';

const styles = {
    container: {
        marginTop:'50px',
        marginBottom:'100px'
    },
};


const Experiences: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container} className='container'>
            <Title text='Experiences'/>
        </div>
    );
};

export default Experiences;