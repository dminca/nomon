var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', function(req, res){
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:27017/nomon';

  MongoClient.connect(url, function(err, db){
    if(err) {
      console.log('Unable to connect to the server', err);
    } else {
      console.log('Connection established!');

      var collection = db.collection('students');

      collection.find({}).toArray(function(err,result){
        if(err) {
          res.send(err);
        } else if (result.length){
          res.render('studentlist', {
            "studentlist": result
          });
        } else {
          res.send('No documents found');
        }

        db.close();
      });
    }
  })
});

module.exports = router;
