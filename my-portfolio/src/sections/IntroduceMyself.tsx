import { FC } from 'react';
import Home1 from '../assets/Home1.jpg';
import Home2 from '../assets/Home2.png';

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        marginTop: '100px',
        marginBottom: '150px'
    },
    textContainer: {
        display: 'flex', 
        flex: '1', 
        alignSelf: 'center',
    },
    images: {
        paddingTop: '30px'
    },
    home1: {
        border: 'solid 2px  #4184a9',
        borderRadius: '10%',
        // paddingTop: '40px'
    },
    home2: {
        // alignSelf: 'end'
        alignSelf: 'end',
        position: "absolute",
        right: "450px",
        top: "430px",
    },
    h1: {
        // 400
        fontSize: '80px',
        color: '#22d3ee',
    },
    h5: {
        fontSize: '20px',
        color: '#ecfeff',
    },
    nour: {
        // 700
        fontSize: '120px',
        color: '#fecaca',
        fontStyle: 'italic',
        fontFamily: 'cursive',
        marginBottom: '60px'
    }
};


const IntroduceMyself: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container} className='container'>
            {/* <div style={classes.textContainer}> */}
            <div style={{ display: 'flex', flex: '1', alignSelf: 'center', flexDirection: 'column', marginRight: '100px' }}>
                <h1 style={classes.h1}>Hi, I am </h1>
                <h1 style={classes.nour}>Nour Khaled</h1>
                <h5 style={classes.h5}>Software Engineer</h5>
                <h5 style={classes.h5}>Front-end / Full Stack Developer</h5>
                <h5 style={classes.h5}>Mobile Developer</h5>
                <h5 style={classes.h5}>Freelancer</h5>
            </div>
            <div style={classes.images}>
                <img src={Home2} alt='Home2' width={300} height={200} style={classes.home2} />
                <img src={Home1} alt='Home1' width={450} height={350} style={classes.home1} />
            </div>
        </div>
    );
};

export default IntroduceMyself;