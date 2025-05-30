import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { Employee } from '../../../types/employee/employeeTypes';

const Update = () => {
  const { selectedEmployee } = useSelector((state: RootState) => state.employee);

  return <div>Update {selectedEmployee && (selectedEmployee as Employee).id}</div>;
};

export default Update;
