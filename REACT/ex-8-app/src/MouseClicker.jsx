export function MouseClicker(){
    
    function handleMouseClick(event){
        console.log(event.currentTarget.name)
    }

    function handleMouseClick2(event){
        if(event.target.src == undefined){
            console.log("Click on the IMAGE")
        }else{
            console.log(event.target.src)

        }
    }
    return (
        <div>
            <button onClick={handleMouseClick} name="one">CLICK ME</button>
            <button onClick={handleMouseClick2} name="two"><img src={"./src/itadori.jpg"} width={"90px"} height={"90px"} />DO NOT CLICK ME OR ELSE</button>
        </div>
    )
}