const router = require('express').Router();


const { regiController, logiController, logoController } = require('../controllers/auth.countroller');

router.post('/register', regiController);
router.post('/login', logiController);
router.post('/logout', logoController);




module.exports = router;