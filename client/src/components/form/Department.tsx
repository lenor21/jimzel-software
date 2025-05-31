import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface DepartmentOption {
  name: string;
  code: string;
}

interface DepartmentProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Department = ({ value, onChange, name, className }: DepartmentProps) => {
  const options: DepartmentOption[] = [
    { name: 'Finance Department', code: 'finance_dep' },
    { name: 'Business Department', code: 'business_dep' },
    { name: 'HR Department', code: 'hr_dep' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Department'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as DepartmentOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Department;
