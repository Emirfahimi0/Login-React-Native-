-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2023 at 05:34 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `regov`
--

-- --------------------------------------------------------

--
-- Table structure for table `businessuser`
--

CREATE TABLE `businessuser` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `Gender` varchar(20) NOT NULL,
  `Age` int(20) NOT NULL,
  `phoneNumber` varchar(200) NOT NULL,
  `Bio` varchar(250) NOT NULL,
  `email` varchar(200) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `businessuser`
--

INSERT INTO `businessuser` (`id`, `first_name`, `last_name`, `Gender`, `Age`, `phoneNumber`, `Bio`, `email`, `user_id`) VALUES
(1, 'Emir ', 'Fahimi', 'Male', 23, '601+06507476', 'A big fire Spirit', 'emirfahimi0@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_query`
--

CREATE TABLE `user_query` (
  `User_ID` int(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_query`
--

INSERT INTO `user_query` (`User_ID`, `email`, `user_pass`) VALUES
(1, 'emirfahimi0@gmail.com', '391e5e50197ab997fe2b78e839450d7c'),
(2, 'emir@reqres.holt.com', '6d45b41e03c05a1e0955a435f9ba4429');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `businessuser`
--
ALTER TABLE `businessuser`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user_query`
--
ALTER TABLE `user_query`
  ADD PRIMARY KEY (`User_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `businessuser`
--
ALTER TABLE `businessuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_query`
--
ALTER TABLE `user_query`
  MODIFY `User_ID` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `businessuser`
--
ALTER TABLE `businessuser`
  ADD CONSTRAINT `businessuser_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_query` (`User_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
