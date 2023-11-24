import express from 'express';
import { checkDrivers, createRide, getDetails } from '../controllers/rideController.js';
const router = express.Router()
router.get('/checkDrivers', checkDrivers)
router.post('/createRide', createRide)
router.get('/getDetails', getDetails)

export default router