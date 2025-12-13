import SignOut from '@/components/AuthForm/SignOut'
import AdminCards from '@/components/Card/AdminCards'
import { getTranslations } from 'next-intl/server'

type Props = {
  locale : string
  params : Promise<{ locale : string }>
}

export default async function Page({ params } : Props) {

  const { locale } = await params;
  const t = await getTranslations({ locale })

  return (
    <main className='main-prop'>
      <AdminCards locale={locale} text="ProfileCard"/>
    </main>
  )
}