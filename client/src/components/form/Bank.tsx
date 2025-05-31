import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface BankOption {
  name: string;
  code: string;
}

interface BankProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Bank = ({ value, onChange, name, className }: BankProps) => {
  const options: BankOption[] = [
    { name: 'Metro Bank', code: 'Metro Bank' },
    { name: 'China Bank', code: 'China Bank' },
    { name: 'BPI', code: 'BPI' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Bank'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as BankOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Bank;
