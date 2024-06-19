const cloudinary = require("../../../utils/cloudinaryUtils");

const uploadImage = async (file) => {
  return await cloudinary.uploader.upload(file, { folder: "blue-scrambler" });
};

module.exports = uploadImage;
