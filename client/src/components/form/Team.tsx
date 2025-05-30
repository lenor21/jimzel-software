import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface TeamOption {
  name: string;
  code: string;
}

interface TeamProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Team = ({ value, onChange, name, className }: TeamProps) => {
  const options: TeamOption[] = [
    { name: 'Finance Team', code: 'Finance Team' },
    { name: 'Business Team', code: 'Business Team' },
    { name: 'HR Team', code: 'HR Team' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Team'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as TeamOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Team;
