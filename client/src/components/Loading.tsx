import { ProgressSpinner } from 'primereact/progressspinner';

const Loading = () => {
  return (
    <div className='grid place-items-center min-h-50'>
      <ProgressSpinner style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default Loading;
