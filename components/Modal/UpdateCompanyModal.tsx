"use client";

import { useEffect, useRef, useTransition } from "react";
import { updateCompany } from "@/app/[locale]/(protected)/dashboard/company/actions";
import Spinner from "../ui/Spinner";

type Props = {
  company: {
    name: string;
    description?: string | null;
    email: string;
    phone?: string | null;
  };
  onClose: () => void;
};

export default function EditCompanyModal({ company, onClose }: Props) {
  const [isPending, startTransition] = useTransition();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function onSubmit(formData: FormData) {
    startTransition(() => {
      updateCompany({
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
      });
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-1 text-xl font-semibold">Edit company</h2>
        <p className="mb-6 text-sm text-gray-500">
          Update your public booking profile.
        </p>

        <form action={onSubmit} className="space-y-4">
          <input
            name="name"
            required
            defaultValue={company.name}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-black"
          />

          <textarea
            name="description"
            rows={3}
            defaultValue={company.description ?? ""}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-black"
          />

          <input
            name="email"
            type="email"
            required
            defaultValue={company.email}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-black"
          />

          <input
            name="phone"
            defaultValue={company.phone ?? ""}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-black"
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
              {isPending ? <Spinner /> : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
