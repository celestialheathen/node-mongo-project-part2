var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('mydb')

  dbo.dropDatabase( (err, result) => {
    if (err) throw err 
    if (result) {
      console.log('Database deleted.')
    }
    db.close()
  })
})