import Profile from './components/profile/profile';
import React from "react";
import friend from "./components/friendList/friend.json";
import FriendList from "./components/friendList/friendlist";
import userData from "./components/profile/useData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions  from "./components/TransactionHistory/transactions.json";

import './App.css'


function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </div>  );
}


export default App;

