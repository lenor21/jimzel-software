import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='container mx-auto px-3 lg:px-6'>
      <h1 className='my-2 font-bold text-2xl'>EMPLOYEE MASTER</h1>
      <div className='p-2 bg-white'>
        <div className='flex justify-between'>
          <div className='flex'>
            <button>Add</button>
            <button>Edit</button>
            <button>View</button>
            <button>Delete</button>
          </div>
          <div>
            <button>hello</button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
