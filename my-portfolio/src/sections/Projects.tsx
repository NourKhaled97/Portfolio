import { FC } from 'react';
import Project from '../components/Project';
import LaCouronneHotel from '../assets/LaCouronneHotel.png';
import Title from '../components/Title';

const styles: Record<string, React.CSSProperties> = {
    container: {
        marginTop: '100px',
        marginBottom: '100px',
    },
};

const projects = [
    {
        name: 'La Couronne Hotel',
        description: 'This is the first project for me, I am so proud to publish it and make such an incredible website',
        image: LaCouronneHotel,
        link: 'https://banguihotels-batiloc.netlify.app/',
        githubLink: 'https://github.com/NourKhaled97/La-Couronne-Hotels/tree/main',
    },
]


const Projects: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container} className='container'>
            <Title text='Projects'/>
            <div className='row'>
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className='col-md-6'
                        >
                            <Project
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                                githubLink={project.githubLink}
                            />
                        </div>

                    )
                })}
            </div>
        </div>
    );
};

export default Projects;