import SignIn from '@/components/AuthForm/SingIn'
import { getTranslations } from 'next-intl/server';

type Props = {
  params : { locale : string }  
}

export default async function Page({ params } : Props){

  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <main className='main-prop'>
      <SignIn locale={locale}/>
    </main>
  )
}
