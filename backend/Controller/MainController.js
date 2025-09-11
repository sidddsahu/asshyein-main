const Course = require("../Module/MainModule"); // Ensure TestModule is the actual model for courses
const imagekit = require("../Utils/imageKit");

// Save Course with all category levels
const CourseSave = async (req, res) => {
  console.log(req.body, 'request body')
  try {
    const {
      Price,
      Durations,
      testmodule,
      CourseDescription,
      LastDate,
      altText,
      category,
      subcategory,
      subsubcategory,
      size,
    } = req.body;

    if (!Price || !Durations || !testmodule || !CourseDescription || !category) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let parsedSize;
    try {
      parsedSize = typeof size === "string" ? JSON.parse(size) : size;
    } catch {
      return res.status(400).json({ error: "Invalid size format" });
    }

    const uploadedImages = [];
    if (req.files?.images) {
      const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
      for (const file of files) {
        const uploadResponse = await imagekit.upload({
          file: file.data,
          fileName: file.name,
        });
        uploadedImages.push(uploadResponse.url);
      }
    }

    const parsedLastDate = new Date(LastDate);
    if (isNaN(parsedLastDate)) {
      return res.status(400).json({ error: "Invalid LastDate format" });
    }

    const newCourse = await Course.create({
      Price,
      Durations,
      testmodule,
      CourseDescription,
      LastDate: parsedLastDate,
      category,
      altText,
      subCategory: subcategory,
      subsubCategory: subsubcategory,
      size: parsedSize,
      images: uploadedImages,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });

  } catch (error) {
    console.error("CourseSave error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    });
  }
};

// Get all courses
const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("category")
      .populate("subCategory")
      .populate("subsubCategory");

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("category")
      .populate("subCategory")
      .populate("subsubCategory");

    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (err) {
    console.error("Get by ID error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

// Delete course
const PreDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Edit course (GET)
// const editDisplay = async (req, res) => {
//   try {
//     const { id } = req.query;

//     if (!id) {
//       return res.status(400).json({
//         success: false,
//         message: "ID is required.",
//       });
//     }

//     const course = await Course.findById(id)
//       .populate("category")
//       .populate("subCategory")
//       .populate("subsubCategory");

//     if (!course) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: course,
//     });
//   } catch (error) {
//     console.error("Edit display error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
const editDisplay = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required.",
      });
    }

    const course = await Course.findById(id)
      .populate("category")
      .populate("subCategory")
      .populate("subsubCategory");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error("Edit display error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Edit course (POST)
// const editDataSave = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       Price,
//       testmodule,
//       Durations,
//       category,
//       altText,
//       subCategory,
//       subsubCategory,
//       CourseDescription,
//       LastDate,
//     } = req.body;

//     if (!id) {
//       return res.status(400).json({
//         success: false,
//         message: "Course ID is required.",
//       });
//     }

//     const updateData = {
//       Price,
//       testmodule,
//       Durations,
//       altText,
//       CourseDescription,
//       ...(LastDate && { LastDate: new Date(LastDate) }),
//       ...(category && { category }),
//       ...(subCategory && { subCategory }),
//       ...(subsubCategory && { subsubCategory }),
//     };

//     const updatedCourse = await Course.findByIdAndUpdate(id, updateData, {
//       new: true,
//       runValidators: true,
//     })
//       .populate("category")
//       .populate("subCategory")
//       .populate("subsubCategory");

//     if (!updatedCourse) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Course updated successfully",
//       data: updatedCourse,
//     });
//   } catch (error) {
//     console.error("Edit save error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal server error",
//       ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
//     });
//   }
// };

const editDataSave = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      Price,
      testmodule,
      Durations,
      category,
      altText,
      subCategory,  // Changed to match frontend
      subsubCategory,  // Changed to match frontend
      CourseDescription,
      LastDate,
    } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required.",
      });
    }

    const updateData = {
      Price,
      testmodule,
      Durations,
      altText,
      CourseDescription,
      ...(LastDate && { LastDate: new Date(LastDate) }),
      ...(category && { category }),
      ...(subCategory && { subCategory }),  // Ensure this matches schema
      ...(subsubCategory && { subsubCategory }),  // Ensure this matches schema
    };

    // Handle image upload if new image is provided
    if (req.files?.images) {
      const file = req.files.images;
      const uploadResponse = await imagekit.upload({
        file: file.data,
        fileName: file.name,
      });
      updateData.images = [uploadResponse.url];
    }

    const updatedCourse = await Course.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    })
      .populate("category")
      .populate("subCategory")
      .populate("subsubCategory");

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (error) {
    console.error("Edit save error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    });
  }
};

const getCourseWithTestModules = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("category")
      .populate("subCategory")
      .populate("subsubCategory");

    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (err) {
    console.error("Get by ID error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};


// Edit course (POST)
// const editDataSave = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       Price,
//       testmodule,
//       Durations,
//       category,
//       altText,
//       subCategory,
//       subsubCategory,
//       CourseDescription,
//       LastDate,
//     } = req.body;

//     if (!id) {
//       return res.status(400).json({
//         success: false,
//         message: "Course ID is required.",
//       });
//     }

//     const updateData = {
//       Price,
//       testmodule,
//       Durations,
//       altText,
//       CourseDescription,
//       ...(LastDate && { LastDate: new Date(LastDate) }),
//       ...(category && { category }),
//       ...(subCategory && { subCategory }),
//       ...(subsubCategory && { subsubCategory }),
//     };

//     const updatedCourse = await Course.findByIdAndUpdate(id, updateData, {
//       new: true,
//       runValidators: true,
//     })
//       .populate("category")
//       .populate("subCategory")
//       .populate("subsubCategory");

//     if (!updatedCourse) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Course updated successfully",
//       data: updatedCourse,
//     });
//   } catch (error) {
//     console.error("Edit save error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal server error",
//       ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
//     });
//   }
// };

// Get all courses with test modules
// const getCourseWithTestModules = async (req, res) => {
//   try {
//     const testSeries = await Course.find()
//       .populate("category")
//       .populate("subCategory")
//       .populate("subsubCategory");

//     if (!testSeries || testSeries.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "No test series found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       count: testSeries.length,
//       data: testSeries,
//     });
//   } catch (error) {
//     console.error("Test series error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

module.exports = {
  CourseSave,
  getAllCourse,
  PreDelete,
  getCourseById,
  getCourseWithTestModules,
  editDisplay,
  editDataSave,
};
