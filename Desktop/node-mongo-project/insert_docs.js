var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('mydb')

  var cat1 = {name: 'mochi', type: 'cat', wild: false}

  dbo.collection('pets').insertOne( cat1, (err, res) => {
    if (err) throw err;
    console.log('1 document inserted')
    db.close()
  })
})
