"use client"
import Link from "next/link"
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined'

type Props = {
  locale: string,
  text: string
}

const BorderButton = ({ text, locale }: Props) => {
  return (
    <Link
      href={``}
      className="bg-black px-4 py-2 text-white text-lg rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
    >
      {text}
      <PlayCircleOutlineOutlinedIcon fontSize="medium" sx={{ color:"white" }}/>
    </Link>
  )
}

export default BorderButton