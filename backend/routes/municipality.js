const { Router } = require("express");
const verifyToken = require("../midleweare/verifyToken");
const upload = require("../midleweare/upload");
const compressImages = require("../midleweare/compressUserImage");
const router = new Router();

router.get(
  "/all",
  require("../controller/municipalityController/getAllMunicipality")
);
router.get(
  "/single-manicipality/:id",
  require("../controller/municipalityController/getSingleManicipality")
);
router.post(
  "/single-manicipality-edit/:id",
  require("../controller/municipalityController/editManicipality")
);

router.post(
  "/add",
  upload.single("file"),
  compressImages,
  require("../controller/municipalityController/addMunicipality")
);

module.exports = router;
