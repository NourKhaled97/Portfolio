import { FC } from 'react';
import Title from '../components/Title';
import Github from '../assets/github.png';
import Gmail from '../assets/gmail.png';
import LinkedIn from '../assets/linkedIn.png';

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        marginTop: '50px',
        marginBottom: '100px'
    },
    title: {
        flex: '1',
    },
    imageContainer: {
        display: 'flex',
        gap: '40px'
    },
    image: {
        borderRadius: '20px',
        backgroundColor: 'white',
        height: '80px',
        width: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};


const ContactMe: FC = () => {
    const classes = styles;
    const myGithubLink = 'https://github.com/NourKhaled97';
    const myLinkedIn = 'https://www.linkedin.com/in/nour-khaled-312309159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';

    return (
        <div style={classes.container} className='container'>
            <div style={classes.title}>
                <Title text='ContactMe' />
            </div>
            <div style={classes.imageContainer}>
                <div style={classes.image}>
                    <a href={myGithubLink} target="_blank" rel="noreferrer">
                        <img src={Github} alt='Github' width={45} height={45} />
                    </a>
                </div>

                <div style={classes.image}>
                    <a href="mailto:nourakhaled.teleng@gmail.com" target="_blank" rel="noreferrer">
                        <img src={Gmail} alt='Gmail' width={55} height={55} />
                    </a>
                </div>

                <div style={classes.image}>
                    <a href={myLinkedIn} target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt='LinkedIn' width={40} height={40}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;