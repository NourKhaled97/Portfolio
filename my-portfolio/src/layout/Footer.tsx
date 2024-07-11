import { FC } from 'react';
import HeaderTab from '../components/HeaderTab';

const styles = {
  container: {
    display: 'flex',
    padding: '10px 60px',
    backgroundColor:'black',
    justifyContent: 'end',
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

const Footer: FC = () => {
  const classes = styles;

  return (
    <footer style={classes.container}>
      <div style={classes.tabs}>
        {tabs.map((tab, index) => {
          return <HeaderTab key={index} title={tab} />
        })}
      </div>
    </footer>
  );
};

export default Footer;