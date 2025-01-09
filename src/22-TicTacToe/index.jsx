import {useState } from "react"


const TicTacToc = ()=>{
const initalBoard = Array(9).fill(null)
const [board, setBoard] = useState(initalBoard)
const [isXnext, setIsXnext] = useState(true)
const [winner, setWinner] = useState(null)




    return(
      <></>
    )
}

export default TicTacToc