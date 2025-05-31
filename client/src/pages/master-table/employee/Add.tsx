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

const Add = () => {
  return (
    <div>
      <div className='w-full p-2 bg-[#6366f1] text-white rounded text-center'>ADD</div>
      <form
        action=''
        className='mt-4'
      >
        <div className='!grid grid-rows-2 lg:grid-rows-1 grid-cols-3 lg:grid-cols-8 gap-3 mb-4'>
          <div className='flex flex-col col-span-1'>
            <label>
              EmpID <RequiredText />
            </label>
            <InputText
              type='text'
              className='p-inputtext-sm w-full'
            />
          </div>
          <div className='flex flex-col col-span-2'>
            <label>
              First Name
              <RequiredText />
            </label>
            <InputText
              type='text'
              className='p-inputtext-sm'
            />
          </div>
          <div className='flex flex-col col-span-2'>
            <label>Middle Name</label>
            <InputText
              type='text'
              className='p-inputtext-sm'
            />
          </div>
          <div className='flex flex-col col-span-2'>
            <label>
              Last Name
              <RequiredText />
            </label>
            <InputText
              type='text'
              className='p-inputtext-sm'
            />
          </div>
          <div className='flex flex-col col-span-1'>
            <label>Suffix</label>
            <InputText
              type='text'
              className='p-inputtext-sm'
            />
          </div>
        </div>

        <div className='!grid grid-cols-2 gap-3'>
          <div className='col-span-1 flex flex-col gap-3'>
            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Address</label>
              <InputTextarea
                autoResize
                value=''
                rows={2}
                cols={10}
                className='w-full col-span-4'
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>City</label>
              <div className='!grid grid-cols-8 col-span-4 gap-3'>
                <InputText
                  type='text'
                  className='p-inputtext-sm w-full col-span-2'
                />
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
              <label className='col-span-1'>Department</label>
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
              <label className='col-span-1'>Employment</label>
              <Employment />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>User Profile</label>
              <User />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Manager/Supv</label>
              <Manager />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Vendor</label>
              <Vendor />
            </div>
          </div>

          <div className='col-span-1 flex flex-col gap-3'>
            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Address</label>
              <InputText
                type='text'
                className='p-inputtext-sm w-full col-span-4'
              />
            </div>

            <div className='!grid grid-cols-5 items-center'>
              <label className='col-span-1'>Address</label>
              <InputText
                type='text'
                className='p-inputtext-sm w-full col-span-4'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
