const express = require('express');
var router = express.Router();
const userAuthCtrl = require('../controller/userauth-controller.js');
const bookingCtrl = require('../controller/booking-controller.js');
const appointmentCtrl = require('../controller/appointment-controller.js');
const reportsCtrl = require('../controller/report-controller.js');
const beauticianCtrl = require('../controller/beautician-controller.js');
const adminServiceCtrl = require('../controller/admin-services-controller.js');

router.get('/server', (req, res, next) => {
    console.log("API works!");
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'API works!'
    });
});

// user authentication & authorization API URLS's
router.post('/login', userAuthCtrl.userLogin);
router.post('/signup', userAuthCtrl.userSignup);

// user bookings API URL's
router.post('/get_all_user_bookings', bookingCtrl.getAllUserBookings);
router.post('/get_bookings_by_beautician', bookingCtrl.getBookingsByBeautician);
router.post('/get_booking_by_id', bookingCtrl.getBookingById);
router.post('/update_booking_status_by_id', bookingCtrl.updateBookingStatusById);
router.post('/add_booking', bookingCtrl.addBooking);
router.post('/delete_booking', bookingCtrl.deleteBooking);

// user appointments API URL's
router.post('/add_appointment', appointmentCtrl.addAppointment);
router.post('/update_appointment', appointmentCtrl.updateAppointment);
router.post('/delete_appointment', appointmentCtrl.deleteAppointment);

// user reports API URL's
router.post('/get_checkup_details', reportsCtrl.getCheckupDetails);
router.post('/add_report', reportsCtrl.addReport);
router.post('/update_checkup', reportsCtrl.updateCheckup);

// beauticians API URL's
router.post('/get_all_beauticians', beauticianCtrl.getAllBeauticians);

// admin services API URL's
router.post('/add_beautician', adminServiceCtrl.addBeautician);
router.post('/add_beauty_parlour', adminServiceCtrl.addBeautyParlour);

module.exports = router;