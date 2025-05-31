import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface ProjectOption {
  name: string;
  code: string;
}

interface ProjectProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Project = ({ value, onChange, name, className }: ProjectProps) => {
  const options: ProjectOption[] = [
    { name: 'Manila Payroll Project', code: 'manila_payroll' },
    { name: 'Audit Manager', code: 'audit_manager' },
    { name: 'Jimzel ERP System', code: 'erp_system' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Project'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as ProjectOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Project;
