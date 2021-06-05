CREATE TABLE `cup_of_sugar_db`.`reply_msg` (
  `id` INT UNSIGNED NOT NULL,
  `message_id` INT NULL,
  `msg` TEXT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
