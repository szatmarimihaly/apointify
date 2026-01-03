"use client";

import { useEffect, useRef, useTransition } from "react"
import { createCompany } from "@/app/[locale]/(protected)/dashboard/company/actions"
import Spinner from "../ui/Spinner";


type Props = {
    onClose: () => void;
}

export default function CreateCompanyModal({ onClose } : Props) {

    const [isPending, startTransition] = useTransition();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if(e.key === "Escape") onClose();
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    function onSubmit(formData: FormData){
        startTransition(() => {
            createCompany({
                name: formData.get("name") as string,
                description : formData.get("description") as string,
                email: formData.get("email") as string,
                phone: formData.get("phone") as string
            });
        });
    }

    return(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center border-2 border-gray-100 shadow-md shadow-black/10"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            >
                <h2 className="text-xl font-semibold mb-1">Create company</h2>
                <p className="text-sm text-gray-500 mb-6">
                This will be your public booking profile.
                </p>

                {/* Image placeholder */}
                <div className="mb-5 flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    Logo
                </div>
                <p className="text-sm text-gray-500">
                    Logo upload coming soon
                </p>
                </div>

                <form action={onSubmit} className="space-y-4">
                <input
                    name="name"
                    required
                    placeholder="Company name"
                    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <textarea
                    name="description"
                    placeholder="Short description"
                    rows={3}
                    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                    name="email"
                    type="email"
                    required
                    placeholder="Business email"
                    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <div className="flex justify-end gap-3 pt-4">
                    <button
                    type="button"
                    onClick={onClose}
                    className="text-sm text-gray-500 hover:text-black"
                    >
                    Cancel
                    </button>

                    <button
                    type="submit"
                    disabled={isPending}
                    className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
                    >
                    {isPending ? <Spinner/> : "Create company"}
                    </button>
                </div>
                </form>
            </div>
        </div>
    )

}
