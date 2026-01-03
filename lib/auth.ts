import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db"  

export const auth = betterAuth({
    appUrl : process.env.APP_URL!,
    secret : process.env.BETTER_AUTH_SECRET!,
    database : drizzleAdapter(db, {
        provider : 'pg'
    }),
    emailAndPassword : {
        enabled : true
    }
})