/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `bookings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `travels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Article_id_key` ON `Article`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `bookings_id_key` ON `bookings`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `reviews_id_key` ON `reviews`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `travels_id_key` ON `travels`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_id_key` ON `users`(`id`);
