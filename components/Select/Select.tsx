'use client';

import { ChangeEventHandler, FC, useState } from 'react';

interface SelectProps {
  label?: string;
  data: string[];
}

const Select: FC<SelectProps> = ({ label, data }) => {
  const [option, setOption] = useState('');

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = event => {
    setOption(event.target.value);
  };

  return (
    <select value={option} onChange={handleSelectChange}>
      {data.map(item => (
        <option value={item}>
          {label}
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
