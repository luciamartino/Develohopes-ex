export function Message({age2}){
    if (age2 > 18){
        return <p>This Message shows that you are {age2} years old!</p>
    }else{
        return <p>You are very young!</p>
    }
}