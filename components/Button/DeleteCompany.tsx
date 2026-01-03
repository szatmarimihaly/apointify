"use client";

import { useTransition } from "react"
import { deleteCompany } from "@/app/[locale]/(protected)/dashboard/company/actions";
import Spinner from "@/components/ui/Spinner"

type Props = {
    text : string
}

const DeleteCompany = ({ text } : Props) => {

    const [isPending, startTransition] = useTransition();

    const onDelete = () => {
        const confirmed = confirm(
        "Are you sure you want to delete your company? This action cannot be undone."
        );

        if (!confirmed) return;

        startTransition(() => {
        deleteCompany();
        });
    };

  return (
    <button
        onClick={onDelete}
        disabled={isPending}
        className="bg-red-200 rounded-xl w-full py-2 mt-20"
    >
        {isPending ? <Spinner/> : text}
    </button>
  )
}

export default DeleteCompany