import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';
import { useState } from 'react';

interface City {
  name: string;
  code: string;
}

const Employment = () => {
  const [selected, setSelected] = useState<City | null>(null);

  const options: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Employment'
      className='w-full col-span-4'
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => setSelected(e.value)}
      value={selected}
    />
  );
};

export default Employment;
