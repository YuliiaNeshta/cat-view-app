'use client';

import CatImage from '@/components/CatImage';
import SelectBreeds from '@/components/SelectBreeds';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useGetBreedsQuery } from '@/redux/apiRequest/breedsApi';
import { setCount } from '@/redux/features/limitSlice';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './breeds.module.scss';
import { ChangeEventHandler, useState } from 'react';

export const metadata: Metadata = {
  title: 'Breeds | Pets Paw',
};

export default function Breeds() {
  const [countLocal, setCountLocalLocal] = useState('10');
  const { data: breedsData = [], isLoading } = useGetBreedsQuery(countLocal);

  const dispatch = useAppDispatch();

  //const globalCount = useAppSelector(state => state.limits.count);

  if (isLoading) return <h1>Loading...</h1>;

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const selectedCount = e.target.value;
    setCountLocalLocal(selectedCount);
    dispatch(setCount(selectedCount));
  };

  return (
    <div>
      <select value={countLocal} onChange={handleSelectChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <SelectBreeds />
      <div className={styles.wrapper}>
        {breedsData.map(breed => (
          <Link href={`/breeds/${breed.id}`} key={breed.id} className={styles.card}>
            <div>{breed.name}</div>
            <CatImage breedId={breed.id} breedName={breed.name} isLiked={false} />
          </Link>
        ))}
      </div>
    </div>
  );
}
