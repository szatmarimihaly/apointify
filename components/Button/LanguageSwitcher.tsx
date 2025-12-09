"use client"
import Link from "next/link"
import { useParams } from "next/navigation"

const LanguageSwitcher = () => {

    const { locale } = useParams();
    const nextLocale = locale === 'en' ? 'hu' : 'en'

  return (
    <Link
        href={`/${nextLocale}`}
        prefetch
    >
        {typeof locale === 'string' ? locale.toUpperCase() : 'HU'}
    </Link>
  )
}

export default LanguageSwitcher