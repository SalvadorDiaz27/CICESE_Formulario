-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-05-2024 a las 02:51:56
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebas_laravel_react`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estancias`
--

CREATE TABLE `estancias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `cvu` varchar(255) NOT NULL,
  `instituto` varchar(255) NOT NULL,
  `pais` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `tipoEstancia` varchar(255) NOT NULL,
  `responsable` varchar(255) NOT NULL,
  `proyecto` varchar(255) NOT NULL,
  `justificacion` text NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `curp` varchar(255) DEFAULT NULL,
  `solicitud` enum('si','no') DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2024_04_23_173453_create_roles_table', 1),
(5, '2024_04_24_000000_create_users_table', 1),
(6, '2024_04_25_180453_create_role_user_table', 1),
(7, '2024_04_29_040345_create_estancia_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 11, 'AuthToken', 'c615511723526f49edc56b14293f87c8abbf84dc542eab14cbf49dcefc70a6f3', '[\"*\"]', NULL, NULL, '2024-05-01 06:41:21', '2024-05-01 06:41:21'),
(2, 'App\\Models\\User', 11, 'AuthToken', 'b88ec162669ecfa917363619c23f1659e9ee5fa07f3300d6d896e066ccceb364', '[\"*\"]', NULL, NULL, '2024-05-01 06:41:32', '2024-05-01 06:41:32'),
(3, 'App\\Models\\User', 11, 'AuthToken', '383585c437842e430951725cdfdd40b329e26d47ce883b926d92b546eb7a5210', '[\"*\"]', NULL, NULL, '2024-05-01 07:06:58', '2024-05-01 07:06:58'),
(4, 'App\\Models\\User', 11, 'AuthToken', 'ef3cfad6ac0b6830e4aa9b08b4b88617399ec44185edafeb5b2fd29e54023d57', '[\"*\"]', NULL, NULL, '2024-05-01 07:14:00', '2024-05-01 07:14:00'),
(5, 'App\\Models\\User', 11, 'AuthToken', '7648a5b0f2a732a4696e4a08f6b5bdbafd9ccc666dc852e1c3fc5c9527a737a7', '[\"*\"]', NULL, NULL, '2024-05-01 07:18:13', '2024-05-01 07:18:13'),
(6, 'App\\Models\\User', 11, 'AuthToken', 'd3b655e70ca20bb3750a18174ca2a110013581350079fbd44684fed799e7211e', '[\"*\"]', NULL, NULL, '2024-05-01 07:25:06', '2024-05-01 07:25:06'),
(7, 'App\\Models\\User', 11, 'AuthToken', '21357b51c665722808fe62c402532d6619560b0a2bb284166d317ed4975ee11e', '[\"*\"]', NULL, NULL, '2024-05-01 07:26:51', '2024-05-01 07:26:51'),
(8, 'App\\Models\\User', 11, 'AuthToken', 'cf40d3e3807a103535d81a565b2188d55d39a1dbf18f139ab501954c6179784f', '[\"*\"]', NULL, NULL, '2024-05-01 07:54:52', '2024-05-01 07:54:52'),
(9, 'App\\Models\\User', 11, 'AuthToken', '860b75209c92afcada853e7a8d185be65a97226cdab24a7fbb98fbdd34ca60df', '[\"*\"]', NULL, NULL, '2024-05-01 10:19:28', '2024-05-01 10:19:28'),
(10, 'App\\Models\\User', 11, 'AuthToken', 'ee0db58bc4017fd8fed80f690b52e67c103b7ceef69f42aabc5aadfdd02eb3f3', '[\"*\"]', NULL, NULL, '2024-05-01 16:11:10', '2024-05-01 16:11:10'),
(11, 'App\\Models\\User', 11, 'AuthToken', '91198fb1302d11efa46095981b70749ba626a86ade644083f56d52a64627361d', '[\"*\"]', NULL, NULL, '2024-05-02 12:53:45', '2024-05-02 12:53:45'),
(12, 'App\\Models\\User', 11, 'AuthToken', 'cf0bb361def2de168c9f246617855571d58b7a3faa5a05d351fb82dbca9848cc', '[\"*\"]', NULL, NULL, '2024-05-03 03:16:48', '2024-05-03 03:16:48'),
(13, 'App\\Models\\User', 11, 'AuthToken', 'e29db1709eabc7abb009dbfbe558e2dc31e149344f8f80e4b3b3bad175e24b64', '[\"*\"]', NULL, NULL, '2024-05-03 07:10:14', '2024-05-03 07:10:14'),
(14, 'App\\Models\\User', 11, 'AuthToken', '7102e05ecd17dffff274eb62a458e2698f80c47d2ad2c30abf397443e1952d65', '[\"*\"]', NULL, NULL, '2024-05-03 07:10:14', '2024-05-03 07:10:14'),
(15, 'App\\Models\\User', 11, 'AuthToken', '400ea09974b36dcf3f845cb7024b2a11b36d29889e6e8d56a0a314c3101c1707', '[\"*\"]', NULL, NULL, '2024-05-03 07:18:01', '2024-05-03 07:18:01'),
(16, 'App\\Models\\User', 11, 'AuthToken', '0f774f3bcbf1c8afdfbd468b221a61b921cc93f7e15ff7b9e061707c95d7d915', '[\"*\"]', NULL, NULL, '2024-05-03 07:18:01', '2024-05-03 07:18:01'),
(17, 'App\\Models\\User', 11, 'AuthToken', '7def87f9905cf016b39550e0f5ad24f35cc8109b159880cc90bb9ba2da206052', '[\"*\"]', NULL, NULL, '2024-05-03 07:23:47', '2024-05-03 07:23:47'),
(18, 'App\\Models\\User', 11, 'AuthToken', 'd51e36451f70dc1a7efcccdfa3853a97a46a4687a519ede999c6109803f4fa37', '[\"*\"]', NULL, NULL, '2024-05-03 08:29:36', '2024-05-03 08:29:36'),
(19, 'App\\Models\\User', 11, 'AuthToken', 'b9f70a1a3a14ecc4b837a5342c0463c254e227cab9485ca3b15906d613898a97', '[\"*\"]', NULL, NULL, '2024-05-04 03:02:31', '2024-05-04 03:02:31'),
(20, 'App\\Models\\User', 11, 'AuthToken', '6357d001e096933d1b5d613006a0de68d8838f4e036355aaa7404fe80160c608', '[\"*\"]', NULL, NULL, '2024-05-04 04:34:54', '2024-05-04 04:34:54'),
(21, 'App\\Models\\User', 11, 'AuthToken', '64e45ec5a3148b42a61f186b94afff15025c54d789a8541f8253c2e7b7221446', '[\"*\"]', NULL, NULL, '2024-05-04 04:57:40', '2024-05-04 04:57:40'),
(22, 'App\\Models\\User', 11, 'AuthToken', '6edd865831241adc5b39f6e4ed1701f712248340395da1088a9e0d71f5fea764', '[\"*\"]', NULL, NULL, '2024-05-04 12:13:45', '2024-05-04 12:13:45'),
(23, 'App\\Models\\User', 11, 'AuthToken', 'e009ee33000c08936c565287702836dad9f1b6548e903ea6d1b045d6a9afb427', '[\"*\"]', NULL, NULL, '2024-05-04 12:28:50', '2024-05-04 12:28:50'),
(24, 'App\\Models\\User', 11, 'AuthToken', '56d2f11fbf67be563111eff9e5944f471d67658aa7d204e9a76c9781e693ed06', '[\"*\"]', NULL, NULL, '2024-05-04 12:35:25', '2024-05-04 12:35:25'),
(25, 'App\\Models\\User', 11, 'AuthToken', 'd0c2a9a01a6e92c77885c169d9cf3aa630f7cfe271cf0f19a35efc9b2add9d1d', '[\"*\"]', NULL, NULL, '2024-05-05 02:36:10', '2024-05-05 02:36:10'),
(26, 'App\\Models\\User', 11, 'AuthToken', '3e9c80b1e1f2a6674cefaa3a2f0a95987b9f55992a91ca088250b431271fde36', '[\"*\"]', NULL, NULL, '2024-05-05 02:37:59', '2024-05-05 02:37:59'),
(27, 'App\\Models\\User', 16, 'AuthToken', 'd9ad74615987fdee9125c73a29e4365e0f94840aaf375b6f36106f22bd9c0b85', '[\"*\"]', NULL, NULL, '2024-05-05 03:44:39', '2024-05-05 03:44:39'),
(28, 'App\\Models\\User', 16, 'AuthToken', '488efdc63543662824b2e5d3ffeb57f7920c05b76db115b491b726b043345b3d', '[\"*\"]', NULL, NULL, '2024-05-07 05:14:59', '2024-05-07 05:14:59'),
(29, 'App\\Models\\User', 11, 'AuthToken', '37580c0ef432c21ab745dcc172b2d74d54578d769bbfd62adbb8b7d9871acfd7', '[\"*\"]', NULL, NULL, '2024-05-07 07:38:02', '2024-05-07 07:38:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `cvu` varchar(255) DEFAULT NULL,
  `instituto` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `tipoEstancia` enum('Posdoctoral','Sabática','Investigador(a) por México','Estancia académica','Investigador por honorarios') DEFAULT NULL,
  `responsable` varchar(255) DEFAULT NULL,
  `proyecto` varchar(255) DEFAULT NULL,
  `justificacion` text DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `curp` varchar(18) DEFAULT NULL,
  `solicitud` enum('si','no') DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `nombre`, `cvu`, `instituto`, `pais`, `telefono`, `correo`, `tipoEstancia`, `responsable`, `proyecto`, `justificacion`, `fecha_inicio`, `fecha_fin`, `curp`, `solicitud`, `created_at`, `updated_at`) VALUES
(1, 'Isaac Salvador', '3632241000', 'Universidad Autonoma de Baja California', 'Mexico', '6462685697', 'test@prueba.com', 'Posdoctoral', 'Luis Canul', 'Formulario', 'aaaaaa', '2024-05-04', '2024-09-24', 'DIGI00012015HB', 'si', '2024-05-04 14:27:21', '2024-05-07 07:22:48'),
(2, 'Hector Gutierrez', '3632254820', 'Universidad Autonoma de Baja California', 'Mexico', '6462685697', 'testeo@test.com', 'Estancia académica', 'Luis Canul', 'Formularios en react', 'Una idea loca', NULL, NULL, 'DIGI011003HBCZRSA8', 'si', '2024-05-04 14:29:27', '2024-05-04 14:29:27'),
(3, 'Heizo', '3632254820', 'Universidad Autonoma de Baja California', 'Mexico', '6462685697', 'pruebas@test.com', 'Sabática', 'Testeo', 'Testeo', 'Testeo', '2024-05-06', '2024-08-01', 'DIGI011003HBCZRSA8', 'si', '2024-05-04 14:37:51', '2024-05-07 07:23:21'),
(4, 'Leorio', '444555222', 'Universidad Autonoma de Baja California', 'Mexico', '6462685697', 'testeo@test.com', 'Posdoctoral', 'Testeo', 'Testeo', 'Testeo', NULL, NULL, 'DIGI011003HBCZRSA8', NULL, '2024-05-04 14:45:43', '2024-05-04 14:45:43'),
(5, 'Leorio', '23213213123', 'aaaaaaaaaaaaa', 'aaaaaaaaaaaa', '6462685697', 'testeo@tests.com', 'Sabática', 'aaaaaaaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaa', '2024-05-04', '2024-05-30', 'DIGI011003HBCZRSA8', NULL, '2024-05-04 14:51:15', '2024-05-04 14:51:15'),
(7, 'Sevica', '3632255100', 'Universidad Autonoma de Baja California', 'Francia', '6462685697', 'testeo@tests.com', 'Investigador por honorarios', 'Ana Robles', 'Formularios en react', 'aaaaaaa', '2024-05-04', '2024-09-19', 'DIGI00012015HBCFS1', 'no', '2024-05-05 03:13:03', '2024-05-05 03:13:03'),
(8, 'Sevica', '3632255100', 'Universidad Autonoma de Baja California', 'Francia', '6462685697', 'testeo@tests.com', 'Investigador por honorarios', 'Ana Robles', 'Formularios en react', 'aaaaaaa', '2024-05-04', '2024-09-19', 'DIGI00012015HBCFS1', 'si', '2024-05-05 03:13:26', '2024-05-05 03:13:26'),
(9, 'Sevica', '3632255100', 'Universidad Autonoma de Baja California', 'Francia', '6462685697', 'testeo@tests.com', 'Estancia académica', 'Ana Robles', 'Formularios en react', 'aaaaaaa', '2024-05-04', '2024-09-19', 'DIGI00012015HBCFS1', 'si', '2024-05-05 03:13:41', '2024-05-05 03:13:41'),
(10, 'Sevica', '3632255100', 'Universidad Autonoma de Baja California', 'Francia', '6462685697', 'testeo@tests.com', 'Posdoctoral', 'Ana Robles', 'Formularios en react', 'aaaaaaa', '2024-05-04', '2024-09-19', 'DIGI00012015HBCFS1', 'si', '2024-05-05 03:14:00', '2024-05-05 03:14:00'),
(11, 'Hector Carlos', '3632254820', 'Universidad Autonoma de Baja California', 'Estados Unidos', '6462685697', 'pruebas22@test.com', 'Investigador(a) por México', 'Ana Robles', 'Testeo de proyecto', 'Prueba #12', '2024-05-14', '2024-06-07', 'DIGI00012015HBCFS1', 'no', '2024-05-07 07:39:43', '2024-05-07 07:39:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2024-04-26 01:44:43', '2024-04-26 01:44:43'),
(2, 'researcher', '2024-04-26 01:44:43', '2024-04-26 01:44:43'),
(3, 'technician', '2024-04-26 01:44:44', '2024-04-26 01:44:44'),
(4, 'administrative', '2024-04-26 01:44:44', '2024-04-26 01:44:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_user`
--

CREATE TABLE `role_user` (
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `role_user`
--

INSERT INTO `role_user` (`user_id`, `role_id`, `created_at`, `updated_at`) VALUES
(11, 2, NULL, NULL),
(11, 2, NULL, NULL),
(12, 2, NULL, NULL),
(13, 2, NULL, NULL),
(14, 4, NULL, NULL),
(15, 2, NULL, NULL),
(16, 1, NULL, NULL),
(17, 2, NULL, NULL),
(18, 2, NULL, NULL),
(19, 2, NULL, NULL),
(20, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(11, 'guest', 'test@prueba.com', '$2y$10$QdNk9MoaA1jSNFRrmL152.Fg6lTO5MwAm8.XdO4/A6HXK8NiLce7.', '2024-04-27 07:07:22', '2024-04-27 07:07:22'),
(12, 'guest3', 'admin@testeo.com', '$2y$10$fCNhqGJKTjV8cQhCPGgKduOrhF.10EzAsKyVKe87bYAFBnJzYR1xC', '2024-04-27 07:14:12', '2024-04-27 07:14:12'),
(13, 'Feng132', 'testsaes@prueba.com', '$2y$10$17BOUI65a.F.qSiBmZloseFKwAzGleJag1GTrdzA9f.eqNcKWi5Ii', '2024-04-27 07:53:14', '2024-04-27 07:53:14'),
(14, 'hectorgo06', 'testeos@pruebas.com', '$2y$10$JMtcnvIYuw2/qfOSTFUzL.cCwi.B2ZifKsRv8SWkcZBH8HGdJc1hW', '2024-04-27 08:01:03', '2024-04-27 08:01:03'),
(15, 'reacts', 'admin@taestssseo.com', '$2y$10$QdZOzBkezUdYg9sSHRZL..ngMHMN1yimkkjawNkhB9nptcZqA4Pd.', '2024-04-27 08:18:41', '2024-04-27 08:18:41'),
(16, 'guest323', 'test@pruebas12.com', '$2y$10$2pfXPYOtmwxn.xgNVcXO9O.AF9daGlnlk8ieL0UrkMOS3RBgNR.bm', '2024-04-27 08:25:01', '2024-04-27 08:25:01'),
(17, 'guest2333', 'testeasdf@prueba.com', '$2y$10$CLnlam305L.lNtxDW5RckeVTEoMFKcwcmOf4TZHUfA58bzbvfJa/q', '2024-04-27 08:26:07', '2024-04-27 08:26:07'),
(18, 'diasgarcia', 'diazsdz0067@gmail.com', '$2y$10$TUPoZMWo4J1HwN/QxcC5vO0Eld.Taq627ccVFrdG82o5glEvyuTXi', '2024-04-27 11:53:26', '2024-04-27 11:53:26'),
(19, 'Isaac', 'insert@gmail.com', '$2y$10$inCiiEZJEcbZWmKzPeRTFOM8izf2cOuIMIc4dGL0RphTVSnbhYI.C', '2024-04-29 11:30:38', '2024-04-29 11:30:38'),
(20, 'Leo', 'leo@prueba.com', '$2y$10$dQAZtsm4Q9Tw6FLqw41nae.Tf7FVYivhxjoFGwP6cvbFrg.cv7HfK', '2024-05-04 12:17:13', '2024-05-04 12:17:13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estancias`
--
ALTER TABLE `estancias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indices de la tabla `role_user`
--
ALTER TABLE `role_user`
  ADD KEY `role_id` (`role_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estancias`
--
ALTER TABLE `estancias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estancias`
--
ALTER TABLE `estancias`
  ADD CONSTRAINT `estancias_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
