"use client"
import Link from "next/link"
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined'

type Props = {
    href : string
}

const NavigateCat = ({ href } : Props) => {
  return (
    <Link 
        href={href}
        className="bg-black rounded px-4 py-2"
    >
        <CallMadeOutlinedIcon fontSize="medium" sx={{ color : "white" }}/>
    </Link>
  )
}

export default NavigateCat