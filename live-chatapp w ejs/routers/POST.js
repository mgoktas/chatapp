const express = require('express')
let routerPOST = express.Router()
const fs = require('fs')
const db = require('../js/config/mysql')
const imgUpload = require("../helpers/image-upload");
const User = require('../models/user')
// const csrf = require('../middlewares/csrf')

const controller = require('../controllers/user')
const chat = require('../controllers/chat')
const auth = require('../controllers/signup')
const authLogin = require('../controllers/login')

routerPOST.post('/admin/del/:id', controller.adminDeletePost)


routerPOST.post('/admin/edit/:userid', imgUpload.upload.single("image"), controller.adminEditPost)

routerPOST.post('/chat', chat.userPost)

routerPOST.post('/login', authLogin.adminLogin)

routerPOST.post('/reset-password', controller.adminResetPasswordPost)

routerPOST.post('/new-password/:token', controller.adminNewPasswordPost)


routerPOST.post("/signup",  imgUpload.upload.single("image"), auth.adminSignUp);

module.exports = routerPOST