import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import { useGetEmployeesQuery } from '../../../features/employee/employeeApiSlice';
import { Paginator } from 'primereact/paginator';

interface Employee {
  id: number;
  username: string;
  email: string;
}

const List = () => {
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Employee | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rows, setRows] = useState(5);

  const { data: employeesDataRaw } = useGetEmployeesQuery({
    page: currentPage,
    limit: rows,
  });

  useEffect(() => {
    if (employeesDataRaw) {
      const employees = employeesDataRaw.employees;
      console.log(employeesDataRaw);

      const processedEmployees = employees.map((employee: Employee) => {
        return {
          ...employee,
        };
      });

      setEmployeesData(processedEmployees);
      setCurrentPage(employeesDataRaw.pagination.currentPage);
      setTotalPages(employeesDataRaw.pagination.totalPages);
    }
  }, [employeesDataRaw]);

  const onPageChange = (event: any) => {
    setCurrentPage(event.page + 1);
    setRows(event.rows);
  };

  return (
    <div>
      <DataTable
        value={employeesData}
        tableStyle={{ minWidth: '50rem' }}
        onSelectionChange={(e) => setSelectedProduct(e.value as Employee)}
        selection={selectedProduct}
        selectionMode='radiobutton'
        dataKey='id'>
        <Column selectionMode='single' headerStyle={{ width: '3rem' }}></Column>
        <Column
          field='username'
          header='Username'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='email'
          header='Email'
          sortable
          style={{ width: '25%' }}></Column>
      </DataTable>
      <div>
        <Paginator
          first={currentPage - 1}
          rows={rows}
          totalRecords={totalPages}
          rowsPerPageOptions={[5, 10, 15]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default List;
