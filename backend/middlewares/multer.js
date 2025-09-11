// const multer = require('multer');

// // single storage engine: memory for both images & PDFs
// const storage = multer.memoryStorage();

// const fileFilter = (req, file, cb) => {
//   if (file.fieldname === 'PDFbrochure') {
//     cb(file.mimetype === 'application/pdf' ? null : new Error('Invalid PDF'), true);
//   } else if (file.fieldname === 'images') {
//     cb(['image/jpeg','image/png'].includes(file.mimetype)
//       ? null
//       : new Error('Invalid image'),
//       true
//     );
//   } else {
//     cb(new Error('Unexpected field'), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 10 * 1024 * 1024 }
// });

// module.exports = upload.fields([
//   { name: 'images', maxCount: 5 },
//   { name: 'PDFbrochure', maxCount: 1 }
// ]);


const multer = require('multer');

// Single storage engine: memory for both images & PDFs
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'PDFbrochure') {
    if (file.mimetype === 'application/pdf') {
      cb(null, true); // Accept valid PDF
    } else {
      cb(new Error('Invalid PDF: Only PDF files are allowed'), false); // Reject invalid PDF
    }
  } else if (file.fieldname === 'images') {
    if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
      cb(null, true); // Accept valid image
    } else {
      cb(new Error('Invalid image: Only JPEG and PNG files are allowed'), false); // Reject invalid image
    }
  } else {
    cb(new Error(`Unexpected field: ${file.fieldname}`), false); // Reject unexpected fields
  }
};

const upload = multer({
  storage,
  fileFilter,
  // limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
}).fields([
  { name: 'images', maxCount: 5 },
  { name: 'PDFbrochure', maxCount: 1 }
]);

module.exports = upload;