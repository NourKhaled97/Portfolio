import { FC } from 'react';
import FooterImg from '../assets/footer.png';

const styles = {
  container: {
    display: 'flex',
    padding: '30px 60px 0px',
    backgroundColor: '#083344',
    justifyContent: 'center',
  },
  text: {
    width: '750px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '50px'
  }
};

const Footer: FC = () => {
  const classes = styles;

  return (
    <footer style={classes.container}>
      <img src={FooterImg} alt='Github' width={350} height={200} />

      <div style={classes.text}>
        <p>
          Thank you for taking the time to explore my portfolio. I hope you found my work
          and experience engaging and insightful. I am enthusiastic about the possibility
          of collaborating with you and contributing to exciting and innovative projects.
        </p>
      </div>
    </footer>
  );
};

export default Footer;