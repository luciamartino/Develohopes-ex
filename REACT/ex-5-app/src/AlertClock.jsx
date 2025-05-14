export function AlertClock({label, eventHandler}){

    return (
        <div>
            <button onClick={eventHandler}>{label}</button>
        </div>
    )
}