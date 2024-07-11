import { FC } from 'react';
import Home1 from '../assets/Home1.jpg';

const styles = {
    container: {
    },
};

interface SkillProps {
    name: string;
    image: string;
}

const Skill: FC<SkillProps> = ({ name, image }) => {
    const classes = styles;

    return (
        <div style={{
            width: '100px',
            border: 'solid 2px blue',
            borderRadius: '20px',
            padding: '10px 10px 0 10px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Home1} alt='Home1' width={80} height={80} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3 style={{textAlign:'center'}}>{name}</h3>
            </div>
        </div>
    );
};

export default Skill;