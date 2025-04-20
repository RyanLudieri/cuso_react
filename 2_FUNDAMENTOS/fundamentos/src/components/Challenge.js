const Challenge = () => {

    const n1 = 4
    const n2 = 8

    const clickSoma = () => {
        return console.log(n1 + n2)
    } 

    return(
        <div>
            <p>A: {n1}</p>
            <p>B: {n2}</p>
            <button onClick={clickSoma}>Clique para somar os valores!</button>
        </div>
    )
}

export default Challenge 