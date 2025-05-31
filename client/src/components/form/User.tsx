import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface UserOption {
  name: string;
  code: string;
}

interface UserProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const User = ({ value, onChange, name, className }: UserProps) => {
  const options: UserOption[] = [
    { name: 'Admin', code: 'Admin' },
    { name: 'User', code: 'User' },
    { name: 'Manager', code: 'Manager' },
    { name: 'Supervisor', code: 'Supervisor' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a User'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as UserOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default User;
