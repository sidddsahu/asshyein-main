const EnquiryModel = require('../Module/CallbackPopUp');

// Save name and phone to database (no email sending)
const CallbackPopUp = async (req, res) => {
    const { name, phone } = req.body;

    try {
        const enquiry = await EnquiryModel.create({ name, phone });

        res.status(201).json({
            success: true,
            message: "User enquiry successfully submitted",
            data: enquiry
        });
        
    } catch (error) {
        console.error("Enquiry error:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred during enquiry submission",
            error: error.message
        });
    }
};

// Fetch all enquiries
const ContactDisplay = async (req, res) => {
    try {
        const myData = await EnquiryModel.find();
        res.status(200).json({
            success: true,
            data: myData
        });
    } catch (error) {
        console.error("Fetching enquiries error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch enquiries",
            error: error.message
        });
    }
};

// Delete a single enquiry by ID
const RecordDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEnquiry = await EnquiryModel.findByIdAndDelete(id);

        if (!deletedEnquiry) {
            return res.status(404).json({
                success: false,
                message: "Enquiry not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Enquiry deleted successfully",
            data: deletedEnquiry
        });
    } catch (error) {
        console.error("Error deleting enquiry:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete enquiry",
            error: error.message
        });
    }
};

const editDisplay = async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "ID is required." });
        }

        const data = await EnquiryModel.findById(id);

        if (!data) {
            return res.status(404).json({ message: "Query not found." });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching query:", error);
        res.status(500).json({ message: error.message });
    }
};

const editDataSave = async (req, res) => {
  try {
    const { id } = req.params; // Now getting ID from URL params
    const { name,phone } = req.body;

    const updatedQuery = await EnquiryModel.findByIdAndUpdate(
      id,
      {name,phone  },
      { new: true }
    );

    if (!updatedQuery) {
      return res.status(404).json({ message: "Query not found." });
    }

    res.status(200).json({ 
      message: "Query updated successfully", 
      data: updatedQuery 
    });
  } catch (error) {
    console.error("Error updating query:", error);
    res.status(500).json({ message: error.message });
  }
}



module.exports = {
    CallbackPopUp,
    ContactDisplay,
    RecordDelete,
    editDataSave,
    editDisplay
    
};
