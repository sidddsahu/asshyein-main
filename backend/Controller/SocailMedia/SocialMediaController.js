const Social = require("../../Module/Socialmedia/SocialModule");

// Create a new social link
exports.createSocial = async (req, res) => {
    try {
        const { icon, url, altText } = req.body;
        
        const social = new Social({
            icon,
            url,
            altText
        });

        const savedSocial = await social.save();
        
        res.status(201).json({
            success: true,
            data: savedSocial,
            message: "Social link created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Get all social links
exports.getAllSocials = async (req, res) => {
    try {
        const socials = await Social.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            data: socials,
            count: socials.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Get single social link by ID
exports.getSocialById = async (req, res) => {
    try {
        const social = await Social.findById(req.params.id);
        
        if (!social) {
            return res.status(404).json({
                success: false,
                error: "Social link not found"
            });
        }
        
        res.status(200).json({
            success: true,
            data: social
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update a social link
exports.updateSocial = async (req, res) => {
    try {
        const { icon, url, altText } = req.body;
        
        const updatedSocial = await Social.findByIdAndUpdate(
            req.params.id,
            {
                icon,
                url,
                altText
            },
            { new: true, runValidators: true }
        );
        
        if (!updatedSocial) {
            return res.status(404).json({
                success: false,
                error: "Social link not found"
            });
        }
        
        res.status(200).json({
            success: true,
            data: updatedSocial,
            message: "Social link updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Delete a social link
exports.deleteSocial = async (req, res) => {
    try {
        const deletedSocial = await Social.findByIdAndDelete(req.params.id);
        
        if (!deletedSocial) {
            return res.status(404).json({
                success: false,
                error: "Social link not found"
            });
        }
        
        res.status(200).json({
            success: true,
            data: deletedSocial,
            message: "Social link deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};