"use client";

type Props = {
    onClick : () => void;
    text : string
}

const EditCompany = ({ onClick, text } : Props) => {
  return (
    <button
        onClick={onClick}
        className="w-full py-2 rounded-xl bg-black text-white shadow-black shadow-md"
    >{text}</button>
  )
}

export default EditCompany