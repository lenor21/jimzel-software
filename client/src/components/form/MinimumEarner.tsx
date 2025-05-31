import { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';

const MinimumEarner = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className='flex col-span-4 gap-4 items-center'>
      <Checkbox
        onChange={(e) => setChecked(e.checked)}
        checked={checked}
      ></Checkbox>
      {checked && (
        <>
          <div className='!grid grid-cols-5 items-center'>
            <label className='col-span-2'>Satutory Minimum Daily Rate</label>
            <InputText
              type='number'
              className='p-inputtext-sm w-full col-span-3'
            />
          </div>
          <div className='!grid grid-cols-5 items-center'>
            <label className='col-span-2'>Satutory Minimum Monthly Rate</label>
            <InputText
              type='number'
              className='p-inputtext-sm w-full col-span-3'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MinimumEarner;
