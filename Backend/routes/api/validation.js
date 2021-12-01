const express = require('express');
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')
const config = require('config');
const { check, validationResult } = require('express-validator')

const User = require('../../models/User');
const OtpToken = require('../../models/OtpToken');

// @route   GET api/validation/verify/:uniqueString
// @desc    Verify User
// @access  Public
router.get('/verify/:uniqueString', async (req, res) => {
  const uniqueString  = req.params.uniqueString;
  const user = await User.findOne({ uniqueString : uniqueString})

  if(user) {
    await User.updateOne({_id: user._id}, {$set: {active: true}})
    res.sendFile(path.join(__dirname + '../../../config/activationResponseSuccess.html'))
  } else {
    res.sendFile(path.join(__dirname + '../../../config/activationResponseFailure.html'))
  }
})

// @route   POST api/validation
// @desc    Verify User
// @access  Public
router.post('/', [
  check('email', 'Please enter a valid email').isEmail()
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email} = req.body;

  try {
    let user = await User.findOne({ email });
    
    if(!user) {
      return res.status(400).json({ errors: [{ msg: 'Email id does not exists. Please create a new account.' }] })
    }
    
    let previousRecord = await OtpToken.findOne({ email });
    if(previousRecord) {
      let currTime = new Date().getTime();
      let diff = previousRecord.expiresIn - currTime;
      if(diff > 0) {
        return res.json({ msg: "Otp has been sent to your registered e-mail id", name: user.name});
      } else {
        await OtpToken.deleteOne({ email });
      }
    }
    
    let otpCode = Math.floor((Math.random() * 1000000) + 1);

    let otpData = new OtpToken({
      email,
      otpCode,
      expiresIn: new Date().getTime() + 300*1000
    });

    await otpData.save();

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
      subject:"OTP(One Time Password)",
      html:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title></title> <style type="text/css"> table, td { color: #000000; } @media (max-width: 480px) { #u_content_image_2 .v-src-width { width: 335px !important; } #u_content_image_2 .v-src-max-width { max-width: 26% !important; } } @media only screen and (min-width: 630px) { .u-row { width: 610px !important; } .u-row .u-col { vertical-align: top; } .u-row .u-col-100 { width: 610px !important; } } @media (max-width: 630px) { .u-row-container { max-width: 100% !important; padding-left: 0px !important; padding-right: 0px !important; } .u-row .u-col { min-width: 320px !important; max-width: 100% !important; display: block !important; } .u-row { width: calc(100% - 40px) !important; } .u-col { width: 100% !important; } .u-col>div { margin: 0 auto; } } body { margin: 0; padding: 0; } table, tr, td { vertical-align: top; border-collapse: collapse; } p { margin: 0; } .ie-container table, .mso-container table { table-layout: fixed; } * { line-height: inherit; } a[x-apple-data-detectors='true'] { color: inherit !important; text-decoration: none !important; } </style> <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"></head><body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000"> <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0"> <tbody> <tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:24px 10px 35px;font-family:'Cabin',sans-serif;" align="left"> <div style="line-height: 140%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 38px; line-height: 53.2px; font-family: 'andale mono', times;"><strong>DevConnector</strong></span> </p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="background-color: #013a63;width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table id="u_content_image_2" style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:19px 10px 14px;font-family:'Cabin',sans-serif;" align="left"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td style="padding-right: 0px;padding-left: 0px;" align="center"> <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 21%;max-width: 123.9px;" width="123.9" class="v-src-width v-src-max-width" /> </td> </tr> </table> </td> </tr> </tbody> </table> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:28px 10px 24px;font-family:'Cabin',sans-serif;" align="left"> <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 22px; line-height: 30.8px;">OTP (One Time Password)</span></p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:69px 55px 55px;font-family:'Cabin',sans-serif;" align="left"> <div style="line-height: 170%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 170%;"><span style="font-size: 20px; line-height: 34px; font-family: 'andale mono', times;">Your OTP(One Time Password) is<span style="line-height: 34px; font-size: 20px;"><span style="line-height: 34px; font-size: 20px;"><strong> </strong></span></span><span style="text-decoration: underline; line-height: 34px; color: #272323; font-size: 20px;"><span style="line-height: 34px; font-size: 20px;"><strong>${otpCode}</strong></span></span>. Valid for 5 minutes.</span></p> </div> </td> </tr> </tbody> </table> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:32px 55px 28px;font-family:'Cabin',sans-serif;" align="left"> <div style="line-height: 160%; text-align: center; word-wrap: break-word;"> <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 16px; line-height: 25.6px;">Thanks,</span></p> <p style="line-height: 160%; font-size: 14px;"><span style="font-size: 16px; line-height: 25.6px;">The Company Team</span></p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 610px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 610px;display: table-cell;vertical-align: top;"> <div style="background-color: #013a63;width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"> <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left"> <div style="color: #fdfdfd; line-height: 180%; text-align: center; word-wrap: break-word;"> <p dir="ltr" style="font-size: 14px; line-height: 180%;"><span style="font-size: 14px; line-height: 25.2px;">Copyrights &copy; DevConnector All Rights Reserved</span></p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </td> </tr> </tbody> </table></body></html>` 
    });

    res.json({ msg: "Otp has been sent to your registered e-mail id", name: user.name});
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/validation/resetpassword
// @desc    Change password
// @access  Public
router.post('/resetpassword', [
  check('otpCode', 'Please enter otp').not().isEmpty(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, otpCode, password} = req.body;
  
  try {
    let otpData = await OtpToken.findOne({ email, otpCode });

    if(!otpData) {
      return res.status(400).json({ errors: [{ msg: 'Otp is Invalid' }] })
    }

    let currTime = new Date().getTime();
    let diff = otpData.expiresIn - currTime;
    if(diff < 0) {
      return res.status(400).json({ errors: [{ msg: 'Otp is Invalid' }] })
    }

    let user = await User.findOne({ email });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    await OtpToken.deleteOne({ email });

    res.json({ msg: 'Password changed successfully '});
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;