import { FC } from 'react';
import Logo from '../assets/logo.png'
import HeaderTab from '../components/HeaderTab';
import LazyImage from '../components/LazyImage';

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        position: 'sticky',
        top: 0,
        backgroundColor: '#164e63',
        padding: '10px',
    },
    imageContainer: {
        display: 'flex',
        flex: '1',
    },
    image: {
        minWidth:'82px',
        minHeight:'55px',
        borderRadius:'15px',
        backgroundColor: 'white',
        paddingTop:'7px',
        paddingLeft:'11px'
    },
    tabs: {
        color: 'red',
        display: 'flex',
        gap: '24px',
        alignSelf: 'center',
    }
};

const tabs = [
    { tab: "About", url: 'about' },
    { tab: "Skills", url: 'skills' },
    { tab: "Projects", url: 'projects' },
    { tab: "Experiences", url: 'experiences' },
    { tab: "Contact", url: 'contactMe' }
];


const Header: FC = () => {
    const classes = styles;

    return (
        <header style={classes.container} className='container'>
            <div style={classes.imageContainer}>
                <div
                    style={classes.image}
                    onClick={() => window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })}>
                    <LazyImage src={Logo} alt='logo' width='60' height='40' />
                </div>
            </div>
            <div style={classes.tabs}>
                {tabs.map((tab, index) => {
                    return <HeaderTab key={index} title={tab.tab} url={tab.url} />
                })}
            </div>
        </header>
    );
};

export default Header;