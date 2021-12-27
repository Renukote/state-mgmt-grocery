import { useState } from "react";

export const GroceryInput = ({getData}) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }


    return <div>
        <input type="text" name="" id="" placeholder="Enter Item name here" onChange = {handleChange}/>
        <button onClick = {() => getData(text)}>Add to list</button>
    </div>
}