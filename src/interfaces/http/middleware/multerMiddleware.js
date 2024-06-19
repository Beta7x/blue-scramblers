const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (_req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(file.originalname.toLowerCase());

    if (mimetype && extname) return cb(null, true);
    cb(new Error("Only images are allowed"));
  },
});
