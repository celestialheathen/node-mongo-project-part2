var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('mydb')

  var cats = [
    {name: 'gigi', type: 'feline', wild: true},
    {name: 'tofu', type: 'feline', wild: false},
    {name: 'lily', type: 'feline', wild: false},
    {name: 'nico', type: 'feline', wild: true}
  ]

  dbo.collection('pets').insertMany( cats, (err, res) => {
    if (err) throw err;
    console.log('4 documents inserted')
    db.close()
  })
})