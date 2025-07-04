import { InputText } from 'primereact/inputtext';
import RequiredText from '../../../components/RequiredText';
import { InputTextarea } from 'primereact/inputtextarea';
import Location from '../../../components/form/Location';
import Department from '../../../components/form/Department';
import Project from '../../../components/form/Project';
import Team from '../../../components/form/Team';
import Position from '../../../components/form/Position';
import Employment from '../../../components/form/Employment';
import Vendor from '../../../components/form/Vendor';
import Manager from '../../../components/form/Manager';
import User from '../../../components/form/User';
import PayFrequency from '../../../components/form/PayFrequency';
import Sex from '../../../components/form/Sex';
import RateType from '../../../components/form/RateType';
import Bank from '../../../components/form/Bank';
import { Button } from 'primereact/button';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { employeeFormSchema, type EmployeeFormValues } from '../../../schemas/employeeSchema';
import FormError from '../../../components/form/FormError';
import { Checkbox } from 'primereact/checkbox';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedEmployee } from '../../../features/employee/employeeSlice';
import type { RootState } from '../../../app/store';
import type { Employee } from '../../../types/employee/employeeTypes';
import { useMemo } from 'react';
import { useUpdateEmployeeMutation } from '../../../features/employee/employeeApiSlice';

const getEmployeeDefaultValues = (employeeData: Employee | null | undefined): EmployeeFormValues => {
  const toDateString = (dateValue: string | Date | null | undefined): string => {
    if (!dateValue) return '';
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    return date.toISOString().split('T')[0];
  };

  const toBoolean = (value: any): boolean => {
    if (value === true || value === 1 || value === 'true') {
      return true;
    }
    return false;
  };

  return {
    employee_id: employeeData?.employee_id || '',
    first_name: employeeData?.first_name || '',
    middle_name: employeeData?.middle_name || '',
    last_name: employeeData?.last_name || '',
    suffix: employeeData?.suffix || '',
    address: employeeData?.address || '',
    city: employeeData?.city || '',
    province: employeeData?.province || '',
    zip: employeeData?.zip || '',
    location: employeeData?.location || '',
    department: employeeData?.department || '',
    project: employeeData?.project || '',
    team: employeeData?.team || '',
    position: employeeData?.position || '',
    employment: employeeData?.employment || '',
    user_profile: employeeData?.user_profile || '',
    manager: employeeData?.manager || '',
    vendor: employeeData?.vendor || '',
    email: employeeData?.email || '',
    phone: employeeData?.phone || '',
    ctc: employeeData?.ctc || '',
    ctc_place: employeeData?.ctc_place || '',
    ctc_date: toDateString(employeeData?.ctc_date),
    ctc_amount_paid: employeeData?.ctc_amount_paid ?? 0,
    notes: employeeData?.notes || '',
    pay_freq: employeeData?.pay_freq || '',
    sex: employeeData?.sex || '',
    active: toBoolean(employeeData?.active),
    birthday: toDateString(employeeData?.birthday),
    date_hired: toDateString(employeeData?.date_hired),
    kasambahay: toBoolean(employeeData?.active),
    regularized: toDateString(employeeData?.regularized),
    separated: toDateString(employeeData?.separated),
    contract_start: toDateString(employeeData?.contract_start),
    contract_end: toDateString(employeeData?.contract_end),
    minimum_earner: toBoolean(employeeData?.active),
    minimum_daily: employeeData?.minimum_daily ?? 0,
    minimum_monthly: employeeData?.minimum_monthly ?? 0,
    tax_id: employeeData?.tax_id || '',
    tax_witheld: toBoolean(employeeData?.active),
    sss_gsis: employeeData?.sss_gsis || '',
    sss_gsis_witheld: toBoolean(employeeData?.active),
    phic_id: employeeData?.phic_id || '',
    phic_witheld: toBoolean(employeeData?.active),
    hdmf_id: employeeData?.hdmf_id || '',
    hdmf_witheld: toBoolean(employeeData?.active),
    hdmf_account: employeeData?.hdmf_account || '',
    bank: employeeData?.bank || '',
    bank_account: employeeData?.bank_account || '',
    rate_type: employeeData?.rate_type || '',
    base_monthly_pay: employeeData?.base_monthly_pay ?? 0,
    days_per_month: employeeData?.days_per_month ?? 0,
    hours_per_day: employeeData?.hours_per_day ?? 0,
    daily_rate: employeeData?.daily_rate ?? 0,
    hourly_rate: employeeData?.hourly_rate ?? 0,
    col_allowance: employeeData?.col_allowance ?? 0,
    represent_allowance: employeeData?.represent_allowance ?? 0,
    housing_allowance: employeeData?.housing_allowance ?? 0,
    transportation_allowance: employeeData?.transportation_allowance ?? 0,
  };
};

const View = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedEmployee } = useSelector((state: RootState) => state.employee);
  const [updateEmployee] = useUpdateEmployeeMutation();

  const memoizedDefaultValues = useMemo(() => getEmployeeDefaultValues(selectedEmployee), [selectedEmployee]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: memoizedDefaultValues,
  });

  const onSubmit: SubmitHandler<EmployeeFormValues> = async (values: EmployeeFormValues) => {
    try {
      const employee = await updateEmployee({
        id: selectedEmployee.id,
        employee_id: values.employee_id,
        first_name: values.first_name,
        middle_name: values.middle_name,
        last_name: values.last_name,
        suffix: values.suffix,
        address: values.address,
        city: values.city,
        province: values.province,
        zip: values.zip,
        location: values.location,
        department: values.department,
        project: values.project,
        team: values.team,
        position: values.position,
        employment: values.employment,
        user_profile: values.user_profile,
        manager: values.manager,
        vendor: values.vendor,
        email: values.email,
        phone: values.phone,
        ctc: values.ctc,
        ctc_place: values.ctc_place,
        ctc_date: values.ctc_date,
        ctc_amount_paid: values.ctc_amount_paid,
        notes: values.notes,
        pay_freq: values.pay_freq,
        sex: values.sex,
        active: values.active,
        birthday: values.birthday,
        date_hired: values.date_hired,
        kasambahay: values.kasambahay,
        regularized: values.regularized,
        separated: values.separated,
        contract_start: values.contract_start,
        contract_end: values.contract_end,
        minimum_earner: values.minimum_earner,
        minimum_daily: values.minimum_daily,
        minimum_monthly: values.minimum_monthly,
        tax_id: values.tax_id,
        tax_witheld: values.tax_witheld,
        sss_gsis: values.sss_gsis,
        sss_gsis_witheld: values.sss_gsis_witheld,
        phic_id: values.phic_id,
        phic_witheld: values.phic_witheld,
        hdmf_id: values.hdmf_id,
        hdmf_witheld: values.hdmf_witheld,
        hdmf_account: values.hdmf_account,
        bank: values.bank,
        bank_account: values.bank_account,
        rate_type: values.rate_type,
        base_monthly_pay: values.base_monthly_pay,
        days_per_month: values.days_per_month,
        hours_per_day: values.hours_per_day,
        daily_rate: values.daily_rate,
        hourly_rate: values.hourly_rate,
        col_allowance: values.col_allowance,
        represent_allowance: values.represent_allowance,
        housing_allowance: values.housing_allowance,
        transportation_allowance: values.transportation_allowance,
      }).unwrap();

      Swal.fire({
        color: '#0a0a0a',
        position: 'center',
        icon: 'success',
        title: 'Employee has been added',
        showConfirmButton: false,
        timer: 1500,
      });

      // navigate('/master-table/employees');
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
    <div>
      <div className='w-full p-2 bg-[#6366f1] text-white rounded text-center'>VIEW</div>
      <form
        className='mt-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='!grid grid-rows-2 lg:grid-rows-1 grid-cols-3 lg:grid-cols-8 gap-3 mb-4'>
          <div className='flex flex-col col-span-1'>
            <label>
              EmpID <RequiredText />
            </label>
            <Controller
              name='employee_id'
              control={control}
              render={({ field }) => (
                <InputText
                  type='text'
                  id='employee_id'
                  {...field}
                  className={`p-inputtext-sm ${errors.employee_id && 'p-invalid'}`}
                  readOnly={true}
                />
              )}
            />
            {errors.employee_id?.message && <FormError message={errors.employee_id.message} />}
          </div>

          <div className='flex flex-col col-span-2'>
            <label>
              First Name
              <RequiredText />
            </label>
            <Controller
              name='first_name'
              control={control}
              render={({ field }) => (
                <InputText
                  type='text'
                  id='first_name'
                  {...field}
                  className={`p-inputtext-sm ${errors.first_name && 'p-invalid'}`}
                  readOnly={true}
                />
              )}
            />
            {errors.first_name?.message && <FormError message={errors.first_name.message} />}
          </div>

          <div className='flex flex-col col-span-2'>
            <label>Middle Name</label>
            <Controller
              name='middle_name'
              control={control}
              render={({ field }) => (
                <InputText
                  type='text'
                  id='middle_name'
                  {...field}
                  className={`p-inputtext-sm`}
                  readOnly={true}
                />
              )}
            />
            {errors.middle_name?.message && <FormError message={errors.middle_name.message} />}
          </div>

          <div className='flex flex-col col-span-2'>
            <label>
              Last Name
              <RequiredText />
            </label>
            <Controller
              name='last_name'
              control={control}
              render={({ field }) => (
                <InputText
                  type='text'
                  id='last_name'
                  {...field}
                  className={`p-inputtext-sm ${errors.last_name && 'p-invalid'}`}
                  readOnly={true}
                />
              )}
            />
            {errors.last_name?.message && <FormError message={errors.last_name.message} />}
          </div>

          <div className='flex flex-col col-span-1'>
            <label>Suffix</label>
            <Controller
              name='suffix'
              control={control}
              render={({ field }) => (
                <InputText
                  type='text'
                  id='suffix'
                  {...field}
                  className={`p-inputtext-sm`}
                  readOnly={true}
                />
              )}
            />
            {errors.suffix?.message && <FormError message={errors.suffix.message} />}
          </div>
        </div>

        <div className='!grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <div className='col-span-1 flex flex-col gap-3'>
            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Address</label>
              <Controller
                name='address'
                control={control}
                render={({ field }) => (
                  <InputTextarea
                    autoResize
                    rows={2}
                    cols={10}
                    className='w-full col-span-4'
                    id='address'
                    {...field}
                    readOnly={true}
                  />
                )}
              />
              {errors.address?.message && <FormError message={errors.address.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>City</label>
              <div className='!grid grid-cols-8 col-span-4 gap-3'>
                <Controller
                  name='city'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='text'
                      id='city'
                      {...field}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.city && 'p-invalid'}`}
                      readOnly={true}
                    />
                  )}
                />
                {errors.city?.message && <FormError message={errors.city.message} />}

                <div className='w-full flex gap-2 items-center col-span-4'>
                  <label>Provice</label>
                  <Controller
                    name='province'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='text'
                        id='province'
                        {...field}
                        className={`p-inputtext-sm w-full col-span-2 ${errors.province && 'p-invalid'}`}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.province?.message && <FormError message={errors.province.message} />}
                </div>

                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Zip</label>
                  <Controller
                    name='zip'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='text'
                        id='zip'
                        {...field}
                        className={`p-inputtext-sm w-full col-span-2 ${errors.zip && 'p-invalid'}`}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.zip?.message && <FormError message={errors.zip.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Location</label>
              <Controller
                name='location'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='location'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Depart
                <br className='lg:hidden' />
                ment
              </label>
              <Controller
                name='department'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='department'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Project</label>
              <Controller
                name='project'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='project'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Team</label>
              <Controller
                name='team'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='team'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
              {errors.team?.message && <FormError message={errors.team.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Position</label>
              <Controller
                name='position'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='position'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
              {errors.position?.message && <FormError message={errors.position.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Employ
                <br className='lg:hidden' />
                ment
              </label>
              <Controller
                name='employment'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='employment'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                User <br className='lg:hidden' />
                Profile
              </label>
              <Controller
                name='user_profile'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='user_profile'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Manager/
                <br className='lg:hidden' />
                Supv
              </label>
              <Controller
                name='manager'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='manager'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Vendor</label>
              <Controller
                name='vendor'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='vendor'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Email <RequiredText />
              </label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <div className='p-inputtext-sm w-full col-span-4'>
                    <InputText
                      type='email'
                      id='email'
                      {...field}
                      className={`w-full ${errors.email && 'p-invalid'}`}
                      readOnly={true}
                    />
                  </div>
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Phone No.</label>
              <Controller
                name='phone'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='phone'
                    {...field}
                    className={`p-inputtext-sm w-full col-span-4 ${errors.phone && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>CTC/Valid ID</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='ctc'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='text'
                      id='ctc'
                      {...field}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.ctc && 'p-invalid'}`}
                      readOnly={true}
                    />
                  )}
                />
                {errors.ctc?.message && <FormError message={errors.ctc.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Place Issued</label>
                  <Controller
                    name='ctc_place'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='text'
                        id='ctc_place'
                        {...field}
                        className={`p-inputtext-sm w-full ${errors.ctc_place && 'p-invalid'}`}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.ctc_place?.message && <FormError message={errors.ctc_place.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>CTC Date</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='ctc_date'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='date'
                      id='ctc_date'
                      {...field}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.ctc_date && 'p-invalid'}`}
                      readOnly={true}
                    />
                  )}
                />
                {errors.ctc_date?.message && <FormError message={errors.ctc_date.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Amount Paid</label>
                  <Controller
                    name='ctc_amount_paid'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='number'
                        id='ctc_amount_paid'
                        value={field.value === undefined || field.value === null ? '' : String(field.value)}
                        className={`p-inputtext-sm w-full ${errors.ctc_amount_paid && 'p-invalid'}`}
                        onChange={(e) => {
                          const parsedValue = parseFloat(e.target.value);
                          field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                        }}
                        name={field.name}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.ctc_amount_paid?.message && <FormError message={errors.ctc_amount_paid.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Notes</label>
              <Controller
                name='notes'
                control={control}
                render={({ field }) => (
                  <InputTextarea
                    autoResize
                    rows={3}
                    cols={10}
                    className='p-inputtext-sm w-full col-span-4'
                    id='notes'
                    {...field}
                    readOnly={true}
                  />
                )}
              />
              {errors.notes?.message && <FormError message={errors.notes.message} />}
            </div>
          </div>

          <div className='col-span-1 flex flex-col gap-3'>
            <div className='!grid grid-cols-5 lg:items-center'>
              <label className='col-span-1 mt-2 lg:mt-0'>
                Pay Freq <RequiredText />
              </label>
              <div className='flex flex-wrap lg:!grid lg:grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='pay_freq'
                  control={control}
                  render={({ field }) => (
                    <div className='p-inputtext-sm w-full lg:col-span-2 '>
                      <InputText
                        type='text'
                        id='pay_freq'
                        {...field}
                        className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                        readOnly={true}
                      />
                    </div>
                  )}
                />

                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Sex</label>
                  <Controller
                    name='sex'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='text'
                        id='sex'
                        {...field}
                        className={`p-inputtext-sm w-full ${errors.rate_type && 'p-invalid'}`}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.sex?.message && <FormError message={errors.sex.message} />}
                </div>
                <div className='w-full flex gap-2 items-center lg:col-span-1 justify-end lg:justify-center'>
                  <label>Active</label>
                  {/* <Active /> */}
                  <Controller
                    name='active'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        inputId={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        className={errors.active ? 'p-invalid' : ''}
                        readOnly={true}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 lg:items-center'>
              <label className='col-span-1 mt-2 lg:mt-0'>
                Birthday
                <RequiredText />
              </label>
              <div className='flex flex-wrap lg:!grid lg:grid-cols-8 col-span-4 gap-3'>
                <Controller
                  name='birthday'
                  control={control}
                  render={({ field }) => (
                    <div className='p-inputtext-sm w-full col-span-3'>
                      <InputText
                        type='date'
                        id='birthday'
                        {...field}
                        className={`${errors.birthday && 'p-invalid'}`}
                        readOnly={true}
                      />
                      {errors.birthday?.message && <FormError message={errors.birthday.message} />}
                    </div>
                  )}
                />

                <div className='w-full flex gap-2 items-center lg:col-span-3'>
                  <label>
                    Date Hired
                    <RequiredText />
                  </label>
                  <Controller
                    name='date_hired'
                    control={control}
                    render={({ field }) => (
                      <div className='p-inputtext-sm w-full'>
                        <InputText
                          type='date'
                          id='date_hired'
                          {...field}
                          className={`${errors.date_hired && 'p-invalid'}`}
                          readOnly={true}
                        />
                        {errors.date_hired?.message && <FormError message={errors.date_hired.message} />}
                      </div>
                    )}
                  />
                </div>
                <div className='w-full flex gap-4 items-center lg:col-span-2 justify-end'>
                  <label>
                    Kasam
                    <br className='hidden lg:block' />
                    bahay
                  </label>
                  <Controller
                    name='kasambahay'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        inputId={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        className={errors.kasambahay ? 'p-invalid' : ''}
                        readOnly={true}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 lg:items-center gap-1'>
              <label className='col-span-1 mt-2 lg:mt-0'>
                Regular
                <br className='lg:hidden' />
                ized
              </label>
              <div className='flex flex-wrap lg:!grid lg:grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='regularized'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='date'
                      id='regularized'
                      {...field}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.regularized && 'p-invalid'}`}
                      readOnly={true}
                    />
                  )}
                />
                {errors.regularized?.message && <FormError message={errors.regularized.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Separated</label>
                  <Controller
                    name='separated'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='date'
                        id='separated'
                        {...field}
                        className={`p-inputtext-sm w-full ${errors.separated && 'p-invalid'}`}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.separated?.message && <FormError message={errors.separated.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 lg:items-center'>
              <label className='col-span-1 mt-2 lg:mt-0'>Contract Start</label>
              <div className='flex flex-wrap lg:!grid lg:grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='contract_start'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='date'
                      id='contract_start'
                      {...field}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.contract_start && 'p-invalid'}`}
                      readOnly={true}
                    />
                  )}
                />
                {errors.contract_start?.message && <FormError message={errors.contract_start.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Contract End</label>
                  <Controller
                    name='contract_end'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='date'
                        id='contract_end'
                        {...field}
                        className={`p-inputtext-sm w-full ${errors.contract_end && 'p-invalid'}`}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.contract_end?.message && <FormError message={errors.contract_end.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Minimum Earner</label>
              <div className='flex col-span-4 gap-4 items-center'>
                <Controller
                  name='minimum_earner'
                  control={control}
                  render={({ field }) => (
                    <div className='flex col-span-4 gap-4 items-center'>
                      <Checkbox
                        inputId={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        className={errors.minimum_earner ? 'p-invalid' : ''}
                        readOnly={true}
                      />
                      {field.value && (
                        <div className='flex flex-col gap-2'>
                          <div className='!grid grid-cols-5 items-center'>
                            <label className='col-span-2'>Satutory Minimum Daily Rate</label>
                            <Controller
                              name='minimum_daily'
                              control={control}
                              render={({ field }) => (
                                <div className='p-inputtext-sm w-full col-span-3 '>
                                  <InputText
                                    type='number'
                                    id='minimum_daily'
                                    value={field.value === undefined || field.value === null ? '' : String(field.value)}
                                    className={`w-full ${errors.minimum_daily && 'p-invalid'}`}
                                    onChange={(e) => {
                                      const parsedValue = parseFloat(e.target.value);
                                      field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                                    }}
                                    name={field.name}
                                    readOnly={true}
                                  />
                                  {errors.minimum_daily?.message && <FormError message={errors.minimum_daily.message} />}
                                </div>
                              )}
                            />
                          </div>
                          <div className='!grid grid-cols-5 items-center'>
                            <label className='col-span-2'>Satutory Minimum Monthly Rate</label>
                            <Controller
                              name='minimum_monthly'
                              control={control}
                              render={({ field }) => (
                                <div className='p-inputtext-sm w-full col-span-3 '>
                                  <InputText
                                    type='number'
                                    id='minimum_monthly'
                                    value={field.value === undefined || field.value === null ? '' : String(field.value)}
                                    className={`w-full ${errors.minimum_monthly && 'p-invalid'}`}
                                    onChange={(e) => {
                                      const parsedValue = parseFloat(e.target.value);
                                      field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                                    }}
                                    name={field.name}
                                    readOnly={true}
                                  />
                                  {errors.minimum_monthly?.message && <FormError message={errors.minimum_monthly.message} />}
                                </div>
                              )}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                TAX ID <RequiredText />
              </label>
              <div className='!grid grid-cols-7 col-span-4 gap-3'>
                <Controller
                  name='tax_id'
                  control={control}
                  render={({ field }) => (
                    <div className='p-inputtext-sm w-full col-span-5'>
                      <InputText
                        type='text'
                        id='tax_id'
                        {...field}
                        className={`w-full ${errors.tax_id && 'p-invalid'}`}
                        readOnly={true}
                      />
                      {errors.tax_id?.message && <FormError message={errors.tax_id.message} />}
                    </div>
                  )}
                />

                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Witheld</label>
                  <Controller
                    name='tax_witheld'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        inputId={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        className={errors.tax_witheld ? 'p-invalid' : ''}
                        readOnly={true}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                SSS/GSIS No.
                <RequiredText />
              </label>
              <div className='!grid grid-cols-7 col-span-4 gap-3'>
                <Controller
                  name='sss_gsis'
                  control={control}
                  render={({ field }) => (
                    <div className='p-inputtext-sm w-full col-span-5 '>
                      <InputText
                        type='text'
                        id='sss_gsis'
                        {...field}
                        className={`w-full ${errors.sss_gsis && 'p-invalid'}`}
                        readOnly={true}
                      />
                      {errors.sss_gsis?.message && <FormError message={errors.sss_gsis.message} />}
                    </div>
                  )}
                />

                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Witheld</label>
                  <Controller
                    name='sss_gsis_witheld'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        inputId={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        className={errors.sss_gsis_witheld ? 'p-invalid' : ''}
                        readOnly={true}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                PHIC ID
                <RequiredText />
              </label>
              <div className='!grid grid-cols-7 col-span-4 gap-3'>
                <Controller
                  name='phic_id'
                  control={control}
                  render={({ field }) => (
                    <div className='p-inputtext-sm w-full col-span-5'>
                      <InputText
                        type='text'
                        id='phic_id'
                        {...field}
                        className={`w-full ${errors.phic_id && 'p-invalid'}`}
                        readOnly={true}
                      />
                      {errors.phic_id?.message && <FormError message={errors.phic_id.message} />}
                    </div>
                  )}
                />

                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Witheld</label>
                  <Controller
                    name='phic_witheld'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        inputId={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        className={errors.phic_witheld ? 'p-invalid' : ''}
                        readOnly={true}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                HDMF ID
                <RequiredText />
              </label>
              <div className='!grid grid-cols-7 col-span-4 gap-3'>
                <Controller
                  name='hdmf_id'
                  control={control}
                  render={({ field }) => (
                    <div className='p-inputtext-sm w-full col-span-5'>
                      <InputText
                        type='text'
                        id='hdmf_id'
                        {...field}
                        className={`w-full ${errors.hdmf_id && 'p-invalid'}`}
                        readOnly={true}
                      />
                      {errors.hdmf_id?.message && <FormError message={errors.hdmf_id.message} />}
                    </div>
                  )}
                />

                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Witheld</label>
                  <Controller
                    name='hdmf_witheld'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        inputId={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        className={errors.hdmf_witheld ? 'p-invalid' : ''}
                        readOnly={true}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>HDMF Account</label>
              <Controller
                name='hdmf_account'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='hdmf_account'
                    {...field}
                    className={`p-inputtext-sm w-full col-span-3 ${errors.hdmf_account && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
              {errors.hdmf_account?.message && <FormError message={errors.hdmf_account.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Bank</label>
              <Controller
                name='bank'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='bank'
                    {...field}
                    className={`w-full col-span-4 ${errors.rate_type && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
              {errors.bank?.message && <FormError message={errors.bank.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Bank Account</label>
              <Controller
                name='bank_account'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='text'
                    id='bank_account'
                    {...field}
                    className={`p-inputtext-sm w-full col-span-4 ${errors.bank_account && 'p-invalid'}`}
                    readOnly={true}
                  />
                )}
              />
              {errors.bank_account?.message && <FormError message={errors.bank_account.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Rate Type</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='rate_type'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='text'
                      id='rate_type'
                      {...field}
                      className={`w-full col-span-2 ${errors.rate_type && 'p-invalid'}`}
                      readOnly={true}
                    />
                  )}
                />
                {errors.rate_type?.message && <FormError message={errors.rate_type.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Base Monthly Pay</label>
                  <Controller
                    name='base_monthly_pay'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='number'
                        id='base_monthly_pay'
                        value={field.value === undefined || field.value === null ? '' : String(field.value)}
                        className={`p-inputtext-sm w-full ${errors.base_monthly_pay && 'p-invalid'}`}
                        onChange={(e) => {
                          const parsedValue = parseFloat(e.target.value);
                          field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                        }}
                        name={field.name}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.base_monthly_pay?.message && <FormError message={errors.base_monthly_pay.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Days per Month</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='days_per_month'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='number'
                      id='days_per_month'
                      value={field.value === undefined || field.value === null ? '' : String(field.value)}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.days_per_month && 'p-invalid'}`}
                      onChange={(e) => {
                        const parsedValue = parseFloat(e.target.value);
                        field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                      }}
                      name={field.name}
                      readOnly={true}
                    />
                  )}
                />
                {errors.days_per_month?.message && <FormError message={errors.days_per_month.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Hours per Day</label>
                  <Controller
                    name='hours_per_day'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='number'
                        id='hours_per_day'
                        value={field.value === undefined || field.value === null ? '' : String(field.value)}
                        className={`p-inputtext-sm w-full ${errors.hours_per_day && 'p-invalid'}`}
                        onChange={(e) => {
                          const parsedValue = parseFloat(e.target.value);
                          field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                        }}
                        name={field.name}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.hours_per_day?.message && <FormError message={errors.hours_per_day.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Daily Rate</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='daily_rate'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='number'
                      id='daily_rate'
                      value={field.value === undefined || field.value === null ? '' : String(field.value)}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.daily_rate && 'p-invalid'}`}
                      onChange={(e) => {
                        const parsedValue = parseFloat(e.target.value);
                        field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                      }}
                      name={field.name}
                      readOnly={true}
                    />
                  )}
                />
                {errors.daily_rate?.message && <FormError message={errors.daily_rate.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Hourly Rate</label>
                  <Controller
                    name='hourly_rate'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='number'
                        id='hourly_rate'
                        value={field.value === undefined || field.value === null ? '' : String(field.value)}
                        className={`p-inputtext-sm w-full ${errors.hourly_rate && 'p-invalid'}`}
                        onChange={(e) => {
                          const parsedValue = parseFloat(e.target.value);
                          field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                        }}
                        name={field.name}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.hourly_rate?.message && <FormError message={errors.hourly_rate.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Const of Living Allowance</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='col_allowance'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='number'
                      id='col_allowance'
                      value={field.value === undefined || field.value === null ? '' : String(field.value)}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.col_allowance && 'p-invalid'}`}
                      onChange={(e) => {
                        const parsedValue = parseFloat(e.target.value);
                        field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                      }}
                      name={field.name}
                      readOnly={true}
                    />
                  )}
                />
                {errors.col_allowance?.message && <FormError message={errors.col_allowance.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Representation Allowance</label>
                  <Controller
                    name='represent_allowance'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='number'
                        id='represent_allowance'
                        value={field.value === undefined || field.value === null ? '' : String(field.value)}
                        className={`p-inputtext-sm w-full ${errors.represent_allowance && 'p-invalid'}`}
                        onChange={(e) => {
                          const parsedValue = parseFloat(e.target.value);
                          field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                        }}
                        name={field.name}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.represent_allowance?.message && <FormError message={errors.represent_allowance.message} />}
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Housing Allowance</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <Controller
                  name='housing_allowance'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      type='number'
                      id='housing_allowance'
                      value={field.value === undefined || field.value === null ? '' : String(field.value)}
                      className={`p-inputtext-sm w-full col-span-2 ${errors.housing_allowance && 'p-invalid'}`}
                      onChange={(e) => {
                        const parsedValue = parseFloat(e.target.value);
                        field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                      }}
                      name={field.name}
                      readOnly={true}
                    />
                  )}
                />
                {errors.housing_allowance?.message && <FormError message={errors.housing_allowance.message} />}
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Transportation Allowance</label>
                  <Controller
                    name='transportation_allowance'
                    control={control}
                    render={({ field }) => (
                      <InputText
                        type='number'
                        id='transportation_allowance'
                        value={field.value === undefined || field.value === null ? '' : String(field.value)}
                        className={`p-inputtext-sm w-full ${errors.transportation_allowance && 'p-invalid'}`}
                        onChange={(e) => {
                          const parsedValue = parseFloat(e.target.value);
                          field.onChange(isNaN(parsedValue) ? undefined : parsedValue);
                        }}
                        name={field.name}
                        readOnly={true}
                      />
                    )}
                  />
                  {errors.transportation_allowance?.message && <FormError message={errors.transportation_allowance.message} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default View;
