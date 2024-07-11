import { FC } from 'react';
import Project from '../components/Project';

const styles = {
    container: {
        padding: '0px 60px 50px',
    },
};

const projects = [
    {
        name: 'Project 1',
        description: 'This is the first project for me, I am so proud to publish it and make such an incredible website',
        image: '',
        link: '',
        githubLink: '',
    }, {
        name: 'Project 2',
        description: 'This is the first project for me, I am so proud to publish it and make such an incredible website',
        image: '',
        link: '',
        githubLink: '',
    }, {
        name: 'Project 3',
        description: 'This is the first project for me, I am so proud to publish it and make such an incredible website',
        image: '',
        link: '',
        githubLink: '',
    },
]


const Projects: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container}>
            <h1>Projects</h1>
            <div style={{display:'flex', gap:'20px'}}>
                {projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                            githubLink={project.githubLink}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;