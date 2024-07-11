import { FC } from 'react';
import Home1 from '../assets/Home1.jpg';

const styles = {
    container: {
    },
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
        <div style={{
            width: '250px',
            border: 'solid 2px blue',
            borderRadius: '20px',
            padding: '10px 10px 0 10px'
        }}>
            <div style={{ display:'flex', justifyContent: 'center' }}>
                <img src={Home1} alt='Home1' width={150} height={150} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ flex: '1' }}>{name}</h3>
                <img src={Home1} alt='Home1' width={40} height={40} />
                <img src={Home1} alt='Home1' width={40} height={40} />
            </div>
            <h5>{description}</h5>
        </div>
    );
};

export default Project;