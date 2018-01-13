var express = require('express');
var mysql       = require('mysql');
var router = express.Router();
var dbconfig    = require('../config/dbconfig');

/* GET users listing. */
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
    // RDS查询
    let connection = mysql.createConnection(dbconfig.mysql);
    let sql = "select * from user as a left join userinfo as b on a.username = b.username;";
    connection.connect();
    connection.query(sql, function (err, result) {
        if (err != null) {
            res.json({error: err.toString() });
            return;
        }
        if (result.length === 0) {
            res.json({ error: '用户名或密码错误！' });
        } else {
            const user = result[0];
            // req.session.sign = true;
            // req.session.user_id = user.userId;
            res.json({ data: result });
        }
    });
    connection.end();
});

module.exports = router;
