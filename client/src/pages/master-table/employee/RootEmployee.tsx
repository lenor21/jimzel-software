import { Outlet } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();

  return (
    <div className='container mx-auto px-3 lg:px-6'>
      <h1 className='my-4 font-bold text-2xl'>EMPLOYEE MASTER</h1>
      <div className='p-3 bg-white shadow mt-10'>
        <div className='flex justify-between flex-wrap gap-2 mb-4'>
          <div className='flex gap-2 flex-wrap'>
            <Button
              icon='pi pi-plus'
              label='Add'
              severity='info'
              className='py-1 px-3'
              onClick={() => {
                navigate('/master-table/employees/add');
              }}
            />
            <Button
              icon='pi pi-pencil'
              label='Edit'
              severity='success'
              className='py-1 px-3'
            />
            <Button
              icon='pi pi-search'
              label='View'
              severity='warning'
              className='py-1 px-3'
            />
            <Button
              icon='pi pi-trash'
              label='Delete'
              severity='danger'
              className='py-1 px-3'
            />
          </div>
          <div className='flex gap-1'>
            <Button icon='pi pi-refresh' className='py-1 px-3 bg-[#679e37]' />
            <Button icon='pi pi-download' className='py-1 px-3 bg-[#679e37]' />
          </div>
        </div>
        <div className='flex mb-6 !border-b-2 !border-b-[#e7e7e7]'>
          <p className='block px-3 py-2'>LIST</p>
          <p className='block px-3 py-2 !border-b-2 !border-b-[#6366f1] !mb-[-2px] text-[#6366f1]'>
            DETAIL
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
