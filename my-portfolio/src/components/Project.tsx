import { FC } from 'react';
import Link from '../assets/link.png';
import Github from '../assets/github.png';

const styles: Record<string, React.CSSProperties> = {
    container: {
        // width: '250px',
        border: 'solid 2px  #4184a9',
        borderRadius: '20px',
        padding: '20px 20px 10px 20px',
        marginBottom: '20px',
        backgroundColor: 'white',
        boxShadow: '10px 10px 5px #0891b2',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        borderRadius: '20px'
    },
    titleContainer: {
        display: 'flex',
        // alignItems: 'center',
        margin: '30px 0 15px',
        gap: '5px'
    },
    title: {
        flex: '1',
        fontStyle:'italic'
    },
    p: {
        color: 'black'
    }
};

interface ProjectProps {
    name: string;
    description: string;
    image: string;
    link: string;
    githubLink: string;
}

const Project: FC<ProjectProps> = ({ name, description, image, link, githubLink }) => {
    const classes = styles;

    return (
        <div style={classes.container}>
            <div style={classes.imageContainer}>
                <img src={image} alt='ProjectImage' width='100%' height={250} style={classes.image} />
            </div>
            <div style={classes.titleContainer}>
                <h5 style={classes.title}>{name}</h5>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={Link} alt='Link' width={25} height={25} />
                </a>
                <a href={githubLink} target="_blank" rel="noreferrer">
                    <img src={Github} alt='Github' width={25} height={25} />
                </a>
            </div>
            <p style={classes.p}>{description}</p>
        </div>
    );
};

export default Project;