const MunicipalityModel = require('../../models/municipalityModel');

const addMunicipality = (req, res) => {
    const municipality = req.body;
    const file = req.file;

    console.log("Body:", municipality);
    console.log("files", file)


    const addNewMunicipality = new MunicipalityModel(municipality);

    addNewMunicipality.save()
        .then((addNewMunicipality) => {
            console.log(addNewMunicipality);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = addMunicipality;