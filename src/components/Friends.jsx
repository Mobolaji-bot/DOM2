import { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(["Alex", "James"]);
  const newF = () => setFriends([...friends, "Bolaji"]);
  const rem = () => setFriends(friends.filter((friends) => friends != "James"));
  const erf = () => setFriends(friends.map((friends) => friends === "James" ? "James smith":friends));

  return (
    <section>
      {friends.map((friends) => (
        <ul key={Math.random()}>
          <li>{friends}</li>
        </ul>
      ))}
      <button onClick={newF}>Add new friend</button>
      <button onClick={rem}>Remove</button>
      <button onClick={erf}>edit</button>
    </section>
  );
};

export default Friends;
