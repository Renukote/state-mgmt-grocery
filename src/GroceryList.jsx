export const GroceryList = ({title, status, id, deleteItem}) => {
    return <div>
        {title}
        <button onClick = {() => deleteItem({id})}>Delete</button>
    </div>
}