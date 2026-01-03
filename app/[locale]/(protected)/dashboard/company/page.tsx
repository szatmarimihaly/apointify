import CreateCompany from "@/components/Button/CreateCompany"
import CompanyCard from "@/components/Modal/CompanyCard"
import { db } from "@/db"
import { company } from "@/db/company-schema"
import { auth } from "@/lib/auth"
import { eq } from "drizzle-orm"
import { getTranslations } from "next-intl/server"
import { headers } from "next/headers"

type Params = {
  params : { locale : string }
}

type Props ={
  params : { locale : string }  
}

export default async function Page ({ params } : Props) {

  const { locale } = await params;
  const t = await getTranslations({ locale })

  const session = await auth.api.getSession({
    headers : await headers()
  });

  const userId = session!.user.id;

  const existingCompany = await db.query.company.findFirst({
    where : eq(company.ownerUserId, userId)
  });

  if (!existingCompany) {
    return (
      <div className="flex items-center justify-center">
        <CreateCompany text={t("CreateCompanyButton.buttonText")}/>
      </div>
    )
  }  

  return(
    <div className="flex justify-center pt-10">
      <CompanyCard company={existingCompany} text={t("CreateCompanyButton.deleteText")} edittext={t("CreateCompanyButton.editText")}/>
    </div>
  )
  
}