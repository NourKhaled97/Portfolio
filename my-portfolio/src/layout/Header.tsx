import { FC } from 'react';
import Logo from '../assets/logo.png'
import HeaderTab from '../components/HeaderTab';

const styles = {
    container: {
        display: 'flex',
        padding: '10px 60px',
    },
    image: {
        display: 'flex',
        flex: '1',
    },
    tabs: {
        color: 'red',
        display: 'flex',
        gap: '24px',
        alignSelf: 'center',
    }
};

const tabs = ["About", "Skills", "Projects", "Experience", "Contact"];


const Header: FC = () => {
    const classes = styles;

    return (
        <header style={classes.container}>
            <div style={classes.image}>
                <img src={Logo} alt='logo' width={60} height={40} />
            </div>
            <div style={classes.tabs}>
                {tabs.map((tab, index) => {
                    return <HeaderTab key={index} title={tab} />
                })}
            </div>
        </header>
    );
};

export default Header;