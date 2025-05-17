import { Counter } from "./Counter";
import { Clock } from "./Clock";
import "./counter.css"

export function App(){
    return (
        <div>
            <Counter initialValue={4} incrementValue={9} />
            <Clock />
        </div>
    )
}