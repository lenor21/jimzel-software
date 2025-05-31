import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface RateTypeOption {
  name: string;
  code: string;
}

interface RateTypeProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const RateType = ({ value, onChange, name, className }: RateTypeProps) => {
  const options: RateTypeOption[] = [
    { name: 'Monthly Rate', code: 'Monthly Rate' },
    { name: 'Weekly Rate', code: 'Weekly Rate' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a RateType'
      className={`w-full col-span-2 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as RateTypeOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default RateType;
