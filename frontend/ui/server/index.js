const apps = require("./app");
const mongo = require("./mongo");

let port = process.env.PORT || 3000;

mongo.connect(function(err){
  if(err){
    console.log("Failed to connect to mongo. Exit")
    process.exit(1)
  }else{
    apps.server.listen(port, () => console.log(`listening on :${port}`))
  }
})

