import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import Hero from "@/components/Hero/Hero"
import Description from "@/components/Hero/Description"
import Purple from "@/components/Button/Purple"
import BorderButton from "@/components/Button/BorderButton"
import Navbar from "@/components/ui/Navbar"

type Locale = (typeof routing.locales)[number];

type Props = {
    params : { locale : Locale }
}

export default async function Page({ params } : Props) {

    const { locale } = await Promise.resolve(params); 
    const t = await getTranslations({ locale })

  return (
    <>
      <header>
        <Navbar locale={locale}/>
      </header>
    
    <main className="main-prop">
        <section className="hero-prop flex flex-col items-center gap-10">
          <Hero text={t('Hero.mainHero')} locale={locale}/>
          <Description text={t('Hero.description')}/>
        </section>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mt-4">
          <Purple text={t('Button.start')} locale={locale} href={`dashboard`} />
          <BorderButton text={t('Button.watch')} locale={locale}/>
        </div>

    </main>
    </>
  )
}