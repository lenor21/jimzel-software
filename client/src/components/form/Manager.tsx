import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface ManagerOption {
  name: string;
  code: string;
}

interface ManagerProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Manager = ({ value, onChange, name, className }: ManagerProps) => {
  const options: ManagerOption[] = [
    { name: 'Jose Rizal', code: 'jose_rizal' },
    { name: 'Andress Bonifacio', code: 'andress_bonifacio' },
    { name: 'Juan Luna', code: 'juan_luna' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Manager'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as ManagerOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Manager;
