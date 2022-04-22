import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsum.</p>
        <p>version: 1.0.0</p>
        <p>
          <Link to='/'>Back to home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
