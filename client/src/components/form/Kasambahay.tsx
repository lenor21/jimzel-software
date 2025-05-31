import { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const Kasambahay = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Checkbox
      onChange={(e) => setChecked(e.checked)}
      checked={checked}
    ></Checkbox>
  );
};

export default Kasambahay;
