import { FC } from 'react';
import Skill from '../components/Skill';

const styles = {
    container: {
        padding: '0px 60px 50px',
    },
};

const technicalSkills = [
    {
        name: 'React',
        image: '',
    }, {
        name: 'Next',
        image: '',
    }, {
        name: 'c#',
        image: '',
    },
]

const softSkills = [
    {
        name: 'Teamwork',
        image: '',
    }, {
        name: 'Time Managment',
        image: '',
    }, {
        name: 'Creativity',
        image: '',
    },
]


const Skills: FC = () => {
    const classes = styles;

    return (
        <div style={classes.container}>
            <h1>Skills</h1>

            <h3>Technical Skills</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
                {technicalSkills.map((technicalSkill, index) => {
                    return (
                        <Skill
                            key={index}
                            name={technicalSkill.name}
                            image={technicalSkill.image}
                        />
                    )
                })}
            </div>
            <h3>Soft Skills</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
                {softSkills.map((softSkill, index) => {
                    return (
                        <Skill
                            key={index}
                            name={softSkill.name}
                            image={softSkill.image}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Skills;