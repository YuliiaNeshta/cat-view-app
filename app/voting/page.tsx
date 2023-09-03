'use client';

import VoteButtons from '@/components/VoteButtons';
import { IVote } from '@/providers/models/IVote';
import {
  useAddVoteMutation,
  useGetBreedsQuery,
  useGetPhotosQuery,
  useGetVotesQuery,
} from '@/redux/apiRequest/breedsApi';
import { Metadata, ResolvingMetadata } from 'next';
import { Props } from 'next/script';

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: 'Voting | Pets Paw',
  };
}

const userId = 'pets-paw-3456';

export default function Voting() {
  const { data, isLoading, isError } = useGetPhotosQuery('1');
  const { data: dataVotes = [] } = useGetVotesQuery('5');
  const [createVote, {}] = useAddVoteMutation();
  console.log(data, 'CAT data');
  console.log(dataVotes, 'dataVotes');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (!data || !data[0]) {
    return <div>No data available</div>;
  }

  const { url, id } = data[0] || {};

  const sendVote = async voteValue => {
    const voteData: IVote = {
      image_id: id,
      sub_id: userId,
      value: voteValue,
    };

    await createVote(voteData);
  };

  const formatDate = created_at => {
    const date = new Date(created_at);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  console.log(dataVotes);
  return (
    <>
      <h1>Voting</h1>
      <img width="200" src={url} />
      <VoteButtons onLike={() => sendVote(0)} onDislike={() => sendVote(1)} />
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
