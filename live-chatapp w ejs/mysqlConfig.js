var mysql = require('mysql');
var fs = require('fs');

var config =
{
  }

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
        console.log("Connection established.");
    }
});
    