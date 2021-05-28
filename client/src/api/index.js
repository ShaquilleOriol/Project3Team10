const express = require("express");
const registerApi = require("../api/register");
const loginApi = require("../api/login");
const loginWithGoogleApi = require("../api/loginWithGoogle");
const userApi = require("../api/user");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(loginWithGoogleApi);
router.use(userApi);

module.exports = router;