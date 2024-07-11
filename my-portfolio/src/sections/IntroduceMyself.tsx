import { FC } from 'react';
import Home1 from '../assets/Home1.jpg';
import Home2 from '../assets/Home2.png';

const styles = {
    container: {
        display: 'flex',
        padding: '50px 60px',
    },
    textContainer: {
        display: 'flex', flex: '1', alignSelf: 'center',
    },
    home1: { border: 'solid 2px blue', borderRadius: '10%' },
    home2: { alignSelf: 'end' }
};


const IntroduceMyself: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container}>
            {/* <div style={classes.textContainer}> */}
            <div style={{ display: 'flex', flex: '1', alignSelf: 'center', flexDirection: 'column', marginRight:'100px' }}>
                <h1>Hi, I am Nour Khaled</h1>
                <h5>Software Engineer, Front-end, Full Stack and Mobile Developer</h5>
            </div>
            <img src={Home2} alt='Home2' width={200} height={150} style={{
                alignSelf: 'end', position: "absolute",
                right: "250px",
                top: " 250px",
            }} />
            <img src={Home1} alt='Home1' width={300} height={200} style={classes.home1} />
        </div>
    );
};

export default IntroduceMyself;