var mysql = require("mysql")

var connection

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

var connection = mysql.createConnection({
  host: "muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "k9qclj97v356cw8d",
  password: "o9cv24hsblqkiye7",
  database: "ib75mtfe3mk00w1j"
});

}

  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;