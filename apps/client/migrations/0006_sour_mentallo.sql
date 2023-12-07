CREATE TABLE IF NOT EXISTS "user_blocked" (
	"user_id" varchar NOT NULL,
	"blocked_id" varchar NOT NULL,
	CONSTRAINT user_blocked_user_id_blocked_id_pk PRIMARY KEY("user_id","blocked_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_pending" (
	"user_id" varchar NOT NULL,
	"pending_id" varchar NOT NULL,
	CONSTRAINT user_pending_user_id_pending_id_pk PRIMARY KEY("user_id","pending_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_blocked" ADD CONSTRAINT "user_blocked_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_blocked" ADD CONSTRAINT "user_blocked_blocked_id_users_id_fk" FOREIGN KEY ("blocked_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_pending" ADD CONSTRAINT "user_pending_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_pending" ADD CONSTRAINT "user_pending_pending_id_users_id_fk" FOREIGN KEY ("pending_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
