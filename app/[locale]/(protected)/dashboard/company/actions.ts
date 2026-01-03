"use server";

import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth/getCurrentUser"
import { deleteCompanyForUser, createCompanyForUser } from "@/lib/company/service"

type CreateCompanyInput = {
  name : string,
  description ?: string,
  email : string,
  phone ?: string
}

export async function createCompany(data: CreateCompanyInput) {
  const user = await getCurrentUser();

  await createCompanyForUser(user.id, data);

  redirect("/hu/dashboard");
}

export async function deleteCompany() {
  const user = await getCurrentUser();

  await deleteCompanyForUser(user.id);

  redirect("/hu/dashboard/company");
}