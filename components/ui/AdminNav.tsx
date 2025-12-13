"use client"

import { useTranslations } from "next-intl"
import SignOut from "../AuthForm/SignOut"
import UserAvatar from "./UserAvatar"


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
            <button className="flex flex-col items-center">
                <UserAvatar 
                    src={user.image} 
                    name={user.name} 
                    size="md"
                />
                <p className="text-sm">{user.name}</p>
            </button>
        </nav>
    )
}
export default AdminNav