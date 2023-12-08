CREATE TABLE IF NOT EXISTS "voice_channels" (
	"id" varchar PRIMARY KEY NOT NULL,
	"server_id" varchar NOT NULL,
	"name" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "channels" RENAME TO "text_channels";--> statement-breakpoint
ALTER TABLE "message" DROP CONSTRAINT "message_channel_id_channels_id_fk";
--> statement-breakpoint
ALTER TABLE "text_channels" DROP CONSTRAINT "channels_server_id_servers_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "message" ADD CONSTRAINT "message_channel_id_text_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "text_channels"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "text_channels" ADD CONSTRAINT "text_channels_server_id_servers_id_fk" FOREIGN KEY ("server_id") REFERENCES "servers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "voice_channels" ADD CONSTRAINT "voice_channels_server_id_servers_id_fk" FOREIGN KEY ("server_id") REFERENCES "servers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
