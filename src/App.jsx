const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

import { useState } from 'react'
import { Button, FormAddFriend, FormSpliteBill, FriendsList } from './components/index.js';

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);


  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  }
  const handleSelection = (e, friend) => {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
    setShowAddFriend((_) => false)
  }

  const handleAddFriend = (newFriend) => {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddFriend(false);
  }
  const handleSplit = (value) => {
    setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? " Add friend" : "close"}
        </Button>
      </div>

      {selectedFriend && <FormSpliteBill selectedFriend={selectedFriend} onSplite={handleSplit} />}
    </div>
  )
}
