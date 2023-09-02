'use client';

import { getBreedsBySearch } from '@/data/services';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;

    setValue(value);
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = () => {
    getBreedsBySearch(value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={value} onChange={handleInputChange} />;<button type="submit">search</button>
    </form>
  );
};

export default Search;
