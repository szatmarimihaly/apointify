"use client"
import Link from "next/link"
import { useParams } from "next/navigation"

const LanguageSwitcher = () => {

    const { locale } = useParams();
    const nextLocale = locale === 'en' ? 'hu' : 'en';

  return (
    <Link
        href={`/${nextLocale}`}
        prefetch
        className="px-4 py-2 border-2 border-black shadow-black shadow-sm hover:bg-black hover:text-white rounded-xl"
    >
        {typeof locale === 'string' ? locale.toUpperCase() : 'HU'}
    </Link>
  )
}

export default LanguageSwitcher