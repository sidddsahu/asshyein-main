const Member = require("../Module/DiscountModule"); // Adjust the path as needed

// Create a new Member
exports.createMember = async (req, res) => {
    try {
        const { title, desciption, limited, limitedoffer,altText } = req.body;
        
        const newMember = new Member({
            title,
            desciption,
            limited,
            altText,
            limitedoffer
        });

        const savedMember = await newMember.save();
        res.status(201).json({
            success: true,
            data: savedMember,
            message: "Member created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get all Members
exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json({
            success: true,
            data: members,
            message: "Members retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get a single Member by ID
exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }
        res.status(200).json({
            success: true,
            data: member,
            message: "Member retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update a Member
exports.updateMember = async (req, res) => {
    try {
        const { title, desciption, limited, limitedoffer ,altText} = req.body;
        
        const updatedMember = await Member.findByIdAndUpdate(
            req.params.id,
            {
                title,
                desciption,
                limited,
                limitedoffer,
                altText
            },
            { new: true, runValidators: true }
        );

        if (!updatedMember) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedMember,
            message: "Member updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete a Member
exports.deleteMember = async (req, res) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(req.params.id);
        
        if (!deletedMember) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            data: deletedMember,
            message: "Member deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};