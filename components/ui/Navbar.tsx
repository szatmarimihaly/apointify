"use client"
import React from "react"
import LanguageSwitcher from "../Button/LanguageSwitcher"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import Purple from "../Button/Purple";
import SignButton from "../Button/SignButton";

const SUPPORTED_LOCALES = ['en', 'hu']

type Props = {
  locale : string
}

const Navbar = ({ locale } : Props ) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const pathname = usePathname()

  const t = useTranslations("Navbar");

  const normalizedPath = React.useMemo(() => {
        if (!pathname) return '/'
        const parts = pathname.split('/').filter(Boolean)
        const first = parts[0]
        if (SUPPORTED_LOCALES.includes(first)) {
        return '/' + (parts[1] ? parts.slice(1).join('/') : '')
        }
        return pathname
    }, [pathname])

    const getLinkClass = (path : string) => {
      const isHome = path === '/' && SUPPORTED_LOCALES.some(locale => pathname === `/${locale}`);

      const isActive = isHome || normalizedPath === path;
      return `hover:text-purple-500 transition-all duration-300 ${isActive ? "text-purple-600 font-bold" : "text-black"}`
    }

  return (
    <nav className="px-2 py-4 shadow-gray-200 shadow-md">
        <div className={`flex flex-col ${isOpen ? "pb-4" : ""}`}>
          <div className="flex justify-between items-center">
            <button 
              className="border-2 border-gray-200 rounded-xl p-2 shadow-gray-200 shadow-lg lg:hidden"
              onClick={toggleMenu}
            >
              {isOpen ? <CloseOutlinedIcon fontSize="large"/> : <MenuOutlinedIcon fontSize="large"/>}
            </button>

            <Image
              src='/logo/2.svg'
              alt="Logo"
              width={100}
              height={20}
              priority
            />

            <div className="hidden lg:flex space-x-8 text-xl">
              <Link href="." className={getLinkClass('/')}>
                {t('home')}
              </Link>

              <Link href={`/${locale}/rolunk`} className={getLinkClass('/rolunk')}>
                {t('about')}
              </Link>

              <Link href={`/${locale}/rolunk`} className={getLinkClass('/rolunk')}>
                {t('about')}
              </Link>

              <Link href={`/${locale}/rolunk`} className={getLinkClass('/rolunk')}>
                {t('about')}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <SignButton text={t('login')} locale={locale} href={`dashboard`}/>
              <LanguageSwitcher/>
            </div>
          </div>

          {isOpen && (
            <div className="flex flex-col items-center space-y-8 mt-10 lg:hidden">
              <Link href="." className={getLinkClass('/')} onClick={() => setIsOpen(false)}>
                {t('home')}
              </Link>

              <Link href="." className={getLinkClass('/rolunk')} onClick={() => setIsOpen(false)}>
                {t('about')}
              </Link>

              <Purple text={t('login')} locale={locale} href={`dashboard`}/>
            </div>
          )}
        </div>
    </nav>
  )
}

export default Navbar