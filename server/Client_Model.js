const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clientSchema = new Schema(
  {
    Client_Id: { type: Number, required: true, unique: true },
    Name: String,
    Surname: String,
    TransactionCompleted: Boolean,
    WalletAddress: String
  },
  { autoIndex: false }
);

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;