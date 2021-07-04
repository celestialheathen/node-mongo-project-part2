var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err
  var dbo = db.db('mydb')

  dbo.collection('pets').deleteMany( {wild: true}, (err, res) => {
    if (err) throw err
    console.log('Documents deleted')
    db.close()
  })
})
