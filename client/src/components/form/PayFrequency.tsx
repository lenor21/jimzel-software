import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface PayFrequencyOption {
  name: string;
  code: string;
}

interface PayFrequencyProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const PayFrequency = ({ value, onChange, name, className }: PayFrequencyProps) => {
  const options: PayFrequencyOption[] = [
    { name: 'Monthly', code: 'Monthly' },
    { name: 'SemiMonthly', code: 'SemiMonthly' },
    { name: 'Weekly', code: 'Weekly' },
    { name: 'BiWeekly', code: 'BiWeekly' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Pay Frequency'
      className={`${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as PayFrequencyOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default PayFrequency;
