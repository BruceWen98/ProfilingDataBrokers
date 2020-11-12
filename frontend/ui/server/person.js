var express = require('express');
var router = express.Router();
const mongo = require("./mongo");

router.get('/person/:name', function(req, res) {
  let name = req.params.name
  db = mongo.getDb()
  // console.log(db, name)
  let query={name: name}
  var collection = db.collection('records');
  collection.find(query).toArray(function(err, doc) {
    if (err) {
      console.log(err)
      res.sendStatus(500).send("Failed to query")
      return
    }
    console.log(doc)
    res.send(doc)
  });

});

router.post('/person/:name/itsme', function(req, res) {
  let name = req.params.name
  db = mongo.getDb()
  console.log(name, req.body)
  // data = { from: 'google.com', index: '0', itsme: true }
  data = req.body
  var query = { from: data.from, name: name };
  var hash={}
  hash[`results.${data.index}.itsme`]=data.itsme
  console.log(hash)
  var collection = db.collection('records');
  collection.updateOne(query, { $set: hash }, function(err, mongoRes) {
    if (err) {
      console.log(err)
      res.sendStatus(500).send("Failed to update")
      return
    }
    // console.log(mongoRes);
    res.send("done")
  })

});

router.post('/person/:name/comment', function(req, res) {
  let name = req.params.name
  db = mongo.getDb()
  console.log(name, req.body)
  // data = { from: 'google.com', index: '0', comment: '...' }
  data = req.body
  var query = { from: data.from, name: name };
  var hash={}
  hash[`results.${data.index}.comment`]=data.comment
  console.log(hash)
  var collection = db.collection('records');
  collection.updateOne(query, { $set: hash }, function(err, mongoRes) {
    if (err) {
      console.log(err)
      res.sendStatus(500).send("Failed to update")
      return
    }
    // console.log(mongoRes);
    res.send("done")
  })

});

module.exports = router;