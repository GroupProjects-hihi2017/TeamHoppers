var express = require('express')
var router = express.Router()

router.post('/contact', function (req, res) {
  var apiKey = process.env.MAILGUN_API_KEY
  var domain = process.env.MAILGUN_DOMAIN
  var mailgun = req.app.get('mailgunjs')({apiKey: apiKey, domain: domain})
  var data = {
    from: 'recycle-hack <postmaster@sandbox0a4e694b934b4216950e110a444c5b62.mailgun.org>',
    to: 'team.hoppers.nz@gmail.com',
    subject: req.body.name + ' has submitted comments on RECYCLEhack',
    text: 'Name: ' + req.body.name + ' Email: ' + req.body.email + ' Comments: ' + req.body.comments
  }
  mailgun.messages().send(data, function (error, body) {
    if (!error) {
      res.status(200).json('Thank you for your comments.')
    } else {
      res.status(500).json("We're sorry, something appears to have gone wrong. Please try again.")
    }
  })
})

module.exports = router
