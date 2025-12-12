import React from 'react'
import SignUp from '@/components/AuthForm/SignUp'
import { getTranslations } from 'next-intl/server';

type Props = {
  params : { locale : string }  
}

export default async function Page ({ params } : Props) {

  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <main>
      <SignUp locale={locale}/>
    </main>
  )
}
