const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: String,


});
module.expots = mongoose.model('food', foodSchema);


* name: String
*  "serving_qty": 100:
* "nf_calories": Number,
* "nf_total_fat": Number,
* "nf_protein": Number,
* "nf_total_carbohydrate": Number,
