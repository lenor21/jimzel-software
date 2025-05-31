-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2025 at 06:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jimzel_software`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `employee_id` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `suffix` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `project` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `employment` varchar(255) NOT NULL,
  `user_profile` varchar(255) NOT NULL,
  `manager` varchar(255) NOT NULL,
  `vendor` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `ctc` varchar(255) NOT NULL,
  `ctc_place` varchar(255) NOT NULL,
  `ctc_date` date NOT NULL,
  `ctc_amount_paid` int(11) NOT NULL,
  `notes` varchar(255) NOT NULL,
  `pay_freq` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `birthday` date NOT NULL,
  `date_hired` date NOT NULL,
  `kasambahay` tinyint(1) NOT NULL,
  `regularized` date NOT NULL,
  `separated` date NOT NULL,
  `contract_start` date NOT NULL,
  `contract_end` date NOT NULL,
  `minimum_earner` tinyint(1) NOT NULL,
  `minimum_daily` int(11) NOT NULL,
  `minimum_monthly` int(11) NOT NULL,
  `tax_id` varchar(255) NOT NULL,
  `tax_witheld` tinyint(1) NOT NULL,
  `sss_gsis` varchar(255) NOT NULL,
  `sss_gsis_witheld` tinyint(1) NOT NULL,
  `phic_id` varchar(255) NOT NULL,
  `phic_witheld` tinyint(1) NOT NULL,
  `hdmf_id` varchar(255) NOT NULL,
  `hdmf_witheld` tinyint(1) NOT NULL,
  `hdmf_account` varchar(255) NOT NULL,
  `bank` varchar(255) NOT NULL,
  `bank_account` varchar(255) NOT NULL,
  `rate_type` varchar(255) NOT NULL,
  `base_monthly_pay` int(11) NOT NULL,
  `days_per_month` int(11) NOT NULL,
  `hours_per_day` int(11) NOT NULL,
  `daily_rate` int(11) NOT NULL,
  `hourly_rate` int(11) NOT NULL,
  `col_allowance` int(11) NOT NULL,
  `represent_allowance` int(11) NOT NULL,
  `housing_allowance` int(11) NOT NULL,
  `transportation_allowance` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
