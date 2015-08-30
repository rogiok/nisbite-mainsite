var express = require('express');
var router = express.Router();
var request = require("request");
//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

router.post('/newsletter', function(req, res, next) {

  var options = {
    method: 'POST',
    url: 'https://us3.api.mailchimp.com/3.0/lists/d12ce6d2e8/members',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': 'apikey cd5b172d25c8cae4f6024173c36975fb-us3'
    },
    body: {
      "email_address": req.body.email,
      "status": "subscribed"
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  res.redirect('/');
});

module.exports = router;
