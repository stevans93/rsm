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
    numberOfOfficials: {type: String, default: ""},
    website: {type: String, default: ""},
    numberOfApplications: {type: String, default: ""},
});

const MunicipalityModel = model('municipalities', MunicipalitySchema);
module.exports = MunicipalityModel;