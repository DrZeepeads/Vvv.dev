CREATE TABLE `components` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text,
	`description` text NOT NULL,
	`code` text,
	`created_at` integer,
	`user_id` integer,
	`metadata` text,
	`completed` integer,
	`error` text,
	`based_on_id` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`based_on_id`) REFERENCES `components`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `images` (
	`id` text PRIMARY KEY NOT NULL,
	`buffer` blob
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text,
	`avatar_url` text
);

