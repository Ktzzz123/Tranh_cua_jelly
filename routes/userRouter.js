const router = require('express').Router()
const userCtrl = require('../controller/userCtrl')

router.post('/refresh',userCtrl.register)
router.get('/refresh_token',userCtrl.refreshToken)
router.post('/login',userCtrl.login)
router.get('/logout',userCtrl.logout)


module.exports = router