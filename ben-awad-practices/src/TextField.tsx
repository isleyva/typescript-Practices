import React from 'react'
import {useState} from "react"

interface Props {
    text: string;

}

interface textNode {
    text: string
}

const TextField: React.FC <Props> = () => {
  const [count, setCount] = useState <textNode> ({text: "text"})
  // while you use useState it dectects type into as a number.
  
 
    return (
    <div><input/></div>
  )
}

export default TextField