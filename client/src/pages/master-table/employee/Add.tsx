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
import Active from '../../../components/form/Active';
import RateType from '../../../components/form/RateType';
import Bank from '../../../components/form/Bank';
import Tax from '../../../components/form/witheld/Tax';
import MinimumEarner from '../../../components/form/MinimumEarner';
import { Button } from 'primereact/button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { employeeFormSchema } from '../../../schemas/employeeSchema';
import type { EmployeeFormValues } from '../../../schemas/employeeSchema';
import FormError from '../../../components/form/FormError';

const Add = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      employee_id: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      suffix: '',
      address: '',
      city: '',
      province: '',
      zip: '',
      location: '',
      department: '',
      project: '',
      team: '',
      position: '',
      employment: '',
      user_profile: '',
      manager: '',
      vendor: '',
      ctc: '',
      ctc_place: '',
      ctc_date: '',
      ctc_amount_paid: 0,
      notes: '',
    },
  });

  const onSubmit = async (values: EmployeeFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <div className='w-full p-2 bg-[#6366f1] text-white rounded text-center'>ADD</div>
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
                  <Location
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.location ? 'p-invalid' : ''}
                  />
                )}
              />
              {errors.location?.message && <FormError message={errors.location.message} />}
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
                  <Department
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.department ? 'p-invalid' : ''}
                  />
                )}
              />
              {errors.department?.message && <FormError message={errors.department.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Project</label>
              <Controller
                name='project'
                control={control}
                render={({ field }) => (
                  <Project
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.department ? 'p-invalid' : ''}
                  />
                )}
              />
              {errors.department?.message && <FormError message={errors.department.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Team</label>
              <Controller
                name='team'
                control={control}
                render={({ field }) => (
                  <Team
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.team ? 'p-invalid' : ''}
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
                  <Position
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.position ? 'p-invalid' : ''}
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
                  <Employment
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.employment ? 'p-invalid' : ''}
                  />
                )}
              />
              {errors.employment?.message && <FormError message={errors.employment.message} />}
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
                  <User
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.user_profile ? 'p-invalid' : ''}
                  />
                )}
              />
              {errors.user_profile?.message && <FormError message={errors.user_profile.message} />}
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
                  <Manager
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.manager ? 'p-invalid' : ''}
                  />
                )}
              />
              {errors.manager?.message && <FormError message={errors.manager.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Vendor</label>
              <Controller
                name='vendor'
                control={control}
                render={({ field }) => (
                  <Vendor
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    className={errors.vendor ? 'p-invalid' : ''}
                  />
                )}
              />
              {errors.vendor?.message && <FormError message={errors.vendor.message} />}
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Email <RequiredText />
              </label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <InputText
                    type='email'
                    id='email'
                    {...field}
                    className={`p-inputtext-sm w-full col-span-4 ${errors.email && 'p-invalid'}`}
                  />
                )}
              />
              {errors.email?.message && <FormError message={errors.email.message} />}
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
                  />
                )}
              />
              {errors.phone?.message && <FormError message={errors.phone.message} />}
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
                <PayFrequency />
                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Sex</label>
                  <Sex />
                </div>
                <div className='w-full flex gap-2 items-center lg:col-span-1 justify-end lg:justify-center'>
                  <label>Active</label>
                  <Active />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 lg:items-center'>
              <label className='col-span-1 mt-2 lg:mt-0'>Birthday</label>
              <div className='flex flex-wrap lg:!grid lg:grid-cols-8 col-span-4 gap-3'>
                <InputText
                  type='date'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center lg:col-span-3'>
                  <label>Date Hired</label>
                  <InputText
                    type='date'
                    className='p-inputtext-sm w-full col-span-1'
                  />
                </div>
                <div className='w-full flex gap-4 items-center lg:col-span-3 justify-end'>
                  <label>
                    Kasam
                    <br className='hidden lg:block' />
                    bahay
                  </label>
                  <Active />
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
                <InputText
                  type='date'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Separated</label>
                  <InputText
                    type='date'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 lg:items-center'>
              <label className='col-span-1 mt-2 lg:mt-0'>Contract Start</label>
              <div className='flex flex-wrap lg:!grid lg:grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='date'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Contract End</label>
                  <InputText
                    type='date'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Minimum Earner</label>
              <MinimumEarner />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>TAX ID</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-3'
                />
                <div className='w-full flex gap-2 items-center col-span-1'>
                  <label>Witheld</label>
                  <Tax />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                SSS/GSIS No.
                <RequiredText />{' '}
              </label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-3'
                />
                <div className='w-full flex gap-2 items-center col-span-1'>
                  <label>Witheld</label>
                  <Tax />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                PHIC ID
                <RequiredText />{' '}
              </label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-3'
                />
                <div className='w-full flex gap-2 items-center col-span-1'>
                  <label>Witheld</label>
                  <Tax />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                HDMF ID
                <RequiredText />{' '}
              </label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-3'
                />
                <div className='w-full flex gap-2 items-center col-span-1'>
                  <label>Witheld</label>
                  <Tax />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>HDMF Account</label>
              <InputText
                type='text'
                className='p-inputtext-sm w-full col-span-3'
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Bank</label>
              <Bank />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Bank Account</label>
              <InputText
                type='text'
                className='p-inputtext-sm w-full col-span-4'
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Rate Type</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <RateType />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Base Monthly Pay</label>
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Days per Month</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Hours per Day</label>
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Daily Rate</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Hourly Rate</label>
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Const of Living Allowance</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Representation Allowance</label>
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Housing Allowance</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Transportation Allowance</label>
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='my-10 flex justify-center gap-4'>
          <Button
            type='submit'
            label='Add Employee'
          />
          <Button label='Cancel' />
        </div>
      </form>
    </div>
  );
};

export default Add;
