const express = require('express');
const router = express.Router();
const memberController = require('../Controller/DiscountController');

// CRUD Routes
router.post('/add', memberController.createMember);
router.get('/display', memberController.getAllMembers);
router.get('/display/:id', memberController.getMemberById);
router.put('/display/:id', memberController.updateMember);
router.delete('/deleted/:id', memberController.deleteMember);

module.exports = router;