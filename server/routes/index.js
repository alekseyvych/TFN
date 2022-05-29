const express = require('express');
const router = express.Router();

const heroesService = require('../hero-service');
const clientsService = require('../client_Service');

//Heroes (EJEMPLO)
router.get('/heroes', (req, res) => {
  heroesService.get(req, res);
});

router.put('/hero', (req, res) => {
  heroesService.create(req, res);
});

router.post('/hero', (req, res) => {
  heroesService.update(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroesService.destroy(req, res);
});

//Clientes
router.get('/clients', (req, res) => {
  clientsService.get(req, res);
});

router.put('/client', (req, res) => {
  clientsService.create(req, res);
});

router.post('/client', (req, res) => {
  clientsService.update(req, res);
});

router.delete('/client/:Client_Id', (req, res) => {
  clientsService.destroy(req, res);
});
module.exports = router;
