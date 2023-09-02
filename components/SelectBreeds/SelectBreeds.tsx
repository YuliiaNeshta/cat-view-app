import Select from '@/components/Select';
import { useGetBreedsQuery } from '@/redux/apiRequest/breedsApi';
import { FC } from 'react';

const SelectBreeds: FC = () => {
  const { data: breedsData = [], isLoading } = useGetBreedsQuery();

  const onlyBreeds = breedsData.map(item => item.name);
  console.log(onlyBreeds);

  return <Select data={onlyBreeds} />;
};

export default SelectBreeds;
