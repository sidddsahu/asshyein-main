const express = require('express');
const { getAllCategorys, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../Controller/CategoryController');

const router = express.Router();

router.get('/', getAllCategorys);
router.post('/', createCategory);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;