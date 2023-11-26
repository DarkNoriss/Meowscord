CREATE TABLE `new-servers` (
  `id` text PRIMARY KEY NOT NULL,
  `name` text NOT NULL,
  `ownerId` text NOT NULL,
  `usersId` text NOT NULL,
  FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `new-users` (
  `id` text PRIMARY KEY NOT NULL,
  `username` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `new-servers`(`id`, `name`, `ownerId`, `usersId`) SELECT `id`, `name`, `owner`, `users` FROM `servers`;
--> statement-breakpoint
INSERT INTO `new-users`(`id`, `username`) SELECT `id`, `name` FROM `users`;
--> statement-breakpoint
DROP TABLE `servers`;
--> statement-breakpoint
DROP TABLE `users`;
--> statement-breakpoint
ALTER TABLE `new-servers` RENAME TO `servers`;
--> statement-breakpoint
ALTER TABLE `new-users` RENAME TO `users`;