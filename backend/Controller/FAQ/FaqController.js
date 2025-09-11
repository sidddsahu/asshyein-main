// const FAQ = require("../../Module/FAQ/FaqModule"); // Adjust the path as needed

// // Create a new FAQ
// exports.createFAQ = async (req, res) => {
//     try {
//         const { title, response,altText } = req.body;
        
//         if (!title || !response || !altText) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Title and response are required"
//             });
//         }

//         const newFAQ = await FAQ.create({ title, response });
        
//         res.status(201).json({
//             success: true,
//             message: "FAQ created successfully",
//             data: newFAQ
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to create FAQ",
//             error: error.message
//         });
//     }
// };

// // Get all FAQs
// exports.getAllFAQs = async (req, res) => {
//     try {
//         const faqs = await FAQ.find();
        
//         res.status(200).json({
//             success: true,
//             message: "FAQs retrieved successfully",
//             data: faqs
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to retrieve FAQs",
//             error: error.message
//         });
//     }
// };

// // Get single FAQ by ID
// exports.getFAQById = async (req, res) => {
//     try {
//         const faq = await FAQ.findById(req.params.id);
        
//         if (!faq) {
//             return res.status(404).json({
//                 success: false,
//                 message: "FAQ not found"
//             });
//         }
        
//         res.status(200).json({
//             success: true,
//             message: "FAQ retrieved successfully",
//             data: faq
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to retrieve FAQ",
//             error: error.message
//         });
//     }
// };

// // Update FAQ
// exports.updateFAQ = async (req, res) => {
//     try {
//         const { title, response } = req.body;
//         const updatedFAQ = await FAQ.findByIdAndUpdate(
//             req.params.id,
//             { title, response },
//             { new: true, runValidators: true }
//         );
        
//         if (!updatedFAQ) {
//             return res.status(404).json({
//                 success: false,
//                 message: "FAQ not found"
//             });
//         }
        
//         res.status(200).json({
//             success: true,
//             message: "FAQ updated successfully",
//             data: updatedFAQ
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to update FAQ",
//             error: error.message
//         });
//     }
// };

// // Delete FAQ
// exports.deleteFAQ = async (req, res) => {
//     try {
//         const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
        
//         if (!deletedFAQ) {
//             return res.status(404).json({
//                 success: false,
//                 message: "FAQ not found"
//             });
//         }
        
//         res.status(200).json({
//             success: true,
//             message: "FAQ deleted successfully",
//             data: deletedFAQ
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to delete FAQ",
//             error: error.message
//         });
//     }
// };


const FAQ = require("../../Module/FAQ/FaqModule"); // Adjust the path as needed
const mongoose = require('mongoose');

// Create a new FAQ
exports.createFAQ = async (req, res) => {
    try {
        const { title, response, altText } = req.body;
        
        if (!title || !response || !altText) {
            return res.status(400).json({
                success: false,
                message: "Title, response and altText are required"
            });
        }

        const newFAQ = await FAQ.create({ title, response, altText });
        
        res.status(201).json({
            success: true,
            message: "FAQ created successfully",
            data: newFAQ
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create FAQ",
            error: error.message
        });
    }
};

// Get all FAQs
exports.getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find().sort({ createdAt: -1 }); // Sorting by newest first
        
        res.status(200).json({
            success: true,
            message: "FAQs retrieved successfully",
            count: faqs.length,
            data: faqs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve FAQs",
            error: error.message
        });
    }
};

// Get single FAQ by ID
exports.getFAQById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid FAQ ID format"
            });
        }

        const faq = await FAQ.findById(req.params.id);
        
        if (!faq) {
            return res.status(404).json({
                success: false,
                message: "FAQ not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "FAQ retrieved successfully",
            data: faq
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve FAQ",
            error: error.message
        });
    }
};

// Update FAQ
exports.updateFAQ = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid FAQ ID format"
            });
        }

        const { title, response, altText } = req.body;
        const updateFields = {};
        
        if (title) updateFields.title = title;
        if (response) updateFields.response = response;
        if (altText) updateFields.altText = altText;

        if (Object.keys(updateFields).length === 0) {
            return res.status(400).json({
                success: false,
                message: "No valid fields provided for update"
            });
        }

        const updatedFAQ = await FAQ.findByIdAndUpdate(
            req.params.id,
            updateFields,
            { new: true, runValidators: true }
        );
        
        if (!updatedFAQ) {
            return res.status(404).json({
                success: false,
                message: "FAQ not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "FAQ updated successfully",
            data: updatedFAQ
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update FAQ",
            error: error.message
        });
    }
};

// Delete FAQ
exports.deleteFAQ = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid FAQ ID format"
            });
        }

        const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
        
        if (!deletedFAQ) {
            return res.status(404).json({
                success: false,
                message: "FAQ not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "FAQ deleted successfully",
            data: deletedFAQ
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete FAQ",
            error: error.message
        });
    }
};