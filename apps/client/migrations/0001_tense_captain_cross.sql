CREATE TABLE IF NOT EXISTS "user_servers" (
	"user_id" varchar PRIMARY KEY NOT NULL,
	"server_id" varchar PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "servers" RENAME COLUMN "ownerId" TO "owner_id";--> statement-breakpoint
ALTER TABLE "servers" DROP CONSTRAINT "servers_ownerId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "servers" ALTER COLUMN "id" SET DEFAULT '8dErMitqPoyxmSP6aEkJs';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "first_name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "image_url" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "profile_image_url" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" bigint NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "servers" ADD CONSTRAINT "servers_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "servers" DROP COLUMN IF EXISTS "usersId";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_servers" ADD CONSTRAINT "user_servers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_servers" ADD CONSTRAINT "user_servers_server_id_servers_id_fk" FOREIGN KEY ("server_id") REFERENCES "servers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
