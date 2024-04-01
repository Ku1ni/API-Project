const express = require('express');
const { handleValidationErrors } = require('../../utils/validation');
const { check, query, validationResult } = require('express-validator');
const {requireAuth} = require('../../utils/auth')
const { SpotImages } = require('../../db/models');
const router = express.Router();





module.exports = router;
