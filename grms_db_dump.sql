-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: grms
-- ------------------------------------------------------
-- Server version	5.7.13-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `emp_id` int(11) NOT NULL,
  `emp_name` varchar(45) DEFAULT NULL,
  `working_date` datetime DEFAULT NULL,
  `working_hours` int(11) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Ajeet','2018-01-24 00:00:00',12,1000),(2,'Ayaan','2018-01-24 00:00:00',8,2000),(3,'Ajeet','2018-01-25 00:00:00',10,3000),(4,'Ayaan','2018-01-25 00:00:00',7,4000);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hcmmaster`
--

DROP TABLE IF EXISTS `hcmmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hcmmaster` (
  `empid` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `manager` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`empid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hcmmaster`
--

LOCK TABLES `hcmmaster` WRITE;
/*!40000 ALTER TABLE `hcmmaster` DISABLE KEYS */;
INSERT INTO `hcmmaster` VALUES (1,'Jack','Mr X'),(2,'Mike','Mr X'),(3,'John','Mr Y'),(4,'Roman','Mr Y');
/*!40000 ALTER TABLE `hcmmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectmaster`
--

DROP TABLE IF EXISTS `projectmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projectmaster` (
  `pid` int(11) NOT NULL,
  `pname` varchar(45) DEFAULT NULL,
  `pmanager` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectmaster`
--

LOCK TABLES `projectmaster` WRITE;
/*!40000 ALTER TABLE `projectmaster` DISABLE KEYS */;
INSERT INTO `projectmaster` VALUES (1,'JD','Mr X'),(2,'CAT','Mr Z'),(3,'MERCK','Mr Y'),(4,'JSW','Mr Z');
/*!40000 ALTER TABLE `projectmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'grms'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-01 19:43:10
