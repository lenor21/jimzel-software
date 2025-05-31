import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface PositionOption {
  name: string;
  code: string;
}

interface PositionProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Position = ({ value, onChange, name, className }: PositionProps) => {
  const options: PositionOption[] = [
    { name: 'President', code: 'president' },
    { name: 'Secretary', code: 'secretary' },
    { name: 'Auditor', code: 'auditor' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Position'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as PositionOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Position;
