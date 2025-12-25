"use client"

import { useTranslations } from "next-intl"
import SignOut from "../AuthForm/SignOut"
import UserAvatar from "./UserAvatar"
import Link from "next/link"


type User = {
  id: string;
  name: string;
  email: string;
  image ?: string | null | undefined;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type Props = {
    locale: string;
    user: User;
}

const AdminNav = ({ locale, user }: Props) => {
    const t = useTranslations("Navbar")

    return (
        <nav className="flex items-center justify-between px-4 py-3 shadow-gray-200 shadow-md bg-white">
            <SignOut text={t("logout")} />
            <Link href={`/${locale}/dashboard/profile`} className="flex flex-col items-center transition-all duration-200 hover:scale-105">
                <UserAvatar 
                    src={user.image} 
                    name={user.name} 
                    size="md"
                />
            </Link>
        </nav>
    )
}
export default AdminNav