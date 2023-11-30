const sharp = require('sharp');
const config = require('../config/config');
const fs = require('fs');
const path = require('path');

const deleteFiles = (toDelete) => {
  const deletePath = config.UPLOAD_DIR;

  toDelete?.forEach((f) => {
    try {
      fs.unlinkSync(`${deletePath}/${f}`);
    } catch (err) {
      console.error('Greška pri brisanju fajla:', err.message);
    }
  });
};

const compressImages = async (req, res, next) => {
  if (!req.files) {
    return next();
  }

  try {
    for (const f of req.files) {
      const ext = path.extname(f.originalname);

      if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
        await sharp(f.buffer)
          .toFormat('jpeg')  // Postavite format na JPEG da bi se oba formata obrađivala na isti način
          .jpeg({ quality: 50 })
          .toFile(`${config.UPLOAD_DIR}/C${f.filename}`);
      }
    }

    const deletedImages = req.files?.map((f) => f.filename) ?? [];
    deleteFiles(deletedImages);
    req.files.forEach((f) => (f.filename = `C${f.filename}`));
  } catch (error) {
    console.error('Greška pri komprimiranju slika:', error.message);
  }

  next();
};

module.exports = compressImages;
