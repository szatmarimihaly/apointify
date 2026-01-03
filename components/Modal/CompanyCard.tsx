import type { InferSelectModel } from "drizzle-orm"
import { company } from "@/db/company-schema"
import { InfoRow } from "../Display/InfoRow";
import DeleteCompany from "../Button/DeleteCompany";

type Company = InferSelectModel<typeof company>;

type Props = {
    company : Company,
    text : string
}

export default function CompanyCard({ company, text } : Props) {
    return(
        <div className="w-full mx-2 max-w-xl rounded-2xl px-4 py-6 border-2 border-gray-100 shadow-md shadow-black/10">
            <div className="flex flex-col items-center gap-4 mb-6">

                <div className="flex items-center gap-10">
                    <div className="h-16 w-16 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">Logo</div>
                    <div>
                        <h2 className="text-xl font-semibold">{company.name}</h2>
                        <p className="text-sm text-gray-500">appointify.com/{company.slug}</p>
                    </div>
                </div>

                {company.description && (
                    <p className="text-sm text-gray-700 mb-6 w-full text-center">{company.description}</p>
                )}

                <div className="space-y-3 text-sm">
                    <InfoRow label="Email" value={company.email} />
                    <InfoRow label="Phone" value={company.phone ?? "—"} />
                    <InfoRow label="Timezone" value={company.timezone} />
                </div>

                <DeleteCompany text={text}/>
            </div>
        </div>
    )
}