import { useState } from "react"

export function TodoList(){

    const [ items, setItems ] = useState([])
    const [ singleItem, setSingleItem ] = useState("")

     
    function handleItemChange(event){
        setSingleItem(event.target.value)
    }

    function handleAddingItems(event){
        event.preventDefault()
        setItems([...items, singleItem])
        setSingleItem("")
    }

    function handleRemoveItems(index){
        // setItems((prev) => prev.filter((c) => c != element))
        setItems((prev) => { //prev is the last value we have (meaning the ITEMS array)
            const itemscopy = [... prev] //we cannot change the array value directly, therefore we need a spread operator to copy it
            itemscopy.splice(index, 1) //we take the array copy, we ask splice to take each element and cut it by 1
            return itemscopy} //we return the new array 
        )}

    function handleReset(){
        setItems([])
    }

    return(
        <>
        <div className="elements">
            <input name="item" value={singleItem} onChange={handleItemChange} placeholder="write smt" />
            <div className="buttons">
                <button onClick={handleAddingItems}>ADD</button>
                <button onClick={handleReset} >RESET</button>
            </div>
                
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}
                    <button onClick={() =>handleRemoveItems(index)}>REMOVE</button>

                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

//the ITEMS array is populated through the ADD button, that add the SINGLEITEM to the empty array
//the input has the new value hold in the onChange event and then it is passed to the handleAddingItems -> it populates the array -> new <li>
//the <ul> is shown only when the ITEMS array is populated