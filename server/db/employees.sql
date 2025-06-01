-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2025 at 11:01 AM
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
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `suffix` varchar(255) NOT NULL,
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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `admin_ip` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `employee_id`, `first_name`, `middle_name`, `last_name`, `suffix`, `address`, `city`, `province`, `zip`, `location`, `department`, `project`, `team`, `position`, `employment`, `user_profile`, `manager`, `vendor`, `email`, `phone`, `ctc`, `ctc_place`, `ctc_date`, `ctc_amount_paid`, `notes`, `pay_freq`, `sex`, `active`, `birthday`, `date_hired`, `kasambahay`, `regularized`, `separated`, `contract_start`, `contract_end`, `minimum_earner`, `minimum_daily`, `minimum_monthly`, `tax_id`, `tax_witheld`, `sss_gsis`, `sss_gsis_witheld`, `phic_id`, `phic_witheld`, `hdmf_id`, `hdmf_witheld`, `hdmf_account`, `bank`, `bank_account`, `rate_type`, `base_monthly_pay`, `days_per_month`, `hours_per_day`, `daily_rate`, `hourly_rate`, `col_allowance`, `represent_allowance`, `housing_allowance`, `transportation_allowance`, `updated_at`, `created_at`, `admin_ip`) VALUES
(1, 'test2', 'test', '', 'test', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'admin1@gmail.com1', '', '', '', '0000-00-00', 0, '', 'test', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, 'test', 0, 'test', 0, 'test', 0, 'test', 0, 'test', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-06-01 04:50:58', '2025-05-31 16:55:21', '::1'),
(4, 'test', 'test', '', 'test', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ronel21@gmail.com', '', '', '', '0000-00-00', 0, '', 'test', '', 0, '2025-05-31', '2025-05-31', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, 'test', 0, 'test', 0, 'test', 0, 'test', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-31 16:55:21', '2025-05-31 16:55:21', ''),
(5, '1', 'ronel', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00', 0, '', '', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, '', 0, '', 0, '', 0, '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-31 17:11:16', '2025-05-31 17:11:16', ''),
(9, 'EMP001', 'Jane', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'jane@example.com', '', '', '', '0000-00-00', 0, '', '', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, '', 0, '', 0, '', 0, '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-31 17:26:00', '2025-05-31 17:26:00', ''),
(10, 'EMP001', 'Jane', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'jane2@example.com', '', '', '', '0000-00-00', 0, '', '', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, '', 0, '', 0, '', 0, '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-31 17:26:40', '2025-05-31 17:26:40', ''),
(11, '1', 'ronel', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ron21@gmail.com', '', '', '', '0000-00-00', 0, '', '', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, '', 0, '', 0, '', 0, '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-31 17:29:34', '2025-05-31 17:29:34', ''),
(12, '1', 'ronel', 'talavera', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ron212@gmail.com', '', '', '', '0000-00-00', 0, '', '', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, '', 0, '', 0, '', 0, '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-31 17:42:07', '2025-05-31 17:42:07', ''),
(15, 'test', 'test', '', 'test', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'admin@gmail.com1', '', '', '', '0000-00-00', 0, '', 'test', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, 'test', 0, 'test', 0, 'test', 0, 'test', 0, 'test', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-31 17:52:04', '2025-05-31 17:52:04', ''),
(17, 'test123', 'Ronel', 'Talavera', 'De JEsus', 'Jr', 'test123', 'Macabebe', 'Pampanga', '2018', 'metro_manila', 'finance_dep', 'manila_payroll', 'finance_team', 'president', 'probationary', 'admin', 'jose_rizal', 'finance_vendor', 'dejesusronel29@gmail.com', '+639357249128', 'test123', 'test123', '2025-05-30', 44, 'test123', 'monthly', 'Male', 1, '2025-05-30', '2025-05-30', 1, '2025-05-30', '2025-05-30', '2025-05-30', '2025-05-30', 1, 55, 55, 'test123', 1, 'test123', 1, 'test123', 1, 'test123', 1, 'test123', 'metro_bank', 'test123', 'monthly_rate', 44, 44, 44, 44, 44, 44, 44, 44, 44, '2025-06-01 06:37:49', '2025-05-31 18:29:22', '::1'),
(19, 'test32145', 'test321', '', 'test321', '', '', '', '', '', 'Metro Manila', 'Finance Department', 'Manila Payroll Project', 'Finance Team', 'President', 'Probationary', 'Admin', 'Jose Rizal', 'Finance Consultant', 'ronel321@gmail.com', '', '', '', '1899-11-26', 0, '', 'Monthly', 'Male', 1, '2025-05-28', '2025-05-28', 1, '1899-11-26', '1899-11-26', '1899-11-26', '1899-11-26', 0, 0, 0, 'test321', 0, 'test321', 0, 'test321', 0, 'test321', 0, '', '', '', 'Monthly Rate', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-06-01 05:50:34', '2025-05-31 18:46:52', '::1'),
(20, 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'Las Vegas', 'Finance Department', 'Manila Payroll Project', 'Finance Team', 'President', 'Probationary', 'Admin', 'Jose Rizal', 'Finance Consultant', 'dejesusronel003@gmail.com', '', '', '', '1899-11-27', 0, '', 'SemiMonthly', 'Male', 0, '2025-05-29', '2025-05-29', 0, '1899-11-27', '1899-11-27', '1899-11-27', '1899-11-27', 0, 0, 0, 'd', 0, 'd', 0, 'd', 0, 'd', 0, '', 'Metro Bank', '', 'Monthly Rate', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-06-01 07:06:53', '2025-06-01 06:38:51', '::1'),
(22, 'test', 'test', '', 'test', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'rate@gmail.com1', '', '', '', '0000-00-00', 0, '', 'test', '', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 0, 0, 0, 'test', 0, 'test', 0, 'test', 0, 'test', 0, 'test', '', '', 'res', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2025-06-01 06:43:53', '2025-06-01 06:43:53', ''),
(23, 'test32te', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'Metro Manila', 'Finance Department', 'Manila Payroll Project', 'Finance Team', 'President', 'Regular', 'User', 'Jose Rizal', 'Finance Consultant', 'rone@gmail.com', '+639357249128', 'test123', 'test123', '2025-05-31', 44, 'test', 'Monthly', 'Male', 1, '2025-05-31', '2025-05-31', 1, '2025-05-31', '2025-05-31', '2025-05-31', '2025-05-31', 1, 0, 0, 'test', 1, 'test', 1, 'test', 1, 'test', 1, 'test123', 'Metro Bank', 'test123', 'Monthly Rate', 55, 55, 55, 55, 55, 55, 55, 55, 55, '2025-06-01 07:45:41', '2025-06-01 07:45:07', '::1'),
(24, 'dg', 'dgg', 'dg', 'dg', 'g', 'g', 'g', 'g', 'g', 'Las Vegas', 'Finance Department', 'Manila Payroll Project', 'Business Team', 'Secretary', 'Probationary', 'User', 'Andress Bonifacio', 'Business Consultant', 'ronel@gmail.com', '+639357249128', 'cdc', 'test123', '2025-05-31', 34, '55', 'SemiMonthly', 'Female', 1, '2025-05-31', '2025-05-31', 1, '2025-05-31', '2025-05-31', '2025-05-31', '2025-05-31', 1, 5, 4, 'gg', 1, 'gg', 1, 'gg', 1, 'gg', 1, 'g', 'China Bank', 'test123', 'Monthly Rate', 5, 5, 5, 5, 5, 5, 5, 5, 5, '2025-06-01 08:43:49', '2025-06-01 08:42:25', '::1');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
