"use client"

import { ReactEventHandler, useState } from "react"
import { signUp } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Spinner from "../ui/Spinner"
import { useTranslations } from "next-intl"
import { generateAvatar } from "@/utils/profile/avatarUtils"

type Props = {
    locale : string
}

const SignUp = ({ locale } : Props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const t = useTranslations("Form");

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if(password.length < 8) {
            setError("Password must be at least 8 characters long")
            setLoading(false)
            return;
        }

        try{

            const avatarUrl = generateAvatar(name, email);

            await signUp.email({
                email,
                password,
                name,
                image : avatarUrl,
                callbackURL : `/${locale}/dashboard`
            });
            router.push(`/${locale}/dashboard`)
            router.refresh();
        }catch(error : any){
            setError(error.message || "Failed to create account. Email may already exist.")
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className="flex flex-col w-full max-w-5xl lg:w-120 mx-auto px-4 py-6 rounded border-2 border-gray-100 shadow-gray-100 shadow-xl">
        <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-3xl">{t("h1")}</h1>
            <p className="text-sm lg:text-md text-gray-700">{t("description")}</p>
        </div>

        {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg my-4">
                {error}
            </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-200 focus:outline-none w-full px-4 py-2 rounded-lg shadow-gray-200 shadow-md"
                placeholder={t('username')}
                required
            />

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
                {loading ? <Spinner /> : t('signup')}
            </button>

            <p className="text-gray-700 text-sm text-center">{t("accountno")} <Link href={`/${locale}/sign-in`} className="underline">{t('accountlogin')}</Link> </p>
        </form>
    </div>
  )
}

export default SignUp