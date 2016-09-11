/**
 * Created by pujasvi on 9/8/16.
 */
console.log("index.js loaded");
var largest,largest1,log;
$(function () {

   var count=1;


    function chng_img(){
        console.log("chng imge called");
        var image_id=$("#back_image");
        image_id.css('background-image','url(pic4.jpg)');
        image_id.css("background-size","100% 120%");

    }
    function chng_img2(){
        console.log("chng imge called");
        var image_id=$("#back_image");
        image_id.css('background-image','url(pic3.jpg)');
        image_id.css("background-size","100% 120%");

    }


    setTimeout(chng_img,3000);
    setTimeout(chng_img2,6000)
/*
$("#img1").css('background-image','url(rio2.jpg)');
    $("#img1").css('background-size',"100% 120%");

    $("#img2").css('background-image','url(d1.png)');
    $("#img2").css('background-size',"100% 120%");

    $("#img3").css('background-image','url(d2.jpg)');
    $("#img3").css('background-size',"100% 120%");


    $("#cimg1").css('background-image','url(d3.jpg)');
    $("#cimg1").css('background-size',"100% 120%");

    $("#cimg2").css('background-image','url(d4.png)');
    $("#cimg2").css('background-size',"100% 120%");

    $("#cimg3").css('background-image','url(d5.jpg)');
    $("#cimg3").css('background-size',"100% 120%");

    $("#ccimg1").css('background-image','url(d6.png)');
    $("#ccimg1").css('background-size',"100% 120%");

    $("#ccimg2").css('background-image','url(d7.jpg)');
    $("#ccimg2").css('background-size',"100% 120%");

    $("#ccimg3").css('background-image','url(d8.png)');
    $("#ccimg3").css('background-size',"100% 120%");
  */  mh();

    var stat = localStorage.getItem("stat");
    var us = localStorage.getItem("us");
    console.log("stat is"+stat+us);
    if(stat=="logged in ") {
        console.log("bbbbbbbbbbbbbb");
        $('#try').html(" WELCOME  " + '<div>' + us + '</div>');
        $('#try').append('<button  id="vv" onclick="dd()">' + "logout" + '</button>');
    }
});
dd=function(){
    var stat = "logged out ";
    localStorage.setItem("stat", stat);
    $('#try').html(" WELCOME ");
    $("#vv").remove();

}
mh=function(){
    $.get('/showcity', function (data, status) {
        console.log("enter here in show city");
        console.log("showcity in index.js called");
        var i=0;
        var it=[],ids=[];
        it=data;ids=data;

          console.log("city are" + data[0].city+"aaaaaaa"+data[0].img_link);

            console.log("row is"+it[i++].city+i);
            $("#cimg1").css('background-image','url('+data[0].img_link+')');
            $("#cimg1").css('background-size',"100% 120%");


        $("#cimg2").css('background-image','url('+data[14].img_link+')');
        $("#cimg2").css('background-size',"100% 120%");

        $("#cimg3").css('background-image','url('+data[13].img_link+')');
        $("#cimg3").css('background-size',"100% 120%");

        $("#img1").css('background-image','url('+data[3].img_link+')');
        $("#img1").css('background-size',"100% 120%");

        $("#img2").css('background-image','url('+data[4].img_link+')');
        $("#img2").css('background-size',"100% 120%");

        $("#img3").css('background-image','url('+data[5].img_link+')');
        $("#img3").css('background-size',"100% 120%");

        $("#ccimg1").css('background-image','url('+data[14].img_link+')');
        $("#ccimg1").css('background-size',"100% 120%");

        $("#ccimg2").css('background-image','url('+data[13].img_link+')');
        $("#ccimg2").css('background-size',"100% 120%");

        $("#ccimg3").css('background-image','url('+data[5].img_link+')');
        $("#ccimg3").css('background-size',"100% 120%");

        $("#sd").html(data[0].details);

        $("#sd1").html(data[1].details);
        $("#sd2").html(data[2].details);






    })
}
//signup values;

sinup=function(cb) {


   show(cb);

}

//create

create =function() {
    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");
        $('#vr2').html("login first");
        document.gg.reset();
    }
    else if (stat== "logged in ") {
        if ($('#ag').val() < 99 && $('#ag').val() > 1) {

        $.get('/showcre', function (data, status) {
                console.log("enter here in show cre")
                largest1 = data[0].id;
                console.log("showcre in index.js called" + largest1);
                //+ largest

                var uname = $('#urname').val();
                var phone = $('#no').val();
                var eeid = $('#eid').val();
                var ename = $('#ename').val();
                var othr = $('#othr2').val();

                var dos = $('#sdate').val();
                var doe = $('#edate').val();
                var ag = $('#ag').val();
                var city = $('#city').val();
                var othr3 = $('#othr3').val();
                var ppl = $('#ppl').val();
                var txt = $('#txt').val();
                var link = $('#lin').val();
                var im = $('#im').val();
                console.log("image path is is" + im);


                //console.log(" create value is" +rel+com,conf,comp,othr);

                $.post('/create', {
                    id: largest1 + 1,
                    name: uname,
                    phone: phone,
                    eeid: eeid,
                    ename: ename,

                    othr: othr,
                    dos: dos,
                    doe: doe,
                    ag: ag,
                    city: city,
                    othr3: othr3,
                    ppl: ppl,
                    txt: txt,
                    link: link,
                    im: im,

                }, function (data, status) {

                    console.log("status" + status);
                });
            }
        );

        document.getElementById("my").style.display = "none";
    }
    else{
            $('#vr').html("enter a valid age");
            $('#vr2').html("enter a valid age");
        }
    }

}

var largesta;
bg =function(){

    console.log("clicked aaaaaa");
    user=$('#ns').val();
    email=$('#nns').val();
    msg=$('#nnns').val();
    console.log("sub m value "+user +email);
    $.get('/showfb',function(data, status) {
        console.log("enter here")
       largesta= parseInt(data[0].id)+1;
        console.log("show in index.js  showfb called"+ largesta);

    $.post('/fb',{
          id:largesta,
            name:user,
            email:email,
        msg:msg
        },
        function(data,status){
            console.log("feedback"+largesta);





        })

    });
    console.log("cccc");
    document.fg.reset();
}
divi =function() {
    document.getElementById("lower").style.display="none";
    document.getElementById("side").style.display="none";

    document.getElementById("side2").style.display="none";


anothr();

   // $('#olower').html(" password  did not match");

}
var id_city=[]

function anothr() {
    $.get('/showcity', function (data, status) {
            console.log("enter here in show city");
            console.log("showcity in index.js called");
        var i=0;
        var it=[],ids=[];
        it=data;ids=data;
            for (var row in data)
            {  console.log("city are" + data[row].city);

                    console.log("row is"+it[i++].city+i);





                if(i==ids.length){
                    console.log("aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa")
                    $('#olower').append('<hr style="height:10px ;background-color:gray">' + '<font size="20px"> '+data[row].city +'</font>'+
                        '<br>' + '<div id="' + data[row].id + '"  + style="background-image:url(d18.jpg);' +
                        'height: auto;width:1300px;display: flex;flex-direction: row" >' + "hello" + data[row].id +
                        '<div id="' + data[row].city + '"  + style="background-image: url(d10.jpg);height: auto;' +
                        'width:300px;word-wrap: break-word; ">' +'<img src="' + it[i-1].img_link +'"+ height="200px"' +
                        ' width="200px" > '+'<br>'+'<font color="blue">'  +"date of start" + '</font>' + data[row].dos +
                        '<br>' + '<font color="blue">' + "date of end" + '</font>' + data[row].doe + '<br>' +
                        '<font color="blue">' + "info" + '</font>' + data[row].details + '<br>' + '<font color="blue">'
                        + "link" + '</font>' + data[row].link + '<br>' +  '</div>' +'</div>')
                }

if(it[i].city!=it[i-1].city  ) {
    console.log("in if value is" + it[i - 1].city + it[i].city)
    $('#olower').append('<hr style="height:10px ;background-color:gray">' +'<font size="20px"> '+ data[row].city +'</font>'+
        '<br>' + '<div id="' + data[row].id + '"  + style="background-image:url(d18.jpg);' +
        'height: auto;width:1300px;display: flex;flex-direction: row" >' + "hello" + data[row].id +
        '<div id="' + data[row].city + '"  + style="background-image: url(d10.jpg);height: auto;' +
        'width:300px;word-wrap: break-word; ">' + '<img src="' + it[i - 1].img_link + '"+ height="300px"' +
        ' width="300px" > ' + '<br>' + '<font color="blue">' + "date of start" + '</font>' + data[row].dos +
        '<br>' + '<font color="blue">' + "date of end" + '</font>' + data[row].doe + '<br>' +
        '<font color="blue">' + "info" + '</font>' + data[row].details + '<br>' +  '</div>' + '</div>')
}
    if (i >= 2) {
        if (it[i - 1].city == it[i - 2].city) {
            {
                console.log("enter in else" + ids[i].id + ids[i - 1].id + it[i - 2].id + it[i - 3].id);


                $('#' + ids[i-1].id).append("hello" + ids[i-2].id + '<div id="' + data[row].city + '"  + style="background-image: url(d10.jpg);height: auto;width:300px ">' +'<img src="' + it[i-1].img_link +'"+ height="200px" width="200px" > '+'<br>'+ '<font color="blue">' + "date of start" + '</font>' + data[row].dos + '<br>' + '<font color="blue">' + "date of end" + '</font>' + data[row].doe + '<br>' + '<font color="blue">' + "info" + '</font>' + data[row].details + '<br>' + '<font color="blue">' + "link" + '</font>' + data[row].link + '<br>' +  '</div>')
                //document.getElementById(it)
                // $("#"+data[row].id).append('<div style="height:200px  width:200px;background-color:deeppink"'+'hello work please'+'</div>');
                //document.getElementById("data[row].city").appendChild("hello double");
                //$('#it[i].city').append('<div  style="background-color: pink;height: 200px;width:300px ">'+"hello"+'</div>')
            }
        }
    }

console.log("lngth"+ids.length);

//'<div style="background-color: pink;height: 200px;width:300px ">'+'<font color="blue">'+"date of start"+'</font>'+data[row].dos+'<br>'+'<font color="blue">'+"date of end"+'</font>'+data[row].doe+'<br>'+'<font color="blue">'+"info"+'</font>'+data[row].details+'<br>'+'<font color="blue">'+"link"+'</font>'+data[row].link+'<br>'+'<font color="blue">'+"img path"+'</font>'+data[row].img_link+'<br>'+'</div>')  id="' + data[row].id + '"

                /* $.post('/evi',{it:it},function(data,status){   '<li '+ cls +' id="'+todo.id+'" >'
                     /for(var i in data) {
                         console.log("status" + data[i].id);
                         id_city=data[i].id;

                         //$('#id').html("work");
                         //$('#olower').append('<div id=row style="background-color: blue;height: 100px;width:100px >'+ "work"+'</div>')
                     }
                 })*/

            }
        }
//document.getElementById('olower').style.display="flex";

    )

}




    function show(cb){


    console.log("clicked sign up");
    var name = $('#name').val();
    var phone = $('#phn').val();
    var eid = $('#id').val();
    var pd1 = $('#pd1').val();
    var pd2 = $('#pd2').val();




    var info = $('#inf').val();
    console.log("clicked signup");
    user = $('#name').val();
    console.log("signup m value " + phone +eid);
    $.get('/show',function(data, status) {
        console.log("enter here")
        largest=data[0].id;
        console.log("show in index.js called"+ largest);

        console.log("before sign up id is"+largest);
        $.post('/sign', {
                id:largest+1,
                name: name,
                phone_number:phone,
                Email_id: eid,
                pd1: pd1,
                details: info,
            },
            function (data, status) {

                console.log("status" + status);
            });
        if (pd1 != pd2) {
            cb("0");
        }
        else {
            cb("1");
        }

    });
}

//login values;
sub =function(){
    console.log("clicked sub");
    user=$('#user-name').val();
    pswrd=$('#pswrd').val();
    console.log("sub m value "+user +pswrd);
    $.post('/verify',{

            name:user,
        pswrd:pswrd,
        },
        function(data,status){
        console.log("verifying");
        console.log("data in verify is "+data);
           if(data== "password match")
           {console.log("enter in msg wlcm")
               log="logged in";
               var stat = "logged in ";
               var us=user;
               localStorage.setItem("stat", stat);
               localStorage.setItem("us", us);
               console.log("log is "+log);
               $('#try').html(" WELCOME  "+ '<div>'+user+'</div>');
               document.getElementById('inr').style.display="none";
               $('#try').append('<button  id="vv" onclick="dd()">' +"logout"+'</button>');

           }

           else{
               $('#msg').html(" password  did not match");

           }

          /*  if(data[0].password==pswrd)




*/
        })

   /* $.post('/login', {

        name:user,
        pswrd:pswrd
    }, function (data, status) {

        console.log("status" +status);
    });
*/

}
function cre(){
$.get('/showcre',function(data, status) {
        console.log("enter here in show cre")
        largest1 = data[0].id;
        console.log("showcre in index.js called" + largest1);
        //+ largest
    }
    );
};


sw=function(){
    $.get('/show',function(data, status) {
        console.log("enter here")
        largest=data[0].id;
        console.log("show in index.js called"+ largest);
    });
  //  location.href = location.href + "/show/";

    // window.history.pushState("object or string", "Title", "localhost:1900/show/");
    location.href = 'http://localhost:1900/show/';

    // window.location.href='localhost:1900/show/'
}
/*
check =function(){
    pd1=$('#pd1').val();
    pd2=$('#pd2').val();
    id(pd1!=pd2){
        console.log("not match")
    }
}*/




