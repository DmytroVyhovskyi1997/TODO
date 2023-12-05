import { ProgressBar } from 'react-loader-spinner';
import { Load } from './Loader.styled';

const Loader = () => (
  <Load>
    <ProgressBar
      visible={true}
      height={100}
      width={100}
      type="TailSpin" 
      color="#F4442E"
    />
  </Load>
);

export default Loader;