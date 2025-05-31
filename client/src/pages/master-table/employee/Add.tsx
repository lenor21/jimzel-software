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
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
                <div className='w-full flex gap-2 items-center col-span-2'>
                  <label>Zip</label>
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Location</label>
              <Location />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Depart
                <br className='lg:hidden' />
                ment
              </label>
              <Department />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Project</label>
              <Project />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Team</label>
              <Team />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Position</label>
              <Position />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Employ
                <br className='lg:hidden' />
                ment
              </label>
              <Employment />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                User <br className='lg:hidden' />
                Profile
              </label>
              <User />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Manager/
                <br className='lg:hidden' />
                Supv
              </label>
              <Manager />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Vendor</label>
              <Vendor />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>
                Email <RequiredText />
              </label>
              <InputText
                type='text'
                className='p-inputtext-sm w-full col-span-4'
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Phone No.</label>
              <InputText
                type='text'
                className='p-inputtext-sm w-full col-span-4'
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>CTC/Valid ID</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Place Issued</label>
                  <InputText
                    type='text'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>CTC Date</label>
              <div className='!grid grid-cols-5 col-span-4 gap-3'>
                <InputText
                  type='date'
                  className='p-inputtext-sm w-full col-span-2'
                />
                <div className='w-full flex gap-2 items-center col-span-3'>
                  <label>Amount Paid</label>
                  <InputText
                    type='number'
                    className='p-inputtext-sm w-full'
                  />
                </div>
              </div>
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Notes</label>
              <InputTextarea
                value='hello'
                rows={3}
                cols={10}
                className='p-inputtext-sm w-full col-span-4'
              />
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
