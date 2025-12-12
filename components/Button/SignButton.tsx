import Link from "next/link"

type Props = {
    locale : string,
    text : string,
    href : string
}

const SignButton = ({ locale, text, href } : Props) => {
  
  
    return (
    <Link
        href={`${locale}/${href}`}
        className="px-4 py-2 rounded-lg bg-linear-to-tr from-fuchsia-600 to-purple-500 text-xl text-white transition-all duration-300 hover:scale-105 hidden lg:block"
    >
        {text}
    </Link>
  )
}

export default SignButton