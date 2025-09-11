const express = require('express');
const ContactController = require('../Controller/SyllabusController');

const router = express.Router();

router.post('/add', ContactController.WhatsNewSave);
router.get('/allcontact', ContactController.getWhatsNew );
router.delete('/alldelete/:id', ContactController.WhatsNewDelete);






module.exports = router;