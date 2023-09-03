import { FC, useState } from 'react';

interface VoteButtonsProps {
  onLike: () => void;
  onDislike: () => void;
  toggleFav: () => void;
  liked: boolean;
}

const VoteButtons: FC<VoteButtonsProps> = ({ onLike, onDislike, toggleFav, liked }) => {
  return (
    <div>
      <button onClick={onLike}>like</button>
      <button onClick={toggleFav}>{liked ? '❤️' : '🤍'}</button>
      <button onClick={onDislike}>dislike</button>
    </div>
  );
};

export default VoteButtons;
