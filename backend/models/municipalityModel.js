const { Schema, model } = require("mongoose");

const MunicipalitySchema = new Schema({
    district: {type: String, default: ""},
    municipality: {type: String, default: ""},
    city: {type: String, default: ""},
    fullNameOfThePresident: {type: String, default: ""},
    pictureOfThePresident: {type: String, default: ""},
    dateOfBirth: {type: String, default: ""},
    email: {type: String, default: ""},
    phone: {type: String, default: ""},
    moreAboutThePresident: {type: String, default: ""},
    website: {type: String, default: ""},
    document: {type: String, default: ""},
});

const MunicipalityModel = model('municipalities', MunicipalitySchema);
module.exports = MunicipalityModel;