import { signOutAction } from "@/actions/auth-actions"

type Props = {
    text : string
}


const SignOut = ({ text } : Props) => {
  return (
    <button
        onClick={signOutAction}
        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4"
    >
        {text}
    </button>
  )
}

export default SignOut