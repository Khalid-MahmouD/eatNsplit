import { useState } from "react";
import Button from "./Button";

export default function FormSpliteBill({ selectedFriend, onSplite }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidByUser) return;
        onSplite(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
        setWhoIsPaying('user');
        setBill('');
        setPaidByUser('');
        // setPaidByFriend('');
    };
    return <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💲Bill Value</label>
        <input type="text" value={bill} onChange={e => setBill(e.target.value)} />

        <label>🕺Your expense</label>
        <input type="text" value={paidByUser} onChange={e => setPaidByUser(
            +e.target.value > bill ? paidByUser : +e.target.value
        )} />

        <label>👩🏽‍🤝‍👩🏼{selectedFriend.name}'s expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label>🤑Who is paying the bill</label>
        <select name="" id="" value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Splite Bill</Button>
    </form>;
}
