const Banner = require("../Module/BannerModule");
const imagekit = require("../Utils/imageKit");

const BannerSave = async (req, res) => {
  try {
    const { URL, altText } = req.body; // Add altText here

    // Handle uploaded file
    const file = req.files?.images;

    if (!file || !URL) {
      return res.status(400).json({ message: "Image and URL are required." });
    }

    // Upload to ImageKit
    const uploadResponse = await imagekit.upload({
      file: file.data,
      fileName: file.name,
    });

    // Save to DB
    const newBanner = new Banner({
      URL,
      images: [uploadResponse.url],
      altText // Include altText here
    });

    await newBanner.save();

    console.log("Banner created:", newBanner);
    res.status(201).json(newBanner);
  } catch (error) {
    console.error("Error creating banner:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllBanner = async (req, res) => {
    try {
        const products = await Banner .find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: error.message });
    }
};

const BannerDelete = async(req, res)=>{

     const {id} = req.params;
   await Banner.findByIdAndDelete(id);

    res.status(200).send("Task deleted")
}

// const editDisplay=async(req, res)=>{
//     const {id}=req.query;
//     const Data= await Banner.findById(id);
   
//     res.send(Data)
// }

const editDisplay = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const data = await Banner.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Banner not found." });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching banner:", error);
    res.status(500).json({ message: error.message });
  }
};


// const editDataSave = async (req, res) => {
//   try {
//     const { id, URL } = req.body;
//     let images = req.body.images;

//     if (!id || !URL) {
//       return res.status(400).json({ message: "ID and URL are required." });
//     }

//     // Handle image re-upload if new file provided
//     if (req.files?.images) {
//       const file = req.files.images;

//       const uploadResponse = await imagekit.upload({
//         file: file.data,
//         fileName: file.name,
//       });

//       images = [uploadResponse.url]; // Replace with new image
//     }

//     const updated = await Banner.findByIdAndUpdate(
//       id,
//       { URL, images },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "Banner not found." });
//     }

//     res.status(200).json({ message: "Banner updated", data: updated });
//   } catch (error) {
//     console.error("Error updating banner:", error);
//     res.status(500).json({ message: error.message });
//   }
// };


const editDataSave = async (req, res) => {
  try {
    const { id, URL, altText } = req.body; // Add altText here
    let images = req.body.images;

    if (!id || !URL) {
      return res.status(400).json({ message: "ID and URL are required." });
    }

    // Handle image re-upload if new file provided
    if (req.files?.images) {
      const file = req.files.images;

      const uploadResponse = await imagekit.upload({
        file: file.data,
        fileName: file.name,
      });

      images = [uploadResponse.url];
    }

    const updated = await Banner.findByIdAndUpdate(
      id,
      { URL, images, altText }, // Include altText here
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Banner not found." });
    }

    res.status(200).json({ message: "Banner updated", data: updated });
  } catch (error) {
    console.error("Error updating banner:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  BannerSave,
  getAllBanner,
  BannerDelete,
  editDisplay,
  editDataSave
};
