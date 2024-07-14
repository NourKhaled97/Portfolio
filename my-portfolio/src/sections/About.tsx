import { FC } from 'react';
import Title from '../components/Title';

const styles = {
    container: {
        marginTop: '50px',
        marginBottom: '100px'
    },
};


const About: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container} className='container'>
            <Title text='About'/>
            <div>
                <p>
                    I am a dedicated Software Engineer with over 4 years of experience working across three 
                    different companies. As a full-stack developer and freelancer, I have honed my skills in 
                    both front-end and back-end development. My professional journey has equipped me with a 
                    diverse skill set, enabling me to deliver comprehensive solutions that meet client and 
                    industry standards. I am committed to continuous learning and adapting to new technologies 
                    to ensure the highest quality in my work.
                </p>
            </div>
        </div>
    );
};

export default About;