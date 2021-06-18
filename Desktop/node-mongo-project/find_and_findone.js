var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, function(err, db) {
  var dbo = db.db('mydb')
  dbo.collection("pets").findOne({name: 'amber'}, function(err, result) {
    console.log(result)
  })
  db.close()
})

// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var dbo = db.db('mydb')
//   dbo.collection("pets").find({wild: true}).toArray(function(err, result) {
//     if (err) throw err
//     console.log(result)
//     db.close()
//   })
// })