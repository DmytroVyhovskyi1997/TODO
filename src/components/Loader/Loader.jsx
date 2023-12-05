import { ProgressBar } from 'react-loader-spinner';
import { Load } from './Loader.styled';


export const Loader = () => (
  <Load >
    <ProgressBar
      visible={true}
      height="100"
      width="100"
      wrapperClass=""
      wrapperStyle={{}}
      ariaLabel="progress-bar-loading"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  </Load>
);