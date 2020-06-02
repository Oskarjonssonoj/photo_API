# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Värd: 127.0.0.1 (MySQL 5.7.26)
# Databas: photo
# Genereringstid: 2020-06-02 11:31:56 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Tabelldump albums
# ------------------------------------------------------------

DROP TABLE IF EXISTS `albums`;

CREATE TABLE `albums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;

INSERT INTO `albums` (`id`, `title`, `user_id`)
VALUES
	(9,'Fiskebilder',10),
	(10,'Familjebilder',10),
	(12,'Padelbilder',9),
	(13,'Resebilder',9),
	(14,'Sommarbilder',10);

/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump albums_photos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `albums_photos`;

CREATE TABLE `albums_photos` (
  `album_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `albums_photos` WRITE;
/*!40000 ALTER TABLE `albums_photos` DISABLE KEYS */;

INSERT INTO `albums_photos` (`album_id`, `photo_id`)
VALUES
	(14,37),
	(12,38),
	(12,39),
	(13,40),
	(13,41),
	(13,42),
	(9,43),
	(9,44),
	(9,45),
	(10,46),
	(10,47),
	(14,48),
	(14,49),
	(10,44),
	(13,50),
	(12,50),
	(14,51);

/*!40000 ALTER TABLE `albums_photos` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump photos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;

INSERT INTO `photos` (`id`, `title`, `url`, `comment`, `user_id`)
VALUES
	(38,'Padelvinst i Höör','http://padelMapp_Oskar.dsd','Härlig vinst',9),
	(39,'Finalspel','http://padelMapp_Oskar.dsd','Tuff match',9),
	(40,'Las Vegas - The Strip','http://reseMapp_Oskar.dsd',NULL,9),
	(41,'California - Downtown LA','http://reseMapp_Oskar.dsd','Härlig dag i Downtown LA',9),
	(42,'California - Santa Barbara','http://reseMapp_Oskar.dsd','Strandhäng',9),
	(43,'Tampa 2014','http://fiske_annan_semester.dsd',NULL,10),
	(44,'Norrland 2017','http://fiske_annan_semester.dsd','Gädda 14KG',10),
	(45,'Cuba 2020','http://fiske_semester.dsd','Ute på katamaranen',10),
	(46,'Mormors 85-årsdag','http://familjebilder.dsd',NULL,10),
	(47,'Barnen leker','http://familjebilder.dsd','Barnen leker för fullt',10),
	(48,'Blomma','http://sommarbilder.dsd','Gul blomma',10),
	(49,'Träd','http://sommarbilder.dsd','Äppelträd i trädgården',10),
	(50,'California - Häng med grabbarna','http://reseMapp_Oskar.dsd','Öl på stan',9),
	(51,'Vårsol','http://sommarBilder_ola.dsd',NULL,10);

/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`)
VALUES
	(9,'oskar@gmail.com','$2b$10$1c3ZGK38LA.SP5Wa29Woweup6NgXQlJ0KxgWpd3Nu12Puzq3P3cra','Oskar','Jönsson'),
	(10,'jonsson@gmail.com','$2b$10$OYsWZvOio.8b/lc9wD5M5OsJaaMubTHAJUh1rxkt6SBUFih034dUu','Ola','Jönsson');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
