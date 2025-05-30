import { Outlet } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDeleteEmployeeMutation } from '../../../features/employee/employeeApiSlice';
import { clearSelectedEmployee } from '../../../features/employee/employeeSlice';
import { useDispatch } from 'react-redux';
import type { Employee } from '../../../types/employee/employeeTypes';

const Root = () => {
  const navigate = useNavigate();

  const { selectedEmployee } = useSelector((state: RootState) => state.employee);

  const [deleteEmployee] = useDeleteEmployeeMutation();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (selectedEmployee) {
      console.log(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleEmployeeAdd = () => {
    dispatch(clearSelectedEmployee());
    navigate('/master-table/employees/add');
  };

  const handleEmployeeUpdate = () => {
    if (!selectedEmployee) {
      Swal.fire({
        color: '#0a0a0a',
        position: 'center',
        icon: 'error',
        title: `Please select an employee to edit`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/master-table/employees');
      return;
    }

    if (selectedEmployee && 'id' in selectedEmployee) {
      navigate(`/master-table/employees/update/${(selectedEmployee as Employee).id}`);
    }
  };

  const handleEmployeeDetails = () => {
    if (!selectedEmployee) {
      Swal.fire({
        color: '#0a0a0a',
        position: 'center',
        icon: 'error',
        title: `Please select an employee to view`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/master-table/employees');
      return;
    }

    if (selectedEmployee && 'id' in selectedEmployee) {
      navigate(`/master-table/employees/${(selectedEmployee as Employee).id}`);
    }
  };

  const handleEmployeeDelete = () => {
    if (!selectedEmployee) {
      Swal.fire({
        color: '#0a0a0a',
        position: 'center',
        icon: 'error',
        title: `Please select an employee to delete`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/master-table/employees');
      return;
    }

    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (selectedEmployee) {
            await deleteEmployee((selectedEmployee as Employee).id).unwrap();
            dispatch(clearSelectedEmployee());
            navigate('/master-table/employees');
          }

          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        }
      });
    } catch (err: any) {
      Swal.fire({
        color: '#0a0a0a',
        position: 'center',
        icon: 'error',
        title: `${err.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className='container mx-auto px-3 lg:px-6'>
      <h1 className='my-4 font-bold text-2xl'>EMPLOYEE MASTER</h1>
      <div className='p-3 bg-white shadow my-10'>
        <div className='flex justify-between flex-wrap gap-2 mb-4'>
          <div className='flex gap-2 flex-wrap'>
            <Button
              icon='pi pi-plus'
              label='Add'
              severity='info'
              className='py-1 px-2 lg:px-3'
              onClick={handleEmployeeAdd}
            />
            <Button
              icon='pi pi-pencil'
              label='Edit'
              severity='success'
              className='py-1 px-2 lg:px-3'
              onClick={handleEmployeeUpdate}
            />
            <Button
              icon='pi pi-search'
              label='View'
              severity='warning'
              className='py-1 px-2 lg:px-3'
              onClick={handleEmployeeDetails}
            />
            <Button
              icon='pi pi-trash'
              label='Delete'
              severity='danger'
              className='py-1 px-2 lg:px-3'
              onClick={handleEmployeeDelete}
            />
          </div>
          {location.pathname === '/master-table/employees' && (
            <div className='flex gap-1'>
              <Button
                icon='pi pi-refresh'
                className='py-1 px-3 bg-[#679e37]'
              />
              <Button
                icon='pi pi-download'
                className='py-1 px-3 bg-[#679e37]'
              />
            </div>
          )}
        </div>
        <div className='flex mb-2 !border-b-2 !border-b-[#e7e7e7]'>
          <p className='block px-3 py-2'>LIST</p>
          <p className='block px-3 py-2 !border-b-2 !border-b-[#6366f1] !mb-[-2px] text-[#6366f1]'>DETAIL</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
