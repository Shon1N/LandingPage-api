import mongoose from 'dataConnector'

const dataModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

//Replace Genre(as well as dataModel) with the name of the file
const DataModel = mongoose.model('table', genreSchema);

function validate(dataModel) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(dataModel, schema);
}


module.exports = {
  DataModel,
  validate,
  dataModelSchema
};