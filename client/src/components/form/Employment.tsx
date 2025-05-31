import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface EmploymentOption {
  name: string;
  code: string;
}

interface EmploymentProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Employment = ({ value, onChange, name, className }: EmploymentProps) => {
  const options: EmploymentOption[] = [
    { name: 'Probationary', code: 'probationary' },
    { name: 'Regular', code: 'regular' },
    { name: 'Contractual', code: 'contractual' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Employment'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as EmploymentOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Employment;
