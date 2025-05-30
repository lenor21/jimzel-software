import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import { useGetEmployeesQuery } from '../../../features/employee/employeeApiSlice';
import { Paginator, type PaginatorPageChangeEvent } from 'primereact/paginator';
import { addSelectedEmployee } from '../../../features/employee/employeeSlice';
import { useDispatch } from 'react-redux';
import type { Employee } from '../../../types/employee/employeeTypes';

const List = () => {
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCounts, setTotalCounts] = useState(0);
  const [rows, setRows] = useState(5);
  const [first, setFirst] = useState(0);

  const { data: employeesDataRaw } = useGetEmployeesQuery({
    page: currentPage,
    limit: rows,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (employeesDataRaw) {
      const employees = employeesDataRaw.employees;
      console.log(selectedEmployee);

      const processedEmployees = employees.map((employee: Employee) => {
        return {
          ...employee,
        };
      });

      setEmployeesData(processedEmployees);
      setFirst((employeesDataRaw.pagination.currentPage - 1) * employeesDataRaw.pagination.limit);
      setCurrentPage(employeesDataRaw.pagination.currentPage);
      setTotalCounts(employeesDataRaw.pagination.totalCount);
    }
  }, [employeesDataRaw]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setCurrentPage(event.page + 1);
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleSelectionChange = (e: any) => {
    const selectedEmployee = e.value as Employee; // Cast value to Employee type
    setSelectedEmployee(selectedEmployee);

    if (selectedEmployee) {
      dispatch(addSelectedEmployee(selectedEmployee));
    } else {
      dispatch(addSelectedEmployee(null));
    }
  };

  return (
    <div>
      <DataTable
        value={employeesData}
        tableStyle={{ minWidth: '50rem' }}
        onSelectionChange={handleSelectionChange}
        selection={selectedEmployee}
        selectionMode='radiobutton'
        dataKey='id'
      >
        <Column
          selectionMode='single'
          headerStyle={{ width: '3rem' }}
        ></Column>
        <Column
          field='id'
          header='Id'
          sortable
          style={{ width: '25%' }}
        ></Column>
        <Column
          field='username'
          header='Username'
          sortable
          style={{ width: '25%' }}
        ></Column>
        <Column
          field='email'
          header='Email'
          sortable
          style={{ width: '25%' }}
        ></Column>
      </DataTable>
      <div className='flex justify-center lg:justify-end mt-4'>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalCounts}
          rowsPerPageOptions={[5, 10, 15]}
          onPageChange={onPageChange}
          className='p-paginator-sm text-sm p-2 hidden lg:block'
        />
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalCounts}
          onPageChange={onPageChange}
          template='FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'
          className='p-paginator-sm text-sm p-2 bg-gray-50 rounded-md block lg:hidden'
        />
      </div>
    </div>
  );
};

export default List;
