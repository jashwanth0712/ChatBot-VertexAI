const mongoose = require('mongoose');


const InteractionSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  actions: [
    {
      type: String,
      required: true,
    },
  ],
});


const InteractionsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    interaction: [InteractionSchema], 
  },
  { timestamps: true } 
);


const Interaction = mongoose.model('Interaction', InteractionsSchema);

module.exports = Interaction;
