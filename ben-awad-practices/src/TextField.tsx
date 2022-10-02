import React from 'react'
import {useState} from "react"

interface Props {
    text: string;

}

const TextField: React.FC <Props> = () => {
  const [count, setCount] = useState(1)
  // while you use useState it dectects type into as a number.
  setCount(count + 1);
 
    return (
    <div><input/></div>
  )
}

export default TextField