const express = require('express')
const tracketController = require('../controllers/index')
const router = express.Router()


router.get('/transaction', tracketController.getTransaction),
router.post('/add-transaction', tracketController.addTransaction)
router.delete('/delete-transaction/:id', tracketController.deleteTransaction)
router.put('/update-transaction/:id', tracketController.updateTransaction)


module.exports = router 