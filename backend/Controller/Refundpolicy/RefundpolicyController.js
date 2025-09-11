const Refund = require("../../Module/RefundpolicyModule/RefundpolicyModule");

// Create a new refund policy
exports.createRefundPolicy = async (req, res) => {
    try {
        const { Desciption } = req.body;
        
        if (!Desciption) {
            return res.status(400).json({
                success: false,
                message: "Description is required"
            });
        }

        const newRefundPolicy = await Refund.create({ Desciption });
        
        res.status(201).json({
            success: true,
            message: "Refund policy created successfully",
            data: newRefundPolicy
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create refund policy",
            error: error.message
        });
    }
};

// Get all refund policies
exports.getAllRefundPolicies = async (req, res) => {
    try {
        const refundPolicies = await Refund.find();
        
        res.status(200).json({
            success: true,
            message: "Refund policies retrieved successfully",
            data: refundPolicies
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve refund policies",
            error: error.message
        });
    }
};

// Get single refund policy by ID
exports.getRefundPolicyById = async (req, res) => {
    try {
        const refundPolicy = await Refund.findById(req.params.id);
        
        if (!refundPolicy) {
            return res.status(404).json({
                success: false,
                message: "Refund policy not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Refund policy retrieved successfully",
            data: refundPolicy
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve refund policy",
            error: error.message
        });
    }
};

// Update refund policy
exports.updateRefundPolicy = async (req, res) => {
    try {
        const { Desciption } = req.body;
        
        if (!Desciption) {
            return res.status(400).json({
                success: false,
                message: "Description is required for update"
            });
        }

        const updatedRefundPolicy = await Refund.findByIdAndUpdate(
            req.params.id,
            { Desciption },
            { new: true, runValidators: true }
        );
        
        if (!updatedRefundPolicy) {
            return res.status(404).json({
                success: false,
                message: "Refund policy not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Refund policy updated successfully",
            data: updatedRefundPolicy
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update refund policy",
            error: error.message
        });
    }
};

// Delete refund policy
exports.deleteRefundPolicy = async (req, res) => {
    try {
        const deletedRefundPolicy = await Refund.findByIdAndDelete(req.params.id);
        
        if (!deletedRefundPolicy) {
            return res.status(404).json({
                success: false,
                message: "Refund policy not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Refund policy deleted successfully",
            data: deletedRefundPolicy
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete refund policy",
            error: error.message
        });
    }
};