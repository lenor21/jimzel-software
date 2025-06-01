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

  console.log(employeesData);

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
    const selectedEmployee = e.value as Employee;
    setSelectedEmployee(selectedEmployee);

    if (selectedEmployee) {
      dispatch(addSelectedEmployee(selectedEmployee));
    } else {
      dispatch(addSelectedEmployee(null));
    }
  };

  const formatDate = (dateValue: Date) => {
    if (dateValue === null || dateValue === undefined) {
      return null;
    }

    let date;

    if (dateValue instanceof Date) {
      date = dateValue;
    } else {
      try {
        date = new Date(dateValue);
      } catch (error) {
        console.error('Error parsing date string:', dateValue, error);
        return null;
      }
    }

    if (isNaN(date.getTime())) {
      return null;
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
          field='employee_id'
          header='Employee ID'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='first_name'
          header='First Name'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='middle_name'
          header='Middle Name'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='last_name'
          header='Last Name'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='suffix'
          header='Suffix'
          sortable
          style={{ minWidth: '80px', width: 'auto' }}
        ></Column>
        <Column
          field='address'
          header='Address'
          sortable
          style={{ minWidth: '250px', width: 'auto' }}
        ></Column>
        <Column
          field='city'
          header='City'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='province'
          header='Province'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='zip'
          header='Zip'
          sortable
          style={{ minWidth: '100px', width: 'auto' }}
        ></Column>
        <Column
          field='location'
          header='Location'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='department'
          header='Department'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='project'
          header='Project'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='team'
          header='Team'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='position'
          header='Position'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='employment'
          header='Employment'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='user_profile'
          header='User Profile'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='manager'
          header='Manager'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='vendor'
          header='Vendor'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='email'
          header='Email'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
        ></Column>
        <Column
          field='phone'
          header='Phone'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='ctc'
          header='CTC'
          sortable
          style={{ minWidth: '100px', width: 'auto' }}
        ></Column>
        <Column
          field='ctc_place'
          header='CTC Place'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='ctc_date'
          header='CTC Date'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
          body={(rowData) => formatDate(rowData.ctc_date)}
        ></Column>
        <Column
          field='ctc_amount_paid'
          header='CTC Amount Paid'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='notes'
          header='Notes'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
        ></Column>
        <Column
          field='pay_freq'
          header='Pay Frequency'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='sex'
          header='Sex'
          sortable
          style={{ minWidth: '80px', width: 'auto' }}
        ></Column>
        <Column
          field='active'
          header='Active'
          sortable
          style={{ minWidth: '80px', width: 'auto' }}
        ></Column>
        <Column
          field='birthday'
          header='Birthday'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
          body={(rowData) => formatDate(rowData.birthday)}
        ></Column>
        <Column
          field='date_hired'
          header='Date Hired'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
          body={(rowData) => formatDate(rowData.date_hired)}
        ></Column>
        <Column
          field='kasambahay'
          header='Kasambahay'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='regularized'
          header='Regularized'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
          body={(rowData) => formatDate(rowData.regularized)}
        ></Column>
        <Column
          field='separated'
          header='Separated'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
          body={(rowData) => formatDate(rowData.separated)}
        ></Column>
        <Column
          field='contract_start'
          header='Contract Start'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
          body={(rowData) => formatDate(rowData.contract_start)}
        ></Column>
        <Column
          field='contract_end'
          header='Contract End'
          sortable
          style={{ minWidth: '200px', width: 'auto' }}
          body={(rowData) => formatDate(rowData.contract_end)}
        ></Column>
        <Column
          field='minimum_earner'
          header='Minimum Earner'
          sortable
          style={{ minWidth: '140px', width: 'auto' }}
        ></Column>
        <Column
          field='minimum_daily'
          header='Minimum Daily'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='minimum_monthly'
          header='Minimum Monthly'
          sortable
          style={{ minWidth: '140px', width: 'auto' }}
        ></Column>
        <Column
          field='tax_id'
          header='Tax ID'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='tax_witheld'
          header='Tax Witheld'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='sss_gsis'
          header='SSS/GSIS'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='sss_gsis_witheld'
          header='SSS/GSIS Witheld'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='phic_id'
          header='PHIC ID'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='phic_witheld'
          header='PHIC Witheld'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='hdmf_id'
          header='HDMF ID'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='hdmf_witheld'
          header='HDMF Witheld'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='hdmf_account'
          header='HDMF Account'
          sortable
          style={{ minWidth: '140px', width: 'auto' }}
        ></Column>
        <Column
          field='bank'
          header='Bank'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='bank_account'
          header='Bank Account'
          sortable
          style={{ minWidth: '140px', width: 'auto' }}
        ></Column>
        <Column
          field='rate_type'
          header='Rate Type'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='base_monthly_pay'
          header='Base Monthly Pay'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='days_per_month'
          header='Days Per Month'
          sortable
          style={{ minWidth: '140px', width: 'auto' }}
        ></Column>
        <Column
          field='hours_per_day'
          header='Hours Per Day'
          sortable
          style={{ minWidth: '140px', width: 'auto' }}
        ></Column>
        <Column
          field='daily_rate'
          header='Daily Rate'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='hourly_rate'
          header='Hourly Rate'
          sortable
          style={{ minWidth: '120px', width: 'auto' }}
        ></Column>
        <Column
          field='col_allowance'
          header='COL Allowance'
          sortable
          style={{ minWidth: '130px', width: 'auto' }}
        ></Column>
        <Column
          field='represent_allowance'
          header='Representation Allowance'
          sortable
          style={{ minWidth: '180px', width: 'auto' }}
        ></Column>
        <Column
          field='housing_allowance'
          header='Housing Allowance'
          sortable
          style={{ minWidth: '150px', width: 'auto' }}
        ></Column>
        <Column
          field='transportation_allowance'
          header='Transportation Allowance'
          sortable
          style={{ minWidth: '180px', width: 'auto' }}
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
