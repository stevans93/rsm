const { Schema, model } = require("mongoose");

const CityOfBelgradeSchema = new Schema({
    district: {type: String, default: ""},
    municipality: {type: String, default: ""},
    fullNameOfThePresident: {type: String, default: ""},
});

const CityOfBelgradeModel = model('municipalitiesOfBalgrade', CityOfBelgradeSchema);
module.exports = CityOfBelgradeModel;