import React from "react"

type Props = {
    text : string
}

const Description = ({ text } : Props) => {
  return (
    <p className="text-gray-500 w-full max-w-2xl mx-auto text-xl">{text}</p>
  )
}

export default Description