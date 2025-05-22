const express = require('express');
const router = express.Router();
const { finishGame } = require('../controllers/gameController');

// POST /api/game/finish
router.post('/finish', finishGame);

module.exports = router;