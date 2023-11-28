CREATE TABLE IF NOT EXISTS "user_friends" (
	"user_id" varchar NOT NULL,
	"friend_id" varchar NOT NULL,
	CONSTRAINT user_friends_user_id_friend_id_pk PRIMARY KEY("user_id","friend_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friend_id_users_id_fk" FOREIGN KEY ("friend_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
