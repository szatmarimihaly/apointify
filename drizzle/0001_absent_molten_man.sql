CREATE TABLE "company" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_user_id" text NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"timezone" text DEFAULT 'Europe/Budapest' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "company" ADD CONSTRAINT "company_owner_user_id_user_id_fk" FOREIGN KEY ("owner_user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "company_owner_user_unique" ON "company" USING btree ("owner_user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "company_slug_unique" ON "company" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "company_owner_user_idx" ON "company" USING btree ("owner_user_id");