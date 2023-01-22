import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import { UserProfile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./Friends/FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";

export const App = () => {
  return (
    <>
      < UserProfile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
