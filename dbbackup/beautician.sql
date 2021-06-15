/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: appointment
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `appointment` (
  `app_id` int(11) NOT NULL AUTO_INCREMENT,
  `appointment_id` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` text DEFAULT NULL,
  `service_amounts` text DEFAULT NULL,
  `issued_by` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`app_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: beauty_parlours
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `beauty_parlours` (
  `beautician_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) DEFAULT NULL,
  `beautician_name` varchar(50) DEFAULT NULL,
  `experience` int(10) DEFAULT NULL,
  `parlour_name` varchar(50) DEFAULT NULL,
  `law_firm_name` varchar(100) DEFAULT NULL,
  `services` text DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `users_limit` int(11) DEFAULT NULL,
  `place` varchar(50) DEFAULT NULL,
  `rating` int(10) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`beautician_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: beauty_service_workers
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `beauty_service_workers` (
  `worker_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`worker_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: beauty_services
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `beauty_services` (
  `main_service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_name` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`main_service_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: beauty_sub_services
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `beauty_sub_services` (
  `sub_service_id` int(11) NOT NULL AUTO_INCREMENT,
  `main_service_id` int(11) NOT NULL,
  `sub_service_name` varchar(255) DEFAULT NULL,
  `service_amount` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`sub_service_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 28 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: booking
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `booking` (
  `book_id` int(11) NOT NULL AUTO_INCREMENT,
  `booking_id` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `beautician_id` int(11) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `law_firm_name` varchar(50) DEFAULT NULL,
  `services` text DEFAULT NULL,
  `amounts` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `booking_status` tinyint(1) DEFAULT 1 COMMENT '0-Reject, 1-Accept, 2-Pending, 3-Completed',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`book_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: report
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `report` (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `appointment_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `amount` varchar(50) DEFAULT NULL,
  `report` varchar(50) DEFAULT NULL,
  `issued_by` varchar(20) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`report_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `profile` text DEFAULT NULL,
  `role` varchar(20) DEFAULT 'user',
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`user_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 43 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: appointment
# ------------------------------------------------------------

INSERT INTO
  `appointment` (
    `app_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `description`,
    `service_amounts`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    '#20210527080011',
    9,
    '2021-05-27',
    'Lakme Youth Infinity Sculpting Facial,Tangy Cleanup,Marine Body Glow with Body Masque,Back Massage - Detoxifying',
    '3100,1000,4650,700',
    'test001',
    1,
    '2021-05-24 21:27:50',
    '2021-06-13 21:17:14'
  );
INSERT INTO
  `appointment` (
    `app_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `description`,
    `service_amounts`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    '#20210528090015',
    10,
    '2021-05-28',
    'Tangy Cleanup,Marine Body Glow with Body Masque,Back Massage - Stress Relief,TressPlex Spa Therapy- Men',
    '1000,4650,700,1850',
    'test001',
    1,
    '2021-05-24 21:27:50',
    '2021-06-13 21:17:25'
  );
INSERT INTO
  `appointment` (
    `app_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `description`,
    `service_amounts`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    4,
    '#20210602120010',
    12,
    '2021-06-02',
    'Lakme Gloss Intense Hydrating Ritual,Back Massage - Stress Relief',
    '2100,700',
    'test002',
    1,
    '2021-05-24 21:30:47',
    '2021-06-13 21:17:37'
  );
INSERT INTO
  `appointment` (
    `app_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `description`,
    `service_amounts`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    5,
    '#20210602120011',
    13,
    '2021-06-02',
    'Marine Body Glow with Body Masque,Back Massage - Detoxifying,MESMER-EYES - Sn. Artist, Bridal Expert',
    '4650,700,1700',
    'test002',
    1,
    '2021-05-24 21:30:47',
    '2021-06-13 21:17:47'
  );
INSERT INTO
  `appointment` (
    `app_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `description`,
    `service_amounts`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    7,
    '#20210530210530',
    14,
    '2021-05-30',
    'TressPlex Spa Therapy- Men,Insta Care Spa- Men,Bridal occasion Ultimate Airbrush Make-Up- Bridal Expert,YOUNG FOREVER - Artist',
    '1850,700,15500,4500',
    'test002',
    1,
    '2021-05-30 21:49:30',
    '2021-06-13 21:17:57'
  );
INSERT INTO
  `appointment` (
    `app_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `description`,
    `service_amounts`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    8,
    '#20210602190630',
    11,
    '2021-06-02',
    'Tangy Cleanup,Marine Body Glow with Body Masque,TressPlex Spa Therapy- Men',
    '1000,4650,1850',
    'test001',
    1,
    '2021-06-02 19:40:30',
    '2021-06-13 21:18:23'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: beauty_parlours
# ------------------------------------------------------------

INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    3,
    'ABC',
    1,
    'The Look',
    'Above The Bar',
    '{\"1\":[1,2,3],\"2\":[7,8,9],\"3\":[11,12,13],\"4\":[15,16,17]}',
    '09:00:00',
    '19:00:00',
    20,
    'Madhapur, Hyderabad',
    4,
    1,
    '2021-05-24 21:02:16',
    '2021-06-03 20:42:25'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    4,
    'DEF',
    2,
    'Mane Beautilocks',
    '\t\r\nJustice Served',
    '{\"1\":[2,3,4],\"2\":[7,8,9],\"3\":[12,13,14],\"4\":[15,16,17]}',
    '10:00:00',
    '18:00:00',
    30,
    'JubliHils, Hyderabad',
    4,
    1,
    '2021-05-24 21:02:16',
    '2021-06-03 20:42:30'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    3,
    5,
    'GHI',
    3,
    'Cappiello Salon',
    'Just Justice',
    '{\"1\":[1,2,3,4],\"2\":[7,8,9,10],\"3\":[11,12,13,14],\"4\":[15,16,17],\"5\":[19,20,21]}',
    '09:30:00',
    '18:00:00',
    40,
    'Gachhibowli, Hyderabad',
    5,
    1,
    '2021-05-24 21:04:15',
    '2021-06-03 20:42:37'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    4,
    6,
    'JKL',
    5,
    'Bombshell Studio',
    '\t\r\nAttorney Alliance',
    '{\"1\":[1,2,3],\"2\":[8,9,10],\"3\":[11,12,13],\"4\":[15,16,17],\"5\":[19,20,21]}',
    '10:30:00',
    '19:30:00',
    50,
    'Hitech City, Hyderabad',
    4,
    0,
    '2021-05-24 21:04:15',
    '2021-06-03 20:42:50'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    5,
    7,
    'MNO',
    4,
    'Cute Cut',
    '\t\r\nActionable Attorneys\r\n',
    '{\"1\":[1,2,3],\"2\":[7,8,9],\"3\":[11,12,13],\"4\":[15,16,17]}',
    '11:30:00',
    '20:30:00',
    35,
    'FilmNagar, Hyderabad',
    3,
    0,
    '2021-05-24 21:06:10',
    '2021-06-03 20:42:56'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    6,
    8,
    'PQR',
    3,
    'Sweet Pixie Salon',
    'Just Justice',
    '{\"1\":[1,2,3],\"2\":[8,9,10],\"3\":[11,12,13],\"4\":[16,17],\"5\":[19,20,21]}',
    '08:30:00',
    '19:00:00',
    25,
    'Kondapur, Hyderabad',
    4,
    1,
    '2021-05-24 21:06:10',
    '2021-06-03 20:43:01'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    7,
    15,
    'STU',
    2,
    'The Big Tease Salon',
    'Justice Served',
    '{\"1\":[2,3,4],\"2\":[7,8,9],\"3\":[12,13,14],\"4\":[15,16,17]}',
    '08:00:00',
    '20:00:00',
    20,
    'Panjagutta, Hyderbad',
    2,
    1,
    '2021-05-24 21:08:25',
    '2021-06-03 20:43:05'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    8,
    16,
    'VWX',
    1,
    'Mirror Mirror',
    'Above The Bar',
    '{\"1\":[1,2,3,4],\"2\":[7,8,9,10],\"3\":[11,12,13,14],\"4\":[15,16,17],\"5\":[19,20,21]}',
    '07:30:00',
    '20:30:00',
    20,
    'Ameerpet, Hyderabad',
    4,
    0,
    '2021-05-24 21:08:25',
    '2021-06-03 20:43:10'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    9,
    17,
    'YZA',
    2,
    'The Natural Beauty',
    'Add More Beauty',
    '{\"1\":[1,2,3],\"2\":[8,9,10],\"3\":[11,12,13],\"4\":[16,17],\"5\":[19,20,21]}',
    '07:00:00',
    '18:00:00',
    30,
    'Lingampally, Hyderabad',
    3,
    1,
    '2021-05-27 21:21:54',
    '2021-06-03 20:43:13'
  );
INSERT INTO
  `beauty_parlours` (
    `beautician_id`,
    `owner_id`,
    `beautician_name`,
    `experience`,
    `parlour_name`,
    `law_firm_name`,
    `services`,
    `start_time`,
    `end_time`,
    `users_limit`,
    `place`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    10,
    8,
    'BCD',
    2,
    'KingsVsQueens',
    'Skin Set Better',
    '{\"1\":[2,1,3,4,6],\"2\":[10,9,8,7],\"3\":[11,13,14],\"4\":[18,17],\"5\":[23,22,21,20]}',
    '09:30:00',
    '19:30:00',
    30,
    'Madhapur, Hyderabad',
    4,
    1,
    '2021-06-02 20:54:03',
    '2021-06-03 20:43:15'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: beauty_service_workers
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: beauty_services
# ------------------------------------------------------------

INSERT INTO
  `beauty_services` (
    `main_service_id`,
    `service_name`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    'skin care',
    1,
    '2021-05-31 14:41:27',
    '2021-05-31 14:41:27'
  );
INSERT INTO
  `beauty_services` (
    `main_service_id`,
    `service_name`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    'body care',
    1,
    '2021-05-31 14:41:27',
    '2021-05-31 14:41:27'
  );
INSERT INTO
  `beauty_services` (
    `main_service_id`,
    `service_name`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    3,
    'hair care',
    1,
    '2021-05-31 14:41:27',
    '2021-05-31 14:41:27'
  );
INSERT INTO
  `beauty_services` (
    `main_service_id`,
    `service_name`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    4,
    'makeup styling',
    1,
    '2021-05-31 14:41:27',
    '2021-05-31 14:41:27'
  );
INSERT INTO
  `beauty_services` (
    `main_service_id`,
    `service_name`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    5,
    'hand & feet care',
    1,
    '2021-05-31 14:41:27',
    '2021-05-31 14:41:27'
  );
INSERT INTO
  `beauty_services` (
    `main_service_id`,
    `service_name`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    7,
    'test care',
    1,
    '2021-06-09 14:50:19',
    '2021-06-09 14:50:19'
  );
INSERT INTO
  `beauty_services` (
    `main_service_id`,
    `service_name`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    8,
    'test care1',
    1,
    '2021-06-09 14:52:31',
    '2021-06-09 14:52:31'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: beauty_sub_services
# ------------------------------------------------------------

INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    1,
    'Lakme Youth Infinity Sculpting Facial',
    '3100',
    1,
    '2021-05-31 14:45:19',
    '2021-05-31 14:45:19'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    1,
    'Tangy Cleanup',
    '1000',
    1,
    '2021-05-31 14:45:19',
    '2021-05-31 14:45:19'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    3,
    1,
    'Fruit Facial',
    '1600',
    1,
    '2021-05-31 14:45:48',
    '2021-05-31 14:46:30'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    4,
    1,
    'Lakme Gloss Intense Hydrating Ritual',
    '2100',
    1,
    '2021-05-31 14:45:48',
    '2021-05-31 14:45:48'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    5,
    1,
    'Skin Moist Masque',
    '1300',
    1,
    '2021-05-31 14:46:16',
    '2021-05-31 14:46:16'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    6,
    1,
    'Insta Sheen',
    '2100',
    1,
    '2021-05-31 14:46:16',
    '2021-05-31 14:46:16'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    7,
    2,
    'Back Massage - Detoxifying',
    '700',
    1,
    '2021-05-31 14:47:39',
    '2021-05-31 14:47:39'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    8,
    2,
    'Marine Body Glow with Body Masque',
    '4650',
    1,
    '2021-05-31 14:47:39',
    '2021-05-31 14:47:39'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    9,
    2,
    'Back Massage - Stress Relief',
    '700',
    1,
    '2021-05-31 14:48:02',
    '2021-05-31 14:48:02'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    10,
    2,
    'Marine Back Glow with Masque',
    '1300',
    1,
    '2021-05-31 14:48:02',
    '2021-05-31 14:48:02'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    11,
    3,
    'Essential Dandruff Treatment',
    '1350',
    1,
    '2021-05-31 14:48:56',
    '2021-05-31 14:48:56'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    12,
    3,
    'Moroccan Oil Head Massage- Men',
    '750',
    1,
    '2021-05-31 14:48:56',
    '2021-05-31 14:48:56'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    13,
    3,
    'TressPlex Spa Therapy- Men',
    '1850',
    1,
    '2021-05-31 14:49:25',
    '2021-05-31 14:49:25'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    14,
    3,
    'Insta Care Spa- Men',
    '700',
    1,
    '2021-05-31 14:49:25',
    '2021-05-31 14:49:25'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    15,
    4,
    'MESMER-EYES - Sn. Artist, Bridal Expert',
    '1700',
    1,
    '2021-05-31 14:50:35',
    '2021-05-31 14:50:35'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    16,
    4,
    'YOUNG FOREVER - Artist',
    '4500',
    1,
    '2021-05-31 14:50:35',
    '2021-05-31 14:50:35'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    17,
    4,
    'Bridal occasion Ultimate Airbrush Make-Up- Bridal Expert',
    '15500',
    1,
    '2021-05-31 14:51:08',
    '2021-05-31 14:51:08'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    18,
    4,
    'Makeup by National Creative Director',
    '50000',
    1,
    '2021-05-31 14:51:08',
    '2021-05-31 14:51:08'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    19,
    5,
    'Regular Manicure',
    '450',
    1,
    '2021-05-31 14:51:52',
    '2021-05-31 14:51:52'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    20,
    5,
    'Marine Hand Glow',
    '750',
    1,
    '2021-05-31 14:51:52',
    '2021-05-31 14:51:52'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    21,
    5,
    'Candy Crush Manicure',
    '1300',
    1,
    '2021-05-31 14:52:17',
    '2021-05-31 14:52:17'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    22,
    5,
    'Marine Hand Glow with Masque',
    '1100',
    1,
    '2021-05-31 14:52:17',
    '2021-05-31 14:52:17'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    23,
    5,
    'Regular Pedicure',
    '550',
    1,
    '2021-05-31 14:52:45',
    '2021-05-31 14:52:45'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    24,
    5,
    'White Tea Vitality Pedicure',
    '1100',
    1,
    '2021-05-31 14:52:45',
    '2021-05-31 14:52:45'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    25,
    7,
    'test sub one',
    '1200',
    1,
    '2021-06-09 14:50:19',
    '2021-06-09 14:50:19'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    26,
    7,
    'test sub two',
    '1560',
    1,
    '2021-06-09 14:50:19',
    '2021-06-09 14:50:19'
  );
INSERT INTO
  `beauty_sub_services` (
    `sub_service_id`,
    `main_service_id`,
    `sub_service_name`,
    `service_amount`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    27,
    8,
    'sub care1',
    '450',
    1,
    '2021-06-09 14:52:31',
    '2021-06-09 14:52:31'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: booking
# ------------------------------------------------------------

INSERT INTO
  `booking` (
    `book_id`,
    `booking_id`,
    `user_id`,
    `beautician_id`,
    `owner_id`,
    `law_firm_name`,
    `services`,
    `amounts`,
    `date`,
    `time`,
    `booking_status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    'W269N-WFGWX-YVC9B',
    9,
    1,
    3,
    'Above The Bar',
    'Lakme Youth Infinity Sculpting Facial,Tangy Cleanup,Marine Body Glow with Body Masque,Back Massage - Detoxifying',
    '3100,1000,4650,700',
    '2021-06-01',
    '09:00:00',
    1,
    '2021-05-24 21:12:36',
    '2021-06-13 21:04:58'
  );
INSERT INTO
  `booking` (
    `book_id`,
    `booking_id`,
    `user_id`,
    `beautician_id`,
    `owner_id`,
    `law_firm_name`,
    `services`,
    `amounts`,
    `date`,
    `time`,
    `booking_status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    'MH37W-N47XK-V7XM9',
    10,
    1,
    3,
    'Justice Served',
    'Tangy Cleanup,Marine Body Glow with Body Masque,Back Massage - Stress Relief,TressPlex Spa Therapy- Men',
    '1000,4650,700,1850',
    '2021-05-27',
    '11:30:00',
    1,
    '2021-05-24 21:12:36',
    '2021-06-13 21:08:06'
  );
INSERT INTO
  `booking` (
    `book_id`,
    `booking_id`,
    `user_id`,
    `beautician_id`,
    `owner_id`,
    `law_firm_name`,
    `services`,
    `amounts`,
    `date`,
    `time`,
    `booking_status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    3,
    'F34E-RST1-OPQS',
    11,
    1,
    3,
    'Just Justice',
    'Tangy Cleanup,Marine Body Glow with Body Masque,TressPlex Spa Therapy- Men',
    '1000,4650,1850',
    '2021-05-29',
    '03:00:00',
    1,
    '2021-05-24 21:14:28',
    '2021-06-13 21:10:40'
  );
INSERT INTO
  `booking` (
    `book_id`,
    `booking_id`,
    `user_id`,
    `beautician_id`,
    `owner_id`,
    `law_firm_name`,
    `services`,
    `amounts`,
    `date`,
    `time`,
    `booking_status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    4,
    'NPPR9-FWDCX-D2C8J',
    12,
    2,
    4,
    'Actionable Attorneys',
    'Lakme Gloss Intense Hydrating Ritual,Back Massage - Stress Relief',
    '2100,700',
    '2021-06-01',
    '04:30:00',
    1,
    '2021-05-24 21:14:28',
    '2021-06-13 21:12:00'
  );
INSERT INTO
  `booking` (
    `book_id`,
    `booking_id`,
    `user_id`,
    `beautician_id`,
    `owner_id`,
    `law_firm_name`,
    `services`,
    `amounts`,
    `date`,
    `time`,
    `booking_status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    5,
    'DPH2V-TTNVB-4X9Q3',
    13,
    2,
    4,
    'Attorney Alliance',
    'Marine Body Glow with Body Masque,Back Massage - Detoxifying,MESMER-EYES - Sn. Artist, Bridal Expert',
    '4650,700,1700',
    '2021-06-02',
    '08:00:00',
    1,
    '2021-05-24 21:15:03',
    '2021-06-13 21:12:58'
  );
INSERT INTO
  `booking` (
    `book_id`,
    `booking_id`,
    `user_id`,
    `beautician_id`,
    `owner_id`,
    `law_firm_name`,
    `services`,
    `amounts`,
    `date`,
    `time`,
    `booking_status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    6,
    'EX511-H24EF-NLQ6V',
    14,
    2,
    4,
    'Above The Bar',
    'TressPlex Spa Therapy- Men,Insta Care Spa- Men,Bridal occasion Ultimate Airbrush Make-Up- Bridal Expert,YOUNG FOREVER - Artist',
    '1850,700,15500,4500',
    '2021-05-26',
    '22:05:45',
    1,
    '2021-05-25 22:01:50',
    '2021-06-13 21:14:30'
  );
INSERT INTO
  `booking` (
    `book_id`,
    `booking_id`,
    `user_id`,
    `beautician_id`,
    `owner_id`,
    `law_firm_name`,
    `services`,
    `amounts`,
    `date`,
    `time`,
    `booking_status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    7,
    '4PM4I-5LO2E-4LQ8N',
    9,
    3,
    5,
    'Just Justice',
    'Tangy Cleanup,Fruit Facial,Back Massage - Detoxifying',
    '1000,1600,700',
    '2021-06-03',
    '10:06:59',
    2,
    '2021-06-02 19:24:35',
    '2021-06-13 21:16:32'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: report
# ------------------------------------------------------------

INSERT INTO
  `report` (
    `report_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `amount`,
    `report`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    4,
    12,
    '2021-05-30',
    '15000',
    'test bill',
    'test002',
    1,
    '2021-05-30 21:58:10',
    '2021-05-30 21:58:10'
  );
INSERT INTO
  `report` (
    `report_id`,
    `appointment_id`,
    `user_id`,
    `date`,
    `amount`,
    `report`,
    `issued_by`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    1,
    9,
    '2021-06-02',
    '9450',
    'sample report',
    'test001',
    1,
    '2021-06-02 21:28:49',
    '2021-06-13 21:26:45'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: users
# ------------------------------------------------------------

INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    'Pachapalam Mahesh',
    'MaheshCse',
    'maheshpm1599@gmail.com',
    '1234',
    '8886197968',
    NULL,
    'admin',
    1,
    '2021-05-20 00:53:59',
    '2021-06-03 16:53:44'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    'Vella Venu Kalyan',
    'VenuArun',
    'venuarun6@gmail.com',
    '1234',
    '9603707383',
    NULL,
    'admin',
    1,
    '2021-05-23 22:29:28',
    '2021-05-29 16:24:44'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    3,
    'Test Master',
    'test001',
    'testmaster123@gmail.com',
    '1234',
    '1234567890',
    NULL,
    'beautician',
    1,
    '2021-05-24 18:43:52',
    '2021-05-29 16:25:03'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    4,
    'Test Hero',
    'test002',
    'testhero420@gmail.com',
    '1234',
    '9876543210',
    NULL,
    'beautician',
    1,
    '2021-05-24 21:32:28',
    '2021-05-29 16:25:05'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    5,
    'Test Villian',
    'test003',
    'testvillian143@gmail.com',
    '20210527200537',
    '7894561230',
    NULL,
    'beautician',
    1,
    '2021-05-27 20:14:54',
    '2021-05-27 20:15:33'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    6,
    'Test Four',
    'test004',
    'testfour004@gmail.com',
    '20210529150513',
    '1478523690',
    NULL,
    'beautician',
    1,
    '2021-05-29 15:44:31',
    '2021-05-29 15:44:31'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    7,
    'Test Five',
    'test005',
    'testfive005@gmail.com',
    '20210529150554',
    '3698521470',
    NULL,
    'beautician',
    1,
    '2021-05-29 15:45:04',
    '2021-05-29 15:45:04'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    8,
    'Test Six',
    'test006',
    'testsix006@gmail.com',
    '20210529150511',
    '1598745630',
    NULL,
    'beautician',
    1,
    '2021-05-29 15:47:24',
    '2021-05-29 15:47:24'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    9,
    'Test Seven',
    'test007',
    'testseven007@gmail.com',
    '1234',
    '2587419630',
    NULL,
    'user',
    1,
    '2021-05-29 16:36:51',
    '2021-05-29 16:39:10'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    10,
    'Test Eight',
    'test008',
    'testeight008@gmail.com',
    '1234',
    '7894561230',
    NULL,
    'user',
    1,
    '2021-05-29 16:36:51',
    '2021-05-29 16:40:10'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    11,
    'Test Nine',
    'test009',
    'testnine009@gmail.com',
    '1234',
    '1234567890',
    NULL,
    'user',
    1,
    '2021-05-29 16:36:51',
    '2021-05-29 16:37:20'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    12,
    'Test Ten',
    'test010',
    'testten010@gmail.com',
    '1234',
    '3698521470',
    NULL,
    'user',
    1,
    '2021-05-29 16:36:51',
    '2021-05-29 16:37:20'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    13,
    'Test Eleven',
    'test011',
    'testeleven011@gmail.com',
    '1234',
    '7661876696',
    NULL,
    'user',
    1,
    '2021-05-29 16:36:51',
    '2021-05-29 16:37:20'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    14,
    'Test Twelve',
    'test012',
    'testtwelve012@gmail.com',
    '1234',
    '9949393483',
    NULL,
    'user',
    1,
    '2021-05-29 16:36:51',
    '2021-05-29 16:42:26'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    15,
    'Test Thirteen',
    'test013',
    'testthirteen013@gmail.com',
    '20210610150623',
    '2596317801',
    NULL,
    'beautician',
    1,
    '2021-06-10 15:30:50',
    '2021-06-10 15:30:50'
  );
INSERT INTO
  `users` (
    `user_id`,
    `fullname`,
    `username`,
    `email`,
    `password`,
    `mobile`,
    `profile`,
    `role`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    16,
    'Test Fourteen',
    'test014',
    'testfourteen014@gmail.com',
    '20210610210624',
    '2222233333',
    NULL,
    'beautician',
    1,
    '2021-06-10 20:48:32',
    '2021-06-13 10:29:24'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
