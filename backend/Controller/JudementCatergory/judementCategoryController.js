const Category = require('../../Module/judementCategory');
// Get all Categorys
const getAllCategorys = async (req, res) => {
    try {
        const Categorys = await Category.find();
        res.status(200).json(Categorys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Category by ID
const getCategoryById = async (req, res) => {
    try {
        const Category = await Category.findById(req.params.id);
        if (!Category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(Category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createCategory = async (req, res) => {
    try {
        const { name, testSeries } = req.body;
        const newCategory = new Category({ name, testSeries }); // Add testSeries here
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




const updateCategory = async (req, res) => {
    try {
        const { name, testSeries } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { name, testSeries }, // Include testSeries
            { new: true }
        );
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const Categorys = await Category.find();
        res.status(200).json({ message: 'Category updated successfully', data: Categorys });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Category
const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const Categorys = await Category.find();
        res.status(200).json({ message: 'Category deleted successfully', data: Categorys });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllCategorys, getCategoryById, createCategory, updateCategory, deleteCategory };