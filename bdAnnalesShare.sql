-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: image
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

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
-- Table structure for table `DroitUserSpecialite`
--

DROP TABLE IF EXISTS `DroitUserSpecialite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DroitUserSpecialite` (
  `idDroit` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idSpecialite` int(11) NOT NULL,
  KEY `fk_user_id` (`idUser`),
  KEY `conSpe_id` (`idSpecialite`),
  CONSTRAINT `conSpe_id` FOREIGN KEY (`idSpecialite`) REFERENCES `Specialite` (`idSpecialite`) ON DELETE CASCADE,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DroitUserSpecialite`
--

LOCK TABLES `DroitUserSpecialite` WRITE;
/*!40000 ALTER TABLE `DroitUserSpecialite` DISABLE KEYS */;
/*!40000 ALTER TABLE `DroitUserSpecialite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Droits`
--

DROP TABLE IF EXISTS `Droits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Droits` (
  `idDroit` int(11) NOT NULL,
  `intitule` varchar(50) NOT NULL,
  UNIQUE KEY `idDroit` (`idDroit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Droits`
--

LOCK TABLES `Droits` WRITE;
/*!40000 ALTER TABLE `Droits` DISABLE KEYS */;
INSERT INTO `Droits` VALUES (0,'Banni'),(1,'Lire'),(2,'Ajouter'),(3,'Supprimer'),(4,'Administrer');
/*!40000 ALTER TABLE `Droits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ecole`
--

DROP TABLE IF EXISTS `Ecole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ecole` (
  `idEcole` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`idEcole`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ecole`
--

LOCK TABLES `Ecole` WRITE;
/*!40000 ALTER TABLE `Ecole` DISABLE KEYS */;
/*!40000 ALTER TABLE `Ecole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `File`
--

DROP TABLE IF EXISTS `File`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `File` (
  `idFile` varchar(150) NOT NULL,
  `type` varchar(30) NOT NULL,
  `idRessource` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idFile`),
  KEY `file_id` (`idRessource`),
  CONSTRAINT `file_id` FOREIGN KEY (`idRessource`) REFERENCES `Ressource` (`idRessource`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `File`
--

LOCK TABLES `File` WRITE;
/*!40000 ALTER TABLE `File` DISABLE KEYS */;
/*!40000 ALTER TABLE `File` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER after_update_animal AFTER DELETE
ON File FOR EACH ROW

    INSERT INTO FileHisto (idFile, type, idRessource, name, dateHisto)
    VALUES (old.idFile, old.type, old.idRessource, old.name, NOW() ) */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `FileHisto`
--

DROP TABLE IF EXISTS `FileHisto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FileHisto` (
  `idFile` varchar(150) NOT NULL,
  `type` varchar(30) NOT NULL,
  `idRessource` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `dateHisto` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FileHisto`
--

LOCK TABLES `FileHisto` WRITE;
/*!40000 ALTER TABLE `FileHisto` DISABLE KEYS */;
/*!40000 ALTER TABLE `FileHisto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Matiere`
--

DROP TABLE IF EXISTS `Matiere`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Matiere` (
  `idMatiere` int(11) NOT NULL AUTO_INCREMENT,
  `Libelle` varchar(50) NOT NULL,
  `idSpecialite` int(11) NOT NULL,
  PRIMARY KEY (`idMatiere`),
  KEY `fk_spe_id` (`idSpecialite`),
  CONSTRAINT `fk_spe_id` FOREIGN KEY (`idSpecialite`) REFERENCES `Specialite` (`idSpecialite`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Matiere`
--

LOCK TABLES `Matiere` WRITE;
/*!40000 ALTER TABLE `Matiere` DISABLE KEYS */;
/*!40000 ALTER TABLE `Matiere` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ressource`
--

DROP TABLE IF EXISTS `Ressource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ressource` (
  `idRessource` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `idTypeRessource` int(11) NOT NULL,
  PRIMARY KEY (`idRessource`),
  KEY `ressource_id` (`idTypeRessource`),
  CONSTRAINT `ressource_id` FOREIGN KEY (`idTypeRessource`) REFERENCES `TypeRessource` (`idTypeRessource`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ressource`
--

LOCK TABLES `Ressource` WRITE;
/*!40000 ALTER TABLE `Ressource` DISABLE KEYS */;
/*!40000 ALTER TABLE `Ressource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Specialite`
--

DROP TABLE IF EXISTS `Specialite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Specialite` (
  `idSpecialite` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `idEcole` int(11) NOT NULL,
  PRIMARY KEY (`idSpecialite`),
  KEY `ecole_id` (`idEcole`),
  CONSTRAINT `ecole_id` FOREIGN KEY (`idEcole`) REFERENCES `Ecole` (`idEcole`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Specialite`
--

LOCK TABLES `Specialite` WRITE;
/*!40000 ALTER TABLE `Specialite` DISABLE KEYS */;
/*!40000 ALTER TABLE `Specialite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TypeRessource`
--

DROP TABLE IF EXISTS `TypeRessource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TypeRessource` (
  `idTypeRessource` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `idMatiere` int(11) NOT NULL,
  UNIQUE KEY `idTypeRessource` (`idTypeRessource`),
  KEY `typeRessource_id` (`idMatiere`),
  CONSTRAINT `typeRessource_id` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere` (`idMatiere`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TypeRessource`
--

LOCK TABLES `TypeRessource` WRITE;
/*!40000 ALTER TABLE `TypeRessource` DISABLE KEYS */;
/*!40000 ALTER TABLE `TypeRessource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mdp` varchar(300) NOT NULL,
  `dateInscription` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER defaultDateUser before INSERT
ON user FOR EACH ROW
set new.dateInscription = NOW() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-03 21:58:29
