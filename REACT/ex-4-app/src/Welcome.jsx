import { Age } from "./Age";
import { Message } from "./Message";

export function Welcome({name, age}){
    return (
        <>
        <p>Welcome, {name}!</p>
        <div>
            {(age > 18) && <Age age1={age} />}
        </div>
        <div>
            { age && <Age  age1={age} />}
        </div>
        <div>
            {(age > 18 && age < 65) && <Age age1={age} />}
        </div>
        <div>
            {(age > 18 && name === "John") && <Age age1={age} />}
        </div>
        <Age age1={age} />
        <Message  age2={age}/>
        </>
    )
}