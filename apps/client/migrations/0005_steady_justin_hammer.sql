DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('online', 'idle', 'dnd', 'offline', 'mobile', 'pending', 'blocked');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "servers" ADD COLUMN "image_url" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bio" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "status" "status" DEFAULT 'online' NOT NULL;