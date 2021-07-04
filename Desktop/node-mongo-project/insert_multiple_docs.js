var mongo = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/mydb"

mongo.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('mydb')

  var cats = [
    {name: 'choco', type: 'cat', wild: true},
    {name: 'amber', type: 'cat', wild: false},
    {name: 'hunter', type: 'cat', wild: true}
  ]

  dbo.collection('pets').insertMany( cats, (err, res) => {
    if (err) throw err;
    console.log('3 documents inserted')
    db.close()
  })
})