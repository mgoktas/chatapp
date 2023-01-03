const nodemailer = require('nodemailer')
const config = require('../js/config/config')


var tranporter = nodemailer.createTransport({

});

module.exports = tranporter;