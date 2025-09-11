const EnquiryModel = require("../Module/EnrollModule");
const ProductModel = require("../Module/Coursemodule");
const nodemailer = require("nodemailer");

// POST - Create enquiry
const EnquiryProduct = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, city, message, productName } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required fields",
    });
  }

  try {
    const enquiry = await EnquiryModel.create({
      name,
      email,
      phone,
      city,
      message,
      productId: id,
    });

    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adityajainghetal@gmail.com",
        pass: "wjiv vwra gbpo mkgr", // ⚠️ Never hardcode passwords in real apps
      },
    });

    const mailOptions = {
      from: email,
      to: "adityajainghetal@gmail.com",
      city: "Enquiry Received",
      text: `Thank you for your enquiry.\n\nMessage: ${message}\nProduct Name: ${productName}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Email sending error:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully!",
      data: enquiry,
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your enquiry",
      error: error.message,
    });
  }
};

// GET - Get product by ID
const EnquiryGetProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

// GET - All enquiries
const EnquiryDisplayAll = async (req, res) => {
  try {
    const enquiries = await EnquiryModel.find().populate("productId");
    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
      error: error.message,
    });
  }
};

// GET - Single enquiry by ID
const EnquiryDisplayById = async (req, res) => {
  const { id } = req.params;
  try {
    const enquiry = await EnquiryModel.findById(id).populate("productId");
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }
    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Error fetching enquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry",
      error: error.message,
    });
  }
};

// DELETE - Delete enquiry by ID
const EnquiryDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEnquiry = await EnquiryModel.findByIdAndDelete(id);
    if (!deletedEnquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully",
      data: deletedEnquiry,
    });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete enquiry",
      error: error.message,
    });
  }
};

const editDisplay = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const enquiry = await EnquiryModel.findById(id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found." });
    }

    res.status(200).json(enquiry);
  } catch (error) {
    console.error("Error fetching enquiry for edit:", error);
    res.status(500).json({ message: error.message });
  }
};

const editDataSave = async (req, res) => {
  try {
    const { id, name, email, phone, city, message } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const updated = await EnquiryModel.findByIdAndUpdate(
      id,
      { name, email, phone, city, message },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Enquiry not found." });
    }

    res
      .status(200)
      .json({ message: "Enquiry updated successfully", data: updated });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET - Enquiries for the current day only
const EnquiryDisplayToday = async (req, res) => {
  try {
    // Get start and end of today in ISO format
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const enquiries = await EnquiryModel.find({
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    }).populate("productId");

    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    console.error("Error fetching today's enquiries:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch today's enquiries",
      error: error.message,
    });
  }
};

module.exports = {
  EnquiryProduct,
  EnquiryDisplayAll,
  EnquiryDisplayById,
  EnquiryGetProduct,
  EnquiryDelete,
  editDisplay,
  EnquiryDisplayToday,
  editDataSave,
};
