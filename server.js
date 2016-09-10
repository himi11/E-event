/**
 * Created by pujasvi on 17/8/16.
 */

const express=require('express');
const app=express();
app.use('/',express.static('./public_html'));
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var fs = require('fs');
const md5=require('md5');
var validate = require("validate.js");
const db=require('./dbhandler.js')

var cloudinary = require('cloudinary');



cloudinary.config({
    cloud_name: 'dr2p7rxs7',
    api_key: '653217717858436',
    api_secret: 'YShS2-7y-7bClMFrG_QtiSwm5tI'
});


app.listen(2800,function(){
    console.log("server running on port 2800");
})






/*
app.post('/login',function(req,res) {
    console.log("post " + req.body.name + ' ' + req.body.pswrd);
    var newTodo = {
        name: req.body.name,
        pswrd: req.body.pswrd,
        hash:md5('pswrd')

    };
    console.log("index test  " + newTodo.name + newTodo.hash);
    //db.signup();

})*/

app.post('/sign',function(req,res) {

    console.log("post " + req.body.name + ' ' + req.body.phone_number  +' ' + req.body.Email_id +' '  +req.body.pd1);
    var entering = {
        id:req.body.id,
        name: req.body.name,

        phone: req.body.phone_number,
        mail:req.body.Email_id,

        hash:md5(req.body.pd1),
        details:req.body.details



    };
console.log("paswrd in sign up is"+entering.hash +"id is "+entering.id);
    db.signup(entering,function(result) {
        res.send(result);
    })
})

app.post('/create',function(req,res) {
    console.log("post " + req.body.name + ' ' + req.body.phone + req.body.eeid + req.body.ename + req.body.dos, req.body.doe);

    cloudinary.uploader.upload(req.body.im, function (result) {
        console.log(result);
        console.log("puublic is" + result.url);
        im = result.url;

        if(req.body.othr3!=undefined){
            req.body.city=req.body.city+req.body.othr3;
        }
        var cre = {
            id: req.body.id,
            name: req.body.name,
            phone: req.body.phone,
            eeid: req.body.eeid,
            ename: req.body.ename,
            othr: req.body.othr,
            dos: req.body.dos,
            doe: req.body.doe,
            ag: req.body.ag,
            city: req.body.city,

            ppl: req.body.ppl,
            txt: req.body.txt,
            link: req.body.link,
//linkimg:im,
            im: im,


        };

        console.log("index test  " + cre.name + cre.ag + "event type" + cre.othr);

        db.create(cre, function (result) {
            res.send(result);
        })

    })
});

//});
    app.get('/showcre', function (req, res) {
        console.log("req comin in showcre");
        db.showcre(function (result) {
                console.log(result);

                res.send(result);
            }
        )


    });

var citu=[],ans=[];
    app.get('/showcity', function (req, res) {
        console.log("req comin in showcity");
        db.showcity(function (result) {
                for (var row in result) {
                    //console.log(result[row].city);
                    citu[row] = result[row].city;



                }
            console.log("upr");

res.send(result);


        })
    });



    app.post('/verify', function (req, res) {
        //cloudinary.image("g86urzbajwbo7kkbxfi5", {width: 100, height: 150, crop: "fill"})
        console.log("verify in server.js and pswrd is " + req.body.pswrd);
        var ver = {
            name: req.body.name,
            pswrd: req.body.pswrd,
        }
        db.verify(ver, function (result) {
                console.log(result);
                console.log("both passwords are" + result[0].password + ' ' + md5(req.body.pswrd));
                if (md5(ver.pswrd) == result[0].password) {
                    res.send("password match")

                }
                else {
                    res.send("donot match");
                }
            }
        )

    });

    app.get('/show', function (req, res) {
        console.log("req comin in show");
        db.show(function (result) {
                console.log(result);

                res.send(result);
            }
        )


    })
app.get('/showfb', function (req, res) {
    console.log("req comin in fb");
    db.showfb(function (result) {
            console.log(result);

            res.send(result);
        }
    )


})

app.post('/evi',function(req,res) {

    console.log("post " + req.body.it );
    var ent = {
        vw:req.body.it,




    };
    console.log("vw is "+ent.vw);
   db.smal(ent,function(result) {
       for(var i in result){
       console.log(result[i].id);
        res.send(result);}
    })
})

app.post('/fb',function(req,res) {

    console.log("feedback " + req.body.name+ req.body.email+req.body.msg+req.body.id+"last");
    var entr = {
        id:req.body.id,
          a:  req.body.name,
b :req.body.email,

   c: req.body.msg,




    };
    console.log("vw is "+entr.a);
    db.feb(entr,function(result) {

            console.log(result);
            res.send(result);
    })
})
