var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err
  var dbo = db.db('mydb')

  var cat1 = {name: 'amber'}

  dbo.collection('pets').deleteOne( cat1, (err, res) => {
    if (err) throw err
    console.log('1 document deleted')
    db.close()
  })
})
