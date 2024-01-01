import Router from 'express'
import CurrentDateController from './CurrentDateController.js'
const router = new Router()
router.get('/today', CurrentDateController.getTodayData)
router.get('/chosen', CurrentDateController.getChosenData)

export default router;