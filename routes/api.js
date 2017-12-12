var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/eth', function(req, res) {

  axios.get('https://www.cryptomkt.com/api/ethclp/1.json')
  .then(function (response) {
    const bid = parseInt(response.data['data']['prices_bid']['values'][0]['close_price']);
    const ask = parseInt(response.data['data']['prices_ask']['values'][0]['close_price']);
    res.json({
      success: true,
      data: {
        bid,
        ask
      }
    });
  })
  .catch(function (error) {
    console.log(error);
    return res.status(500).send({success: false, msg: 'Third Party API error.'});
  });

});

module.exports = router;
