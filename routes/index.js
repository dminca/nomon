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

router.get('/newstudent', function(req,res){
  res.render('newstudent', {title: 'Add student'});
});

router.post('/addstudent', function(req,res){
  var MongoClient = db.MongoClient;

  var url = 'mongodb://localhost:27017/nomon';

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log("Unable to connect to server", err);
    } else {
      console.log("Connected to server");

      var collections = db.collection('students');

      var student1 = {student: req.body.student, age: req.body.age,
                        sex: req.body.sex};

      collection.insert([student1], function(err, result){
        if(err){
          console.log(err);
        } else {
          res.redirect("thelist");
        }

        db.close();
      });
    }
  });
});

module.exports = router;
