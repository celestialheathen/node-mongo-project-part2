var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('mydb')

  var cat = {name: 'amber'}

  var newValue = { $set: {gender: 'female'} }

  dbo.collection('pets').updateOne( cat, newValue, (err, res) => {
    if (err) throw err;
    console.log('1 document updated')
    db.close()
  })
})