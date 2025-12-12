import Link from "next/link"

type Props = {
    locale : string,
    text : string
}

const Dark = ({ locale, text } : Props) => {
  
  
    return (
    <Link
        href={`/${locale}/start`}
        className="px-4 py-2 rounded-lg bg-linear-to-r from-fuchsia-600 to-purple-500 text-xl text-white"
    >
        {text}
    </Link>
  )
}

export default Dark