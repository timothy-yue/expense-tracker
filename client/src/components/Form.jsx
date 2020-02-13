import React, { useState } from 'react'

export default function Form(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const handleChange = (e) => {
        console.log(e.target.name);
    }

    return (
        <div>
            <input type="text" placeholder="Transaction" name="setTitle" onChange={handleChange}/>
            <input type="text" placeholder="Description" name="setDescription" onChange={handleChange}/>
            <input type="number" pattern="\d*" placeholder="Price" name="setPrice" onChange={handleChange}/>
        </div>
    )
}
