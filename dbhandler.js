/**
 * Created by pujasvi on 19/8/16.
 */
const mysql=require('mysql');
let connection=null;
function createConnection(){
    connection=mysql.createConnection({
        host     : 'localhost',
        user     : 'pujasvir',
        // password : 'secret',
        //tab1
        database : 'project'
    });

}
function signup(val,cb){
    console.log("called sign up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into tab1 value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+

            val.phone+
        ','+
        '"' + val.mail + '"'+
        ','+
        '"' + val.hash + '"'+
        ','+
        '"' + val.details + '"' + ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


function create(val,cb){
    console.log("called create up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into tab3 value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+

        val.phone+
        ','+
        '"' + val.eeid + '"'+
        ','+
        '"' + val.ename + '"'+
        ','+
        '"' + val.othr + '"'+
        ','+
        '"' + val.dos+'"' +
        ','+
        '"' +val.doe+'"' +
        ','+
        val.ag+
        ','+
        '"' + val.city + '"'+
        ','+
        val.ppl+
        ','+
        '"' + val.txt + '"' +
        ','+
        '"' + val.link + '"' +
        ','+
        '"' + val.im + '"' +

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


function showcre(cb){
    createConnection();
    connection.connect();
console.log("show cre in db called");
    const queryString1='select * from tab3 order by id desc';
    connection.query(queryString1,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();


}
function showcity(cb){
    createConnection();
    connection.connect();
    console.log("show city in db called");
    const queryString1='select  distinct city,id,dos,doe,details,link,img_link from tab3 order by city';

    connection.query(queryString1,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();


}
/*
var mysql = require('mysql');
var pool =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
});

function getStudents(ids, cb) {
    var students = [];
    var pending = ids.length;

    for(var i in ids) {
        pool.query('SELECT * FROM students WHERE id = ?', [ ids[i] ], function(err, stu){
            students.push(stu);
            if( 0 === --pending ) {
                cb(students); //callback if all queries are processed
            }
        });
    }
}

var ids = [1,2,3,4,5];
getStudents(ids, function(students){
    console.log(students);
});
*/
function cities(citiy,cb) {
    createConnection();
    connection.connect();
    var pending = citiy.length;
    for (var row in citiy) {
        //onsole.log("show cityies inside db called" + citiy[row]);
        connection.query('select id from tab3 where city=?', citiy[row], function (err, rows, fields) {
            // var queryString2 =
            // '=' + "'" + citiy[row] + "'";
          //  console.log("enter query"+rows);
            //if (0 === --pending) {
                cb(rows); //callback if all queries are processed
            //}
        })
    }
}


    function show(cb){
        createConnection();
        connection.connect();

        const queryString='select * from tab1 order by id desc';
        connection.query(queryString,function(err,rows,fields){
            if (err) throw err;
            cb(rows);
        })
        connection.end();


    }
function showfb(cb){
    createConnection();
    connection.connect();

    const queryString='select * from tab4 order by id desc';
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();


}


function verify(ver,cb){
    createConnection();
    connection.connect();

var nm=ver.name;
    const queryString='select password from tab1 where name='+ "'"+ nm +"'";
        //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function smal(ver,cb){
    createConnection();
    connection.connect();

    var vw=ver.vw;
    const queryString='select id from tab3 where city='+ "'"+ vw +"'";
    //'where name='+ver.name;

    connection.query(queryString,function(err,rows,fields){
        console.log("smal works")
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function feb(val,cb){
    createConnection();
    connection.connect();






    var queryString=
        'insert into tab4 value('+

        val.id +
        ',' +

        '"' + val.a + '"'+

        ','+

        '"' + val.b + '"'+
        ','+
        '"' + val.c + '"'+
         ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);


})

    connection.end();
}
module.exports= {
    signup:signup,
create:create,
     show:show,
    showcre:showcre,
    showcity:showcity,
    verify:verify,
    cities:cities,
    smal:smal,
    feb:feb,
    showfb:showfb,
    /* addTodo:addTodo
     */
}