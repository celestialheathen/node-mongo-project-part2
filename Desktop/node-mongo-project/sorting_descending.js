var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('mydb')

  var mysort = { name: -1 }

  dbo.collection('pets').find().sort(mysort).toArray( (err, result) => {
    if (err) throw err 
    console.log(result)
    db.close()
  })
})