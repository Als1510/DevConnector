const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

const randString = () => {
  const len = 8;
  let randStr = '';
  for(let i=0; i < len; i++) {
    const ch = Math.floor((Math.random() * 10) + 1)
    randStr += ch
  }
  return randStr;
}


// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  const uniqueString = randString()
  const active = false;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'x',
      d: 'retro'
    }, true)

    user = new User({
      name,
      email,
      avatar,
      password,
      uniqueString,
      active
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user:config.get('email'),
        pass:config.get('emailPassword')
      }
    });

    let info = await transporter.sendMail({
      from:`"DevConnector" ${config.get('email')}`,
      to:`${email}`,
      subject:"Email Confirmation",
      html:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title></title> <style type="text/css"> table, td { color: #000000; } a { color: #013a63; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_2 .v-src-width { width: 335px !important; } #u_content_image_2 .v-src-max-width { max-width: 26% !important; } } @media only screen and (min-width: 630px) { .u-row { width: 610px !important; } .u-row .u-col { vertical-align: top; } .u-row .u-col-100 { width: 610px !important; } } @media (max-width: 630px) { .u-row-container { max-width: 100% !important; padding-left: 0px !important; padding-right: 0px !important; } .u-row .u-col { min-width: 320px !important; max-width: 100% !important; display: block !important; } .u-row { width: calc(100% - 40px) !important; } .u-col { width: 100% !important; } .u-col>div { margin: 0 auto; } } body { margin: 0; padding: 0; } table, tr, td { vertical-align: top; border-collapse: collapse; } p { margin: 0; } .ie-container table, .mso-container table { table-layout: fixed; } * { line-height: inherit; } a[x-apple-data-detectors='true'] { color: inherit !important; text-decoration: none !important; } </style> <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"></head><body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000"> <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0"> <tbody> <tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:16px 10px 20px;font-family:'Cabin',sans-serif;" align="left"> <div style="line-height: 140%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 38px; line-height: 53.2px; font-family: 'andale mono', times;"><strong>DevConnector</strong></span> </p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="background-color: #013a63;width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table id="u_content_image_2" style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:19px 10px 14px;font-family:'Cabin',sans-serif;" align="left"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td style="padding-right: 0px;padding-left: 0px;" align="center"> <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 21%;max-width: 123.9px;" width="123.9" class="v-src-width v-src-max-width" /> </td> </tr> </table> </td> </tr> </tbody> </table> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:12px 10px 10px;font-family:'Cabin',sans-serif;" align="left"> <div style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 140%;"><strong>Thanks For Signing Up!</strong> </p> </div> </td> </tr> </tbody> </table> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:12px 10px 26px;font-family:'Cabin',sans-serif;" align="left"> <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 26px; line-height: 36.4px;"><strong><span style="line-height: 36.4px; font-family: 'andale mono', times; font-size: 26px;">Activate Your Account</span></strong></span></p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:34px 55px 31px;font-family:'Cabin',sans-serif;" align="left"> <div style="line-height: 170%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 170%;"><strong><span style="font-size: 22px; line-height: 37.4px; font-family: 'andale mono', times;">Hi,</span></strong> </p> <p style="font-size: 14px; line-height: 170%;">&nbsp;</p> <p style="font-size: 14px; line-height: 170%;"><span style="font-size: 16px; line-height: 27.2px;">You're almost ready to get started. Please click on the button below to activate your account and get connected with our developers from all over the world.</span></p> </div> </td> </tr> </tbody> </table> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:13px 10px 10px;font-family:'Cabin',sans-serif;" align="left"> <div align="center"> <a href="https://devconnectorbackend.herokuapp.com/api/validation/verify/${uniqueString}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #013a63; border-radius: 19px;-webkit-border-radius: 19px; -moz-border-radius: 19px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;"> <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span style="font-size: 20px; line-height: 24px; font-family: 'andale mono', times;"><strong><span style="line-height: 24px; font-size: 20px;">Activate</span></strong></span></span> </a> </div> </td> </tr> </tbody> </table> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:32px 55px 28px;font-family:'Cabin',sans-serif;" align="left"> <div style="line-height: 160%; text-align: center; word-wrap: break-word;"> <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 16px; line-height: 25.6px;">Thanks,</span></p> <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 16px; line-height: 25.6px;">The Company Team</span></p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="background-color: #013a63;width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left"> <div style="color: #fdfdfd; line-height: 180%; text-align: center; word-wrap: break-word;"> <p dir="ltr" style="font-size: 14px; line-height: 180%;"><span style="font-size: 14px; line-height: 25.2px;">Copyrights &copy; DevConnector All Rights Reserved</span></p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </td> </tr> </tbody> </table> </body></html>`
    });

    res.json({msg : "Verification Link has been sent to you email account. Please activate your account", name })

  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error!')
  }
})

module.exports = router;