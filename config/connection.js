//Node Connection to MySQL

var mysql = require ('mysql');

var connection;

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
		host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'q3017vdro6hj4c3p',
		password: 'j7usj2i3gvndd61c',
		database: 'wwvymy45r58qi3ce'
	});
};


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;