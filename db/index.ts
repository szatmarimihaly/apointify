import { drizzle } from "drizzle-orm/postgres-js"  
import postgres from "postgres"
import * as authSchema from "./auth-schema"
import * as companySchema from "./company-schema"

const connectionString = process.env.DATABASE_URL!;

export const client = postgres(connectionString, { prepare : false });

const schema = {
    ...authSchema,
    ...companySchema
};
export const db = drizzle(client, { schema });

export * from "./auth-schema";
export * from "./company-schema"
