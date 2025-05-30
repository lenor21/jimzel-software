import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';

const Employee = () => {
  const { selectedEmployee } = useSelector((state: RootState) => state.employee);

  return (
    <div>
      Employee
      {selectedEmployee && selectedEmployee.username}
    </div>
  );
};

export default Employee;
