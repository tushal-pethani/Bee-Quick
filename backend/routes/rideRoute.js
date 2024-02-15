import express from 'express';
import { checkDrivers, createRide, getDetails, getDriverDetails, updateDropTime, cancelRide } from '../controllers/rideController.js';
const router = express.Router()
router.get('/checkDrivers', checkDrivers)
router.post('/createRide', createRide)
router.get('/getDetails', getDetails)
router.get('/getDriverDetails', getDriverDetails)
router.put('/updateDropTime', updateDropTime)
router.post('/cancel-ride', cancelRide)

export default router