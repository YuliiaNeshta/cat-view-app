'use client';

import VoteButtons from '@/components/VoteButtons';
import { IFavourite } from '@/providers/models/IFavourite';
import { IVote } from '@/providers/models/IVote';
import {
  useAddFavouriteMutation,
  useAddVoteMutation,
  useDeleteFavouriteMutation,
  useGetBreedsQuery,
  useGetPhotosQuery,
  useGetVotesQuery,
} from '@/redux/apiRequest/breedsApi';
import { Metadata, ResolvingMetadata } from 'next';
import { Props } from 'next/script';
import { useState } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Voting | Pets Paw',
  };
}

const userId = 'pets-paw-3456';

export default function Voting() {
  const { data, isLoading, isError } = useGetPhotosQuery('1');
  const { data: dataVotes = [] } = useGetVotesQuery('5');
  const [createVote] = useAddVoteMutation();
  const [addFav] = useAddFavouriteMutation();
  const [deleteFav] = useDeleteFavouriteMutation();
  const [liked, setLiked] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (!data || !data[0]) {
    return <div>No data available</div>;
  }

  console.log(data);

  const { url, id } = data[0] || {};

  const sendVote = async voteValue => {
    const voteData: IVote = {
      image_id: id,
      sub_id: userId,
      value: voteValue,
    };

    await createVote(voteData);
  };

  const onToggleFav = async () => {
    const favData: IFavourite = {
      image_id: id,
      sub_id: userId,
    };

    if (liked) {
      await deleteFav(favData.image_id);
      console.log(favData.image_id, 'image id');
    } else {
      await addFav(favData);
    }

    setLiked(!liked);
  };

  console.log();

  const formatDate = created_at => {
    const date = new Date(created_at);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  return (
    <>
      <h1>Voting</h1>
      <img width="200" src={url} alt={id} />
      <VoteButtons onLike={() => sendVote(0)} onDislike={() => sendVote(1)} liked={liked} toggleFav={onToggleFav} />
      {console.log(liked, 'like')}
      {dataVotes.map(vote => (
        <div key={vote.id}>
          <span>{formatDate(vote.created_at)}</span>
          <h3>
            Image ID: {vote.image_id} was added to {vote.value === 0 ? 'Likes' : 'Dislikes'}
          </h3>
        </div>
      ))}
    </>
  );
}
