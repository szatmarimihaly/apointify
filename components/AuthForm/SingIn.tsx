"use client"
import Spinner from "../ui/Spinner"
import { FormEvent, ReactEventHandler, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn } from "@/lib/auth-client"
import { useTranslations } from "next-intl"

type Props = {
    locale : string 
}

const SingIn = ({ locale } : Props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter();
    const t = useTranslations("Form")

    const handleSubmit = async(e : FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("")

        try{
            await signIn.email({
                email,
                password,
                callbackURL : `/${locale}/dashboard`
            })
            router.push(`/${locale}/dashboard`)
            router.refresh();
        }catch(error : any){
            setError(error.message || "Failed to login to your account.")
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className="flex flex-col w-full max-w-5xl lg:w-120 mx-auto px-4 py-6 rounded border-2 border-gray-100 shadow-gray-100 shadow-xl">
            <div className="text-center mb-10">
                <h1 className="text-3xl lg:text-3xl">{t("h11")}</h1>
                <p className="text-sm lg:text-md text-gray-700">{t("description1")}</p>
            </div>
    
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg my-4">
                    {error}
                </div>
            )}
    
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">       
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-200 focus:outline-none w-full px-4 py-2 rounded-lg shadow-gray-200 shadow-md"
                    placeholder={t('email')}
                    required
                />
    
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-200 focus:outline-none w-full px-4 py-2 rounded-lg shadow-gray-200 shadow-md"
                    placeholder={t('password')}
                    required
                />
    
                <button 
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white py-2 rounded-lg mt-10"
                >
                    {loading ? <Spinner /> : t('signin')}
                </button>
    
                <p className="text-gray-700 text-sm text-center">{t("accountyes")} <Link href={`/${locale}/sign-up`} className="underline">{t('accountcreate')}</Link> </p>
            </form>
        </div>
  )
}

export default SingIn