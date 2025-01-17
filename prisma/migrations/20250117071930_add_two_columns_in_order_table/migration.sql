/*
  Warnings:

  - Added the required column `product_price` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `product_price` DOUBLE NOT NULL,
    ADD COLUMN `total_price` DOUBLE NOT NULL;
