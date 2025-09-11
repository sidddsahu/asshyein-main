const SubSubcategory = require("../Module/subsubCategoryModule");
const FirstSubcategory = require("../Module/subcategory.model");
const imagekit = require("../Utils/imageKit");

// Get all Subcategories with images
const getAllSubcategorys = async (req, res) => {
  try {
    const Subcategories = await SubSubcategory.find();
    res.status(200).json(Subcategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Subcategory by ID with images
const getSubcategoryById = async (req, res) => {
  try {
    // console.log(req.params.id);
    const subcategory = await SubSubcategory.findById(req.params.id);
    // console.log("subcategory fetched ", subcategory);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByParentSubcategory = async (req, res) => {
  try {
    const { subCategoryId } = req.params;

    if (!mongoose.isValidObjectId(subCategoryId)) {
      return res.status(400).json({ message: "Invalid subCategoryId" });
    }

    // verify parent exists (optional but good)
    const parent = await Subcategory.findById(subCategoryId);
    if (!parent) {
      return res.status(404).json({ message: "Parent subcategory not found" });
    }

    const list = await SubSubcategory.find({
      subCategory: subCategoryId,
    }).populate("subCategory", "name _id");

    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSubcategory = async (req, res) => {
  try {
    const { name } = req.body;

    // ✅ Validate required field
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    // ✅ Check for duplicate name (case-insensitive)
    const existing = await SubSubcategory.findOne({
      name: { $regex: `^${name.trim()}$`, $options: "i" },
    });

    if (existing) {
      return res
        .status(409)
        .json({ message: "Sub-subcategory with this name already exists" });
    }

    // ✅ Upload images (if any)
    const uploadedImages = [];
    const filesRaw = req.files?.images;

    if (filesRaw) {
      const files = Array.isArray(filesRaw) ? filesRaw : [filesRaw];

      for (let file of files) {
        const buffer = file.data;
        const uploadResponse = await imagekit.upload({
          file: buffer,
          fileName: file.name,
        });
        uploadedImages.push(uploadResponse.url);
      }
    }

    // ✅ Create new SubSubcategory with only name and images
    const newSubcategory = new SubSubcategory({
      name: name.trim(),
      images: uploadedImages,
    });

    await newSubcategory.save();
    res.status(201).json(newSubcategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSubcategory = async (req, res) => {
  try {
    const { name, size } = req.body;
    const subcategoryId = req.params.id;

    // Find existing subcategory
    const existingSubcategory = await SubSubcategory.findById(subcategoryId);
    if (!existingSubcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    // Parse size if it exists
    let parsedSize = existingSubcategory.size || [];
    if (size) {
      try {
        parsedSize = typeof size === "string" ? JSON.parse(size) : size;
      } catch (err) {
        return res.status(400).json({ error: "Invalid size format" });
      }
    }

    // Upload new images (and replace old ones if new are provided)
    let updatedImages = existingSubcategory.images || [];
    const filesRaw = req.files?.images;

    if (filesRaw) {
      const files = Array.isArray(filesRaw) ? filesRaw : [filesRaw];

      updatedImages = []; // ✅ Clear old images
      for (let file of files) {
        const buffer = file.data;
        const uploadResponse = await imagekit.upload({
          file: buffer,
          fileName: file.name,
        });
        updatedImages.push(uploadResponse.url);
      }
    }

    // Update subcategory
    const updatedSubcategory = await SubSubcategory.findByIdAndUpdate(
      subcategoryId,
      {
        name: name || existingSubcategory.name,
        size: parsedSize,
        images: updatedImages, // ✅ Either old images or replaced ones
      },
      { new: true }
    );

    res.status(200).json(updatedSubcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Subcategory and its images
const deleteSubcategory = async (req, res) => {
  try {
    const deletedSubcategory = await SubSubcategory.findByIdAndDelete(
      req.params.id
    );
    if (!deletedSubcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    // Optionally: Delete images from ImageKit here if needed
    // This would require storing image IDs along with URLs

    const Subcategories = await SubSubcategory.find();
    res.status(200).json({
      message: "Subcategory deleted successfully",
      data: Subcategories,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSubcategorys,
  getSubcategoryById,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
  getByParentSubcategory,
};
