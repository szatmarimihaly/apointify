import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

type Props = {
    params : { locale : Locale }
}

export default async function Page({ params } : Props) {

    const { locale } = await Promise.resolve(params); 
    const t = await getTranslations({ locale })

  return (
    <main>
        <h1>{t('Navbar.hello')}</h1>
    </main>
  )
}