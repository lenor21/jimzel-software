import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { Employee } from '../../../types/employee/employeeTypes';

const Employee = () => {
  const { selectedEmployee } = useSelector((state: RootState) => state.employee);

  return (
    <div>
      Employee <br />
      {selectedEmployee && (selectedEmployee as Employee).id}
    </div>
  );
};

export default Employee;
