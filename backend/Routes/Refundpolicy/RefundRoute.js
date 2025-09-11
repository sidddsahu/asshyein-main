const express = require('express');
const router = express.Router();
const refundController = require('../../Controller/Refundpolicy/RefundpolicyController');


router.post('/', refundController.createRefundPolicy);
router.get('/', refundController.getAllRefundPolicies);
router.get('/:id', refundController.getRefundPolicyById);
router.put('/:id', refundController.updateRefundPolicy);
router.delete('/:id', refundController.deleteRefundPolicy);

module.exports = router;