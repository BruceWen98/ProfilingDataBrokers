require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
// var fs = require('fs');

// var ca = [fs.readFileSync(__dirname + "/ca.pem")];
var _db;

module.exports = {
  connect: function(callback){
    console.log(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}`)
    MongoClient.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}`, {
      // sslValidate:true, 
      // sslCA:ca,
      useUnifiedTopology: true
    }, function(err, client) {
      _db = client.db(process.env.MONGODB_DB)
      // db.close();
      if(err){
        console.log("error to connect to db.", err)
      }else{
        console.log("connected...")
      }
      callback(err)
    });
  },

  getDb: function(){
    return _db
  }
}