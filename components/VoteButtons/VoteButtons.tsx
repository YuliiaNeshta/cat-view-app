const VoteButtons = ({ onLike, onDislike }) => {
  return (
    <div>
      <button onClick={onLike}>like</button>
      <button>heart</button>
      <button onClick={onDislike}>dislike</button>
    </div>
  );
};

export default VoteButtons;
