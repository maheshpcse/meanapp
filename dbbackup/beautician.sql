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
  `book_id` int(11) DEFAULT NULL,
  `appointment_id` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` text DEFAULT NULL,
  `services` text DEFAULT NULL,
  `amounts` text DEFAULT NULL,
  `issued_by` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`app_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

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
  `beautician_id` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `services` text DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`worker_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;

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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

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
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: appointment
# ------------------------------------------------------------


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

INSERT INTO
  `beauty_service_workers` (
    `worker_id`,
    `owner_id`,
    `beautician_id`,
    `name`,
    `age`,
    `experience`,
    `services`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    1,
    3,
    NULL,
    'test one',
    26,
    2,
    '1,3,4,5,2,10,9,8,7',
    4,
    1,
    '2021-06-14 21:35:37',
    '2021-06-15 15:47:22'
  );
INSERT INTO
  `beauty_service_workers` (
    `worker_id`,
    `owner_id`,
    `beautician_id`,
    `name`,
    `age`,
    `experience`,
    `services`,
    `rating`,
    `status`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    2,
    4,
    NULL,
    'test two',
    27,
    2,
    '1,2,3,10,9,8,11,12,13',
    3,
    1,
    '2021-06-14 21:38:02',
    '2021-06-16 10:59:13'
  );

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
    'TressPlex Spa Therapy - Men',
    '1850',
    1,
    '2021-05-31 14:49:25',
    '2021-06-14 19:27:05'
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
    'Insta Care Spa - Men',
    '700',
    1,
    '2021-05-31 14:49:25',
    '2021-06-14 19:27:01'
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
    'MESMER-EYES - Sn. Artist Bridal Expert',
    '1700',
    1,
    '2021-05-31 14:50:35',
    '2021-06-14 19:26:12'
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
    'Bridal occasion Ultimate Airbrush Make -Up - Bridal Expert',
    '15500',
    1,
    '2021-05-31 14:51:08',
    '2021-06-14 19:27:28'
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

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: booking
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: report
# ------------------------------------------------------------


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
    'master',
    'maheshpm1599@gmail.com',
    '1234',
    '8886197968',
    NULL,
    'admin',
    1,
    '2021-06-14 19:29:20',
    '2021-06-14 19:29:30'
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
    'admin',
    'venuarun6@gmail.com',
    '1234',
    '9603707383',
    NULL,
    'admin',
    1,
    '2021-06-14 19:30:40',
    '2021-06-16 18:57:32'
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
    'test one',
    'test001',
    'testone001@gmail.com',
    '20210615150639',
    '9876543210',
    NULL,
    'beautician',
    1,
    '2021-06-14 21:35:37',
    '2021-06-15 15:46:41'
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
    'test two',
    'test002',
    'testtwo002@gmail.com',
    '20210614210620',
    '1234567890',
    NULL,
    'beautician',
    1,
    '2021-06-14 21:38:02',
    '2021-06-16 10:59:13'
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
    'test three',
    'test003',
    'testthree003@gmail.com',
    '1234',
    '3216549870',
    NULL,
    'user',
    1,
    '2021-06-16 18:58:58',
    '2021-06-16 18:58:58'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
