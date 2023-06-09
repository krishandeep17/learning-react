import Button from "./Button";

const Friend = ({ friend, selectedFriend, onSelection }) => {
  const { id, name, image, balance } = friend;

  return (
    <li className={selectedFriend?.id === id ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3 className="capitalize">{name}</h3>
      {balance < 0 ? (
        <p className="red">
          You owe <span className="capitalize">{name}</span> ₹
          {Math.abs(balance)}
        </p>
      ) : balance > 0 ? (
        <p className="green">
          <span className="capitalize">{name}</span> owes you ₹{balance}
        </p>
      ) : (
        <p>
          You and <span className="capitalize">{name}</span> are even
        </p>
      )}

      <Button onClick={() => onSelection(friend)}>
        {selectedFriend?.id === id ? "Close" : "Select"}
      </Button>
    </li>
  );
};

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
