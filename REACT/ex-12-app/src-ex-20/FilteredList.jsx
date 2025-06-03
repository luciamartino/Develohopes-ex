import { useMemo } from "react"

export function FilteredList({items}){

const filteredItems = useMemo(() => {
    return items.filter((i) => i.age > 18)
}, [items])


    return(
        <>
        <div className="list">
            <h1>ex 2</h1>
            <h2>list</h2>
            <ul>
                {items.map(({name, age, id}) => (
                    <li key={id}>
                        name: {name}, <br/>
                        age: {age}
                    </li>
                ))}
            </ul>
            <h2> age &gt; 18 </h2>
            <ul>
                {filteredItems.map(({name, age, id}) => (
                    <li key={id}>
                        name: {name}, <br/>
                        age: {age}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}