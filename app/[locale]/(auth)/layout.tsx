import type { ReactNode } from "react"

export default async function AuthLayout ({ children } : { children: ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4">
      {children}
    </div>
  )
}

