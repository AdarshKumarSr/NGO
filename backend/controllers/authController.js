const User = require('../models/User');
const authService = require('../services/authService');

exports.register = authService.register;
exports.login = authService.login;
exports.forgotPassword = authService.forgotPassword;
exports.resetPassword = authService.resetPassword;