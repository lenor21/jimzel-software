import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface VendorOption {
  name: string;
  code: string;
}

interface VendorProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Vendor = ({ value, onChange, name, className }: VendorProps) => {
  const options: VendorOption[] = [
    { name: 'Finance Consultant', code: 'Finance Consultant' },
    { name: 'Business Consultant', code: 'Business Consultant' },
    { name: 'HR Consultant', code: 'HR Consultant' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Vendor'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as VendorOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Vendor;
