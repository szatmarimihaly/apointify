import { db } from "@/db";
import { company } from "@/db/company-schema";
import { eq } from "drizzle-orm";
import { slugifyCompanyName } from "@/utils/db/slugify";

export const COMPANY_TIMEZONE = "Europe/Budapest";

type CompanyData = {
  name: string;
  description?: string;
  email: string;
  phone?: string;
};

export async function createCompanyForUser(
  userId: string,
  data: CompanyData
) {
  const existing = await db.query.company.findFirst({
    where: eq(company.ownerUserId, userId),
  });

  if (existing) {
    throw new Error("User already has a company");
  }

  const slug = slugifyCompanyName(data.name);

  await db.insert(company).values({
    ownerUserId: userId,
    name: data.name,
    slug,
    description: data.description ?? null,
    email: data.email,
    phone: data.phone ?? null,
    timezone: COMPANY_TIMEZONE,
  });
}

export async function deleteCompanyForUser(userId: string) {
  await db.delete(company).where(eq(company.ownerUserId, userId));
}

export async function updateCompanyForUser(userId : string, data : CompanyData) {
  await db.update(company).set({
    name : data.name,
    description : data.description,
    email : data.email,
    phone : data.phone,
    updatedAt : new Date()
  }).where(eq(company.ownerUserId, userId));
}