import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48?u=499476');
    function handleSubmit(e) {
        if (!name || !image) return;
        e.preventDefault();
        const id = crypto.randomUUID();

        const newFriend = {
            name, image: `${image}?${id}`, balance: 0, id,
        };
        onAddFriend(newFriend);
        // console.log(newFriend.id);
        setName('');
        setImage('https://i.pravatar.cc/48?u=new');
    }
    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>Friend name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />

            <label>💟Image URL</label>
            <input type="text" value={image} onChange={e => setImage(e.target.value)} />

            <Button>Add</Button>
        </form>
    );
}
