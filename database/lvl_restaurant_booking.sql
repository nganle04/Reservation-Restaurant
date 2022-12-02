-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 30, 2022 at 05:24 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lvl_restaurant_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2022_03_27_144600_laratrust_setup_tables', 1),
(26, '2022_11_26_035838_create_tables_table', 2),
(27, '2022_11_26_040941_create_reservations_table', 2),
(28, '2022_11_27_105218_create_reservation_tables_table', 2),
(29, '2022_11_27_110105_create_reservation_pyaments_table', 2),
(30, '2022_11_27_110106_create_user_addresses_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('175f939ce379740e73b04790244f17c1acea10a038e02e5164a49e86e3e71dc45ea1d2ec8c7b295e', 1, 1, 'MyApp', '[]', 1, '2022-11-25 21:56:56', '2022-11-25 21:56:56', '2023-11-26 03:56:56'),
('25bba2df6ed49aea5a82a4bbf654c9af9e3c8c0ba87c3f9c4bce92a786a978834e26d3db109491ba', 3, 1, 'MyApp', '[]', 1, '2022-11-26 20:14:45', '2022-11-26 20:14:45', '2023-11-27 02:14:45'),
('354ab12f85442b149e22613bab545771af1a1120a624dace53c3b059186c1664082e1c877370b7b9', 1, 1, 'MyApp', '[]', 1, '2022-11-25 22:40:46', '2022-11-25 22:40:46', '2023-11-26 04:40:46'),
('3bc626ce59836e148a8bfcd2464b774a06b3fca6df4cf5afb75fd9bc53b8f56448b6d4d0e41e3591', 3, 1, 'MyApp', '[]', 1, '2022-11-27 23:45:17', '2022-11-27 23:45:17', '2023-11-28 05:45:17'),
('3dc2eee9e23ad256455a023c78a7aa6439d67d23763c0acb248ae2f0d73dc770c13971e4c97bc6dc', 3, 1, 'MyApp', '[]', 1, '2022-11-26 20:03:07', '2022-11-26 20:03:07', '2023-11-27 02:03:07'),
('4ad8d468a7007b3823a923521774617a62329f4ff62d6a3dbc0908d991e1de210e33ef7465ccc3f2', 1, 1, 'MyApp', '[]', 1, '2022-11-27 01:33:56', '2022-11-27 01:33:56', '2023-11-27 07:33:56'),
('8e5e5ebe928ffd94fcbb9c7c7cad4ab192f8179ccf6537397d203a8d1b9af389b7b5803fadb93c8f', 1, 1, 'MyApp', '[]', 1, '2022-11-25 22:17:25', '2022-11-25 22:17:25', '2023-11-26 04:17:25'),
('9b10130b2c8e9d0064e081fccfaf67acd3372c5974e8f58a6f561f8160dd8c2e3de1d708253c4f41', 1, 1, 'MyApp', '[]', 1, '2022-11-27 01:20:09', '2022-11-27 01:20:09', '2023-11-27 07:20:09'),
('9ccfa2199cb9d22c833e133d6edb93293f8a5f18ca05e357fc073d5a3940ed1930bf5ec500f6368e', 1, 1, 'MyApp', '[]', 1, '2022-11-25 22:35:29', '2022-11-25 22:35:29', '2023-11-26 04:35:29'),
('af7508fa2bdb0c9778876ed0fe562957309c08f5a210e235b7e3ff31c5ff6acfcc056d0d59f151fe', 1, 1, 'MyApp', '[]', 1, '2022-11-27 01:32:55', '2022-11-27 01:32:55', '2023-11-27 07:32:55'),
('bb4f7264f02b500551402a8a63f0dd4de0381e909056859bfcf16e9497fd0eea374643c00fa01972', 1, 1, 'MyApp', '[]', 1, '2022-11-25 21:57:10', '2022-11-25 21:57:10', '2023-11-26 03:57:10'),
('c9980ec6522fb8c6181fcd6b2dea02b139e72e1ab0abbbf4774b99d7fd88998c8e06c25689b4a70a', 1, 1, 'MyApp', '[]', 1, '2022-11-27 09:14:33', '2022-11-27 09:14:33', '2023-11-27 15:14:33'),
('d0eb46bd04539571b3c8723fe024f2f1f073b794918445bc31702c85b35292e06532b6c60bd482f3', 1, 1, 'MyApp', '[]', 1, '2022-11-25 22:40:28', '2022-11-25 22:40:28', '2023-11-26 04:40:28'),
('feb49d9fcbf438e93b65870efacda9cf42446055740e5af45ea42e017b90409f4eca647fe0327b73', 3, 1, 'MyApp', '[]', 1, '2022-11-26 19:23:55', '2022-11-26 19:23:55', '2023-11-27 01:23:55');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Book My Table Personal Access Client', 'YfmFWxRNp38zmsoLnsm00PTfriOBphKJM0RrytUJ', NULL, 'http://localhost', 1, 0, 0, '2022-11-25 21:55:38', '2022-11-25 21:55:38'),
(2, NULL, 'Book My Table Password Grant Client', 'mLA6eYyayyHgziquaHDDiehav7nYZ4z5aygzLMhb', 'users', 'http://localhost', 0, 1, 0, '2022-11-25 21:55:38', '2022-11-25 21:55:38');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-11-25 21:55:38', '2022-11-25 21:55:38');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_user`
--

CREATE TABLE `permission_user` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('Requested','Confirmed','Processing','Cancelled','Complete') COLLATE utf8mb4_unicode_ci NOT NULL,
  `billed` int(10) UNSIGNED NOT NULL,
  `total_guests` int(10) UNSIGNED NOT NULL,
  `from` datetime NOT NULL,
  `to` datetime NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `mailing_address_id` int(10) UNSIGNED DEFAULT NULL,
  `biling_address_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `status`, `billed`, `total_guests`, `from`, `to`, `user_id`, `mailing_address_id`, `biling_address_id`, `created_at`, `updated_at`) VALUES
(1, 'Requested', 0, 4, '2022-11-28 17:00:00', '2022-11-28 18:00:00', 3, 1, NULL, '2022-11-27 11:20:30', '2022-11-27 11:20:30'),
(2, 'Confirmed', 0, 4, '2022-11-28 18:00:00', '2022-11-28 19:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(3, 'Confirmed', 0, 8, '2022-11-28 18:00:00', '2022-11-28 19:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(4, 'Requested', 0, 4, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(5, 'Requested', 0, 6, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(6, 'Cancelled', 0, 8, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(7, 'Confirmed', 0, 4, '2022-11-28 18:00:00', '2022-11-28 19:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(8, 'Requested', 0, 2, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(9, 'Requested', 0, 2, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(10, 'Processing', 0, 2, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(11, 'Requested', 0, 2, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(12, 'Requested', 0, 4, '2022-11-28 18:00:00', '2022-11-28 18:00:00', 4, 1, NULL, '2022-11-27 11:30:30', '2022-11-27 11:30:30'),
(17, 'Requested', 0, 10, '2022-11-30 22:15:00', '2022-11-30 23:15:00', 14, 10, 11, '2022-11-29 10:11:24', '2022-11-29 10:11:24'),
(18, 'Requested', 0, 10, '2022-12-01 17:00:00', '2022-12-01 18:00:00', NULL, 14, NULL, '2022-11-29 23:18:55', '2022-11-29 23:18:55'),
(19, 'Requested', 0, 10, '2022-12-01 17:00:00', '2022-12-01 18:00:00', NULL, 15, NULL, '2022-11-29 23:19:02', '2022-11-29 23:19:02'),
(20, 'Requested', 0, 10, '2022-11-30 17:30:00', '2022-11-30 18:30:00', NULL, 16, NULL, '2022-11-29 23:22:45', '2022-11-29 23:22:45');

-- --------------------------------------------------------

--
-- Table structure for table `reservation_pyaments`
--

CREATE TABLE `reservation_pyaments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `paid` int(10) UNSIGNED NOT NULL,
  `status` enum('Cash','Credit Card','Check') COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservation_tables`
--

CREATE TABLE `reservation_tables` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `table_id` int(10) UNSIGNED NOT NULL,
  `reservation_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reservation_tables`
--

INSERT INTO `reservation_tables` (`id`, `table_id`, `reservation_id`) VALUES
(1, 5, 2),
(2, 6, 3),
(3, 7, 3),
(6, 14, 17),
(7, 1, 17),
(8, 14, 18),
(9, 1, 18),
(10, 15, 19),
(11, 2, 19),
(12, 14, 20),
(13, 1, 20);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'super-admin', 'Super Admin', 'Super Admin', '2020-06-13 18:00:00', '2020-06-13 18:00:00'),
(2, 'admin', 'Admin', 'Admin', '2020-06-13 16:12:54', '2020-06-13 16:12:54'),
(3, 'user', 'User', NULL, '2020-06-13 16:13:21', '2020-06-13 16:13:21');

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`, `user_type`) VALUES
(1, 1, 'App\\Models\\User'),
(2, 3, 'App\\Models\\User'),
(3, 4, 'App\\Models\\User'),
(3, 5, 'App\\Models\\User'),
(3, 6, 'App\\Models\\User'),
(3, 7, 'App\\Models\\User'),
(3, 8, 'App\\Models\\User'),
(3, 14, 'App\\Models\\User');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacity` int(10) UNSIGNED NOT NULL,
  `min_fee` int(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Minimum Booking Fee',
  `status` enum('Ready','Not Ready') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `name`, `capacity`, `min_fee`, `status`) VALUES
(1, 'Table A1', 2, 0, 'Ready'),
(2, 'Table A2', 2, 0, 'Ready'),
(3, 'Table A3', 2, 0, 'Ready'),
(4, 'Table A4', 2, 0, 'Ready'),
(5, 'Table B1', 4, 0, 'Ready'),
(6, 'Table B2', 4, 0, 'Ready'),
(7, 'Table B3', 4, 0, 'Ready'),
(8, 'Table B4', 4, 0, 'Ready'),
(9, 'Table C1', 5, 0, 'Ready'),
(10, 'Table C2', 5, 0, 'Ready'),
(11, 'Table C3', 5, 0, 'Ready'),
(12, 'Table D1', 6, 0, 'Ready'),
(13, 'Table D2', 6, 0, 'Ready'),
(14, 'Table E1', 8, 0, 'Ready'),
(15, 'Table E2', 8, 0, 'Ready');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'super.admin@test.com', '+8801777777777', '2022-11-25 21:56:07', '$2y$10$zECknyfeuCbxO5FzevXD.ugaGiIZgFSFhyVmojLJlWIcoRTw5UkO.', NULL, '2020-06-13 15:56:04', '2022-11-27 01:33:20'),
(3, 'admin', 'admin@test.com', '+8801666666666', NULL, '$2y$10$xL3qMAX1hjENpkPt02RPw.a6p8k.erGLVCRe4V2ZYBShGYHjraL8C', NULL, '2022-11-26 19:22:48', '2022-11-26 19:22:48'),
(4, 'Customer 1', 'customer@test.com', '+8801555555551', NULL, '$2y$10$DPdED/GKqgPeAyuG1VWMdeYluVq5IU2iF/lj5dXVXxutVOwvRgimu', NULL, '2022-11-26 19:55:38', '2022-11-27 01:30:59'),
(5, 'Customer 2', 'customer.2@test.com', '+8801555555552', NULL, '$2y$10$bDUKwl.HBXV3AJt0hY8J0eOl4EnkxIV8k5txDskVCMZzSZqVj8gmG', NULL, '2022-11-26 20:06:02', '2022-11-27 01:17:33'),
(6, 'Customer 3', 'customer.3@test.com', '+8801555555553', NULL, '$2y$10$PF.4hbbHJKE8fevnLett8u22GrxsM3UJ81CLt5HKL1x2VuPQvVSCC', NULL, '2022-11-26 20:08:54', '2022-11-27 01:17:10'),
(7, 'Customer 4', 'customer.4@test.com', '+8801555555554', NULL, '$2y$10$lLa9nKtAUr09RZc//6.mi.myIVt3/22.YQLxwu1D46vw.C5vZtiqS', NULL, '2022-11-26 20:09:53', '2022-11-27 01:14:26'),
(8, 'Customer 5', 'customer.5@test.com', '+8801555555555', NULL, '$2y$10$745J4V4VNu1ktM/WV6kf3OXR.OAk8OLcVNt1f76Z9nozyeCMELw7e', NULL, '2022-11-26 20:14:20', '2022-11-27 01:24:33'),
(14, 'Masfhiqur', 'customer@gmail.com', '+8801685334495', NULL, '$2y$10$ypyyHtw54SU0rBk37bhFQ.0lBK7R1RL0LsssRuhFGEnHPaw.gfoK6', NULL, '2022-11-29 10:11:24', '2022-11-29 10:11:24');

-- --------------------------------------------------------

--
-- Table structure for table `user_addresses`
--

CREATE TABLE `user_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `status` enum('Mailing','Billing') COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_line_1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_line_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_addresses`
--

INSERT INTO `user_addresses` (`id`, `user_id`, `status`, `name`, `email`, `phone`, `address_line_1`, `address_line_2`, `city`, `state`, `country`, `created_at`, `updated_at`) VALUES
(10, 14, 'Mailing', 'Masfhiqur', 'customer@gmail.com', '+8801685334495', '12/3 A', 'Jaleshwar', 'Savar', 'Dhaka', 'Bangladesh', '2022-11-29 10:11:24', '2022-11-29 10:11:24'),
(11, 14, 'Mailing', 'Masfhiqur', 'customer@gmail.com', '+8801685334495', '4/3', 'Sector 16', 'Uttra', 'Dhaka', 'Bangladesh', '2022-11-29 10:11:24', '2022-11-29 10:11:24'),
(14, NULL, 'Mailing', 'Masalskdjfl;', 'asdfas@asdfasd.asd', '45465465515154', 'adfasdf', 'fasdfasdf', 'fasdfasfd', 'fadfasdf', 'fasdfadsf', '2022-11-29 23:18:55', '2022-11-29 23:18:55'),
(15, NULL, 'Mailing', 'Masalskdjfl;', 'asdfas@asdfasd.asd', '45465465515154', 'adfasdf', 'fasdfasdf', 'fasdfasfd', 'fadfasdf', 'fasdfadsf', '2022-11-29 23:19:02', '2022-11-29 23:19:02'),
(16, NULL, 'Mailing', 'asdfasdf', 'asdfas@asdfas.asf', '016564646646464', 'asdfasdf', 'asdfas', 'dfasdfasdfas', 'asdfasd', 'asdfasdf', '2022-11-29 23:22:45', '2022-11-29 23:22:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`);

--
-- Indexes for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD PRIMARY KEY (`user_id`,`permission_id`,`user_type`),
  ADD KEY `permission_user_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation_pyaments`
--
ALTER TABLE `reservation_pyaments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation_tables`
--
ALTER TABLE `reservation_tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`user_id`,`role_id`,`user_type`),
  ADD KEY `role_user_role_id_foreign` (`role_id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_addresses`
--
ALTER TABLE `user_addresses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `reservation_pyaments`
--
ALTER TABLE `reservation_pyaments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservation_tables`
--
ALTER TABLE `reservation_tables`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user_addresses`
--
ALTER TABLE `user_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
