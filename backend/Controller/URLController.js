

const URLModel = require("../Module/URLModuel");

const URLSave = async (req, res) => {
    try {
        const { URL, altText } = req.body;

        if (!URL) {
            return res.status(400).json({ error: "URL is required" });
        }

        const url = await URLModel.create({ URL, altText });
        res.status(201).json(url);
    } catch (error) {
        console.error('URLSave error:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

const URLDisplay = async (req, res) => {
    try {
        const urls = await URLModel.find();
        res.status(200).json({
            success: true,
            data: urls
        });
    } catch (error) {
        console.error("Fetching URLs error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch URLs",
            error: error.message
        });
    }
};

const URLDisplayById = async (req, res) => {
    try {
        const { id } = req.params;
        const url = await URLModel.findById(id);

        if (!url) {
            return res.status(404).json({ message: "URL not found" });
        }

        res.status(200).json(url);
    } catch (error) {
        console.error("Error fetching URL:", error);
        res.status(500).json({ message: error.message });
    }
};

const URLUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { URL, altText } = req.body;

        if (!URL) {
            return res.status(400).json({ message: "URL is required" });
        }

        const updatedURL = await URLModel.findByIdAndUpdate(
            id,
            { URL, altText },
            { new: true }
        );

        if (!updatedURL) {
            return res.status(404).json({ message: "URL not found" });
        }

        res.status(200).json({
            message: "URL updated successfully",
            data: updatedURL
        });
    } catch (error) {
        console.error("Error updating URL:", error);
        res.status(500).json({ message: error.message });
    }
};

const URLDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedURL = await URLModel.findByIdAndDelete(id);

        if (!deletedURL) {
            return res.status(404).json({
                success: false,
                error: "URL not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "URL deleted successfully",
        });
    } catch (error) {
        console.error("URLDelete error:", error);
        res.status(500).json({
            success: false,
            error: error.message || "Internal Server Error",
        });
    }
};

module.exports = {
    URLSave,
    URLDisplay,
    URLDisplayById,
    URLUpdate,
    URLDelete
};