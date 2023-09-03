'use client';

import CatInfoCard from '@/components/CatInfoCard/CatInfoCard';
import Slider from '@/components/Slider/Slider';
import { useGetPhotosQuery } from '@/redux/apiRequest/breedsApi';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  params: {
    breed: string;
  };
};

const Breed: FC<Props> = ({ params: { breed } }) => {
  const { data: breedsData = [], isLoading } = useGetPhotosQuery({
    breedId: breed,
    limit: '8',
  });

  console.log(breed, 'id');

  const { origin, description, life_span, weight, temperament, name } = breedsData[0].breeds[0];

  return (
    <>
      <Slider>
        {breedsData &&
          breedsData.map((item, _index) => (
            <SwiperSlide key={_index}>
              <img src={item.url} />
            </SwiperSlide>
          ))}
      </Slider>
      <CatInfoCard
        id={breed}
        breedName={name}
        origin={origin}
        description={description}
        life={life_span}
        weight={weight?.metric}
        temperament={temperament}
      />
    </>
  );
};

export default Breed;
