import { GroceryInput } from './GroceryInput.jsx';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { GroceryList } from './GroceryList.jsx';

export const Grocery = () => {
    const [list, setList] = useState([]);

    const handleClick = (data) => {
        console.log("The data in parent is :", data);

        const item = {
            title: data,
            status: false,
            id: nanoid(7)
        }
        setList([...list, item]);

        // alert("New item has been added");
    }

    const deleteItem = ({id}) => {
        console.log("delete item is working with the id :", id);
        // code goes here

        const newList = list.filter(e => {
            if(e.id !== id) return true;
        });

        setList(newList);
    }

    return(
        <>
            <GroceryInput getData={handleClick}/>
            {list.map(e => (
                <GroceryList {...e} key={e.id} deleteItem={deleteItem} />
            ))}
        </>
    )
}