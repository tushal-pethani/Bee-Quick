import express from 'express';
import { checkDrivers, createRide, getDetails, getDriverDetails, updateDropTime } from '../controllers/rideController.js';
const router = express.Router()
router.get('/checkDrivers', checkDrivers)
router.post('/createRide', createRide)
router.get('/getDetails', getDetails)
router.get('/getDriverDetails', getDriverDetails)
router.put('/updateDropTime', updateDropTime)

export default router