import { FC } from 'react';

const styles: Record<string, React.CSSProperties> = {
    container: {
        minWidth: '80px',
        border: 'solid 2px #4184a9',
        borderRadius: '20px',
        padding: '10px 10px 0 10px',
        height: '100%',
        alignItems: 'center',
        display: 'grid',
        backgroundColor:'white',
        // boxShadow: '10px 10px 5px lightblue',
        boxShadow: '10px 10px 5px #0891b2',
    },
    imageContainer:{ 
        display: 'flex', 
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: '12px',
        color: ' #4184a9'
    }
};

interface SkillProps {
    name: string;
    image: string;
}

const Skill: FC<SkillProps> = ({ name, image }) => {
    const classes = styles;

    return (
        <div style={classes.container}>
            <div style={classes.imageContainer}>
                <img src={image} alt='Home1' width={60} height={60} />
            </div>
            <h5 style={classes.text}>{name}</h5>
        </div>
    );
};

export default Skill;