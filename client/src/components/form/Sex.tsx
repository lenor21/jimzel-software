import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface SexOption {
  name: string;
  code: string;
}

interface SexProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Sex = ({ value, onChange, name, className }: SexProps) => {
  const options: SexOption[] = [
    { name: 'Male', code: 'Male' },
    { name: 'Female', code: 'Female' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Sex'
      className={`p-inputtext-sm w-full ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as SexOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Sex;
