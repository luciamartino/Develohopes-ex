import { Color } from "./Color";

export function Colors({colors}){
    return (
        <>
            <ul>
                {colors.map((c) =>( //each element inside the colors array, which are objects
                    // <Color key={c.id} {c.name} />
                    <Color key={c.id} color={c} />
                ))}
            </ul>
        </>
    )
}