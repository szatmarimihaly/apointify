import { getTranslations } from "next-intl/server"
import NavigateCat from "../Button/NavigateCat"


interface AdminCard {
    id : number,
    title : string,
    description : string,
    href : string
}


type Props = {
    text : string,
    locale : string
}

export default async function AdminCards({ locale, text } : Props) {

    const t = await getTranslations({ locale });
    const maintext = t.raw(text) as AdminCard[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-4">
        {maintext.map((item : AdminCard) => {
            return(
                <div
                    key={item.id}
                    className="flex flex-col items-start shadow-gray-300 shadow-md px-4 py-6 rounded-2xl transition-all duration-300 hover:scale-105"
                >
                    <h3 className="text-start text-2xl font-semibold">{item.title}</h3>
                    <p className="text-start text-gray-700">{item.description}</p>
                    <div className="w-full flex justify-end mt-10">
                        <NavigateCat href={`/${locale}${item.href}`}/>
                    </div>
                </div>
            )
        })}       
    </div>
  )
}