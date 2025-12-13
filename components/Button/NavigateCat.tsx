"use client"
import Link from "next/link"
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined'

type Props = {
    locale : string
}

const NavigateCat = ({ locale } : Props) => {
  return (
    <Link 
        href={`/${locale}/dashboard/appointments`}
        className="bg-black rounded px-4 py-2"
    >
        <CallMadeOutlinedIcon fontSize="medium" sx={{ color : "white" }}/>
    </Link>
  )
}

export default NavigateCat