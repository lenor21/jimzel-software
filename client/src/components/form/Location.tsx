import { Dropdown } from 'primereact/dropdown';
import type { DropdownChangeEvent } from 'primereact/dropdown';

interface LocationOption {
  name: string;
  code: string;
}

interface LocationProps {
  value: string | null;
  onChange: (value: string | null) => void;
  name: string;
  className?: string;
}

const Location = ({ value, onChange, name, className }: LocationProps) => {
  const options: LocationOption[] = [
    { name: 'Metro Manila', code: 'metro_manila' },
    { name: 'Las Vegas', code: 'las_vegas' },
  ];

  const selectedOption = options.find((option) => option.code === value) || null;

  return (
    <Dropdown
      options={options}
      optionLabel='name'
      placeholder='Select a Location'
      className={`w-full col-span-4 ${className || ''}`}
      checkmark={true}
      highlightOnSelect={false}
      onChange={(e: DropdownChangeEvent) => onChange(e.value ? (e.value as LocationOption).code : null)}
      value={selectedOption}
      name={name}
    />
  );
};

export default Location;
