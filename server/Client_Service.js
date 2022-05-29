const Client = require('./client_Model');
const ReadPreference = require('mongodb').ReadPreference;

//require('./mongo').connect();

function get(req, res) {
  const docquery = Client.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(clients => {
      res.json(clients);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { Client_Id, Name, Surname,TransactionCompleted, WalletAddress} = req.body;

  const client = new Client({ Client_Id, Name, Surname, TransactionCompleted, WalletAddress });
  client
    .save()
    .then(() => {
      res.json(client);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { Client_Id, Name, Surname, TransactionCompleted, WalletAddress } = req.body;

  Client.findOne({ Client_Id })
    .then(client => {
      client.Name = Name;
      client.Surname = Surname;
      client.TransactionCompleted = TransactionCompleted;
      client.WalletAddress = WalletAddress;
      client.save().then(res.json(client));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { Client_Id } = req.params;

  Client.findOneAndRemove({ Client_Id })
    .then(client => {
      res.json(client);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
