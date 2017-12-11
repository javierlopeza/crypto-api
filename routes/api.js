var express = require('express');
var router = express.Router();

router.get('/eth', function(req, res) {
  if ('eth') {
    res.json({"success": true});
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});
module.exports = router;
