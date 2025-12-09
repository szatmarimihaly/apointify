import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import type { ReactNode } from "react"
import { NextIntlClientProvider } from "next-intl"
import "../globals.css"
import Navbar from "@/components/ui/Navbar"

type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout({ children, params } : { children : ReactNode, params : Promise<{ locale : string }> }){

    const { locale } = await params;

    if(!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return(
        <html lang={locale} >

            <header>
                <Navbar />
            </header>
            <body>
                <NextIntlClientProvider locale={locale as Locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )

}