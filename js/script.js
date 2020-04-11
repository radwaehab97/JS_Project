$(function () {
    $("#finish").click(function(){
       $("#cele").show(); 
    });
    var counter = 0;
    $("#cele").on("click",function(){
        
       var timer = setInterval(function(){
           if(counter == 5){
               $("#gif").hide();
               $("#welcomep").hide();
               counter=0;
               clearInterval(timer);
           }else{
               $("#gif").show();
               $("#welcomep").show();
               document.getElementById("welcomep").innerHTML="Nice Picture, "+firstname+" "+middlename+" "+lastname+" !";
               counter++;
           }
       },500) ;
    });
    
    
    
    
    

    var gender = $("#gender").val();

    var initialHair = $("#outhair").clone();
    var initialEyes = $("#outeyes").clone();
    var initialNose = $("#outnose").clone();
    var initialLips = $("#outlips").clone();
    ////////////////////////////////////////// Face Shape /////////////////////////////////////////////////////////////////
    $("#skin").on("change", function () {
        skin = $("#skin").val();
        for (var i = 1; i <= 4; i++) {
            $("#shape" + i).attr("src", "../face/" + skin + "/" + i + ".png");
        }
    });


    $("#reset").click(function () {
        $("#outface").fadeOut(1000);
        $("#outnose").fadeOut(1000);
        $("#outeyebrow").fadeOut(1000);
        $("#outeyes").fadeOut(1000);
        $("#outbackground").fadeOut(1000);
        $("#outhair").fadeOut(1000);
        $("#outhair").fadeOut(1000);
        $("#outlips").fadeOut(1000);
        $("#outbeard").fadeOut(1000);
        $("#outglasses").fadeOut(1000);
        $("#cele").hide();
        $("#welcomep").hide();

    });
    
    


    $("#shape1").click(function () {
        $("#outface").attr("src", "../face/" + skin + "/1.png");
        $("#outface").show();
    });

    $("#shape2").click(function () {
        $("#outface").attr("src", "../face/" + skin + "/2.png");
        $("#outface").show();
    });

    $("#shape3").click(function () {
        $("#outface").attr("src", "../face/" + skin + "/3.png");
        $("#outface").show();
    });

    $("#shape4").click(function () {
        $("#outface").attr("src", "../face/" + skin + "/4.png");
        $("#outface").show();
    });







    //////////////////////////////////////////////// Eyes ///////////////////////////////////////////////////////////////////////
    $("#eye").on("change", function () {
        color = $("#eye").val();
        for (var i = 1; i <= 4; i++) {
            $("#eye" + i).attr("src", "../eyes/" + color + "/" + i + ".png");
        }
    });

    $("#eye1").click(function () {
        $("#outeyes").attr("src", "../eyes/" + color + "/1.png");
        $("#outeyes").show();

    });

    $("#eye2").click(function () {
        $("#outeyes").attr("src", "../eyes/" + color + "/2.png");
        $("#outeyes").show();

    });

    $("#eye3").click(function () {
        $("#outeyes").attr("src", "../eyes/" + color + "/3.png");
        $("#outeyes").show();

    });

    $("#eye4").click(function () {
        $("#outeyes").attr("src", "../eyes/" + color + "/4.png");
        $("#outeyes").show();

    });

    //////////////////////////////////////////////////// Nose ////////////////////////////////////////////////////////////////////////

    //   $("#nose").on("change", function(){
    for (var i = 1; i <= 4; i++) {
        $("#nose" + i).attr("src", "../nose/nose" + i + ".png");
    }
    //});

    $("#nose1").click(function () {
        $("#outnose").attr("src", "../nose/nose1.png");
        $("#outnose").show();

    });

    $("#nose2").click(function () {
        $("#outnose").attr("src", "../nose/nose2.png");
        $("#outnose").show();

    });

    $("#nose3").click(function () {
        $("#outnose").attr("src", "../nose/nose3.png");
        $("#outnose").show();

    });

    $("#nose4").click(function () {
        $("#outnose").attr("src", "../nose/nose4.png");
        $("#outnose").show();

    });
    ////////////////////////////////////////////////////////////////////////////////////////

    for (var i = 1; i <= 5; i++) {
        $("#eyebrow" + i).attr("src", "../eyebrow/" + i + ".png");
    }
    //});

    $("#eyebrow1").click(function () {
        $("#outeyebrow").attr("src", "../eyebrow/1.png");
        $("#outeyebrow").show();

    });
    $("#eyebrow2").click(function () {
        $("#outeyebrow").attr("src", "../eyebrow/2.png");
        $("#outeyebrow").show();

    });
    $("#eyebrow3").click(function () {
        $("#outeyebrow").attr("src", "../eyebrow/3.png");
        $("#outeyebrow").show();

    });
    $("#eyebrow4").click(function () {
        $("#outeyebrow").attr("src", "../eyebrow/4.png");
        $("#outeyebrow").show();

    });
    $("#eyebrow5").click(function () {
        $("#outeyebrow").attr("src", "../eyebrow/5.png");
        $("#outeyebrow").show();

    });

    ////////////////////////////////////////////////////GLasses////////////////////////////////////////////////////////////////////////
    $("#glasses").on("change", function () {

        var choice = $("#glasses option:selected").val();

        if (choice == 'Yes') {
            
            $("#glassesdisplay").show();

            for (var i = 1; i < 4; i++) {
                $("#glasses" + i).attr("src", "../glasses/" + i + ".png");
            }

            $("#glasses1").click(function () {
                $("#outglasses").show();
                $("#outglasses").attr("src", "../glasses/1.png");
            });

            $("#glasses2").click(function () {
                $("#outglasses").show();
                $("#outglasses").attr("src", "../glasses/2.png");
            });

            $("#glasses3").click(function () {
                $("#outglasses").show();
                $("#outglasses").attr("src", "../glasses/3.png");
            });

            

            

        } else {
            $("#glassesdisplay").hide();
            $("#outglasses").hide();
            for (var i = 1; i < 4; i++) {
                $("#glasses" + i).attr("src", " ");
            }

            $("#glasses1").click(function () {
                $("#outglasses").attr("src", " ");
            });

            $("#glasses2").click(function () {
                $("#outglasses").attr("src", " ");
            });

            $("#glasses3").click(function () {
                $("#outglasses").attr("src", " ");
            });

           


        }

    });

    
    ////////////////////////////////////////////////////background////////////////////////////////////////////////////////////////////////
    $("#background").on("change", function () {

        var choice = $("#background option:selected").val();

        if (choice == 'Yes') {
            $("#backgrounddisplay").show();

            for (var i = 1; i < 6; i++) {
                $("#background" + i).attr("src", "../backgrounds/" + i + ".jpg");
                
            }

            $("#background1").click(function () {
                $("#outbackground").show();
                $("#outbackground").attr("src", "../backgrounds/1.jpg");
                
            });

            $("#background2").click(function () {
                $("#outbackground").show();
                $("#outbackground").attr("src", "../backgrounds/2.jpg");
                
            });

            $("#background3").click(function () {
                $("#outbackground").show();
                $("#outbackground").attr("src", "../backgrounds/3.jpg");
                
            });

            $("#background4").click(function () {
                $("#outbackground").show();
                $("#outbackground").attr("src", "../backgrounds/4.jpg");
                
            });

            $("#background5").click(function () {
                $("#outbackground").show();
                $("#outbackground").attr("src", "../backgrounds/5.jpg");
                
            });

         

        } else {
            $("#backgrounddisplay").hide();
            $("#outbackground").hide();
            for (var i = 1; i < 6; i++) {
                $("#background" + i).attr("src", " ");
            }

            $("#background1").click(function () {
                $("#outbackground").attr("src", " ");
            });

            $("#background2").click(function () {
                $("#outbackground").attr("src", " ");
            });

            $("#background3").click(function () {
                $("#outbackground").attr("src", " ");
            });

            $("#background4").click(function () {
                $("#outbackground").attr("src", " ");
            });

            $("#background5").click(function () {
                $("#outbackground").attr("src", " ");
            });


        }

    });






    //////////////////////////////////////////////////// Hair ////////////////////////////////////////////////////////////////////////
    $("#gender").on("change", function () {
        gender = $("#gender").val();
        localStorage.setItem("gender", gender);
        for (var i = 1; i < 10; i++) {
            $("#hair" + i).attr("src", "../hair/" + gender + i + ".png");
        }
        if (gender == "male") {
            for (var i = 0; i < 11; i++) {
                $("#fullbeard").show();
                $("#beard" + i).attr("src", "../beard/" + i + ".png");
            }

        } else {
            $("#fullbeard").hide();
            $("#outbeard").hide();

        }

    });


    $("#beard0").click(function () {
        $("#outbeard").hide();


    });
    $("#beard1").click(function () {
        $("#outbeard").attr("src", "../beard/1.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "117px");
        $("#outbeard").css("width", "206px");
        $("#outbeard").css("top", "240px");
        $("#outbeard").css("position", "absolute");


    });
    $("#beard2").click(function () {
        $("#outbeard").attr("src", "../beard/2.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "105px");
        $("#outbeard").css("width", "235px");
        $("#outbeard").css("top", "124px");
        $("#outbeard").css("position", "absolute");




    });
    $("#beard3").click(function () {
        $("#outbeard").attr("src", "../beard/3.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "103px");
        $("#outbeard").css("width", "234px");
        $("#outbeard").css("top", "168px");
        $("#outbeard").css("position", "absolute");



    });
    $("#beard4").click(function () {
        $("#outbeard").attr("src", "../beard/4.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "103px");
        $("#outbeard").css("width", "234px");
        $("#outbeard").css("top", "168px");
        $("#outbeard").css("position", "absolute");


    });
    $("#beard5").click(function () {
        $("#outbeard").attr("src", "../beard/5.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "135px");
        $("#outbeard").css("width", "195px");
        $("#outbeard").css("top", "234px");
        $("#outbeard").css("position", "absolute");

    });
    $("#beard6").click(function () {
        $("#outbeard").attr("src", "../beard/6.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "105px");
        $("#outbeard").css("width", "235px");
        $("#outbeard").css("top", "124px");
        $("#outbeard").css("position", "absolute");


    });
    $("#beard7").click(function () {
        $("#outbeard").attr("src", "../beard/7.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "114px");
        $("#outbeard").css("width", "218px");
        $("#outbeard").css("top", "231px");
        $("#outbeard").css("position", "absolute");


    });
    $("#beard8").click(function () {
        $("#outbeard").attr("src", "../beard/8.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "124px");
        $("#outbeard").css("width", "206px");
        $("#outbeard").css("top", "240px");
        $("#outbeard").css("position", "absolute");


    });
    $("#beard9").click(function () {
        $("#outbeard").attr("src", "../beard/9.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "117px");
        $("#outbeard").css("width", "228px");
        $("#outbeard").css("top", "234px");
        $("#outbeard").css("position", "absolute");


    });
    $("#beard10").click(function () {
        $("#outbeard").attr("src", "../beard/10.png");
        $("#outbeard").show();
        $("#outbeard").css("left", "117px");
        $("#outbeard").css("width", "228px");
        $("#outbeard").css("top", "234px");
        $("#outbeard").css("position", "absolute");


    });

    $("#hair1").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "1.png");
            $("#outhair").css("left", "35px");
            $("#outhair").css("width", "362px");
            $("#outhair").css("top", "-60px");
            $("#outhair").show();

        } else {
            $("#outhair").attr("src", "../hair/" + gender + "1.png");
            $("#outhair").css("left", "-164px");
            $("#outhair").css("width", "782px");
            $("#outhair").css("top", "-328px");
            $("#outhair").show();

        }
    });

    $("#hair2").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "2.png");
            $("#outhair").show();
            $("#outhair").css("left", "-35px");
            $("#outhair").css("top", "-74px");
            $("#outhair").css("width", "514px");
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "2.png");
            $("#outhair").css("left", "-168px");
            $("#outhair").css("width", "821px");
            $("#outhair").css("top", "-370px");
            $("#outhair").show();

        }
    });

    $("#hair3").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "3.png");
            $("#outhair").css("left", "55px");
            $("#outhair").css("top", "-53px");
            $("#outhair").css("width", "348px");
            $("#outhair").show();
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "3.png");
            $("#outhair").css("left", "-154px");
            $("#outhair").css("width", "774px");
            $("#outhair").css("top", "-294px");
            $("#outhair").show();
        }
    });

    $("#hair4").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "4.png");
            $("#outhair").show();
            $("#outhair").css("left", "40px");
            $("#outhair").css("top", "-47px");
            $("#outhair").css("width", "374px");
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "4.png");
            $("#outhair").css("left", "-166px");
            $("#outhair").css("width", "814px");
            $("#outhair").css("top", "-356px");
            $("#outhair").show();
        }


    });

    $("#hair5").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "5.png");
            $("#outhair").show();
            $("#outhair").css("top", "-39px");
            $("#outhair").css("left", "46px");
            $("#outhair").css("width", "348px");
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "5.png");
            $("#outhair").css("left", "-164px");
            $("#outhair").css("width", "782px");
            $("#outhair").css("top", "-328px");
            $("#outhair").show();
        }


    });

    $("#hair6").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "6.png");
            $("#outhair").show();
            $("#outhair").css("width", "398px");
            $("#outhair").css("top", "-3px");
            $("#outhair").css("left", "4px");
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "6.png");
            $("#outhair").css("left", "-179px");
            $("#outhair").css("width", "820px");
            $("#outhair").css("top", "-358px");
            $("#outhair").show();
        }


    });

    $("#hair7").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "7.png");
            $("#outhair").show();
            $("#outhair").css("width", "366px");
            $("#outhair").css("top", "-69px");
            $("#outhair").css("left", "33px");
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "7.png");
            $("#outhair").css("left", "-169px");
            $("#outhair").css("width", "782px");
            $("#outhair").css("top", "-289px");
            $("#outhair").show();

        }


    });

    $("#hair8").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "8.png");
            $("#outhair").show();
            $("#outhair").css("width", "366px");
            $("#outhair").css("top", "-103px");
            $("#outhair").css("left", "41px");
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "8.png");
            $("#outhair").css("left", "-189px");
            $("#outhair").css("width", "825px");
            $("#outhair").css("top", "-315px");
            $("#outhair").show();
        }

    });

    $("#hair9").click(function () {
        if (gender == "female") {
            $("#outhair").attr("src", "../hair/" + gender + "9.png");
            $("#outhair").show();
            $("#outhair").css("width", "379px");
            $("#outhair").css("top", "-47px");
            $("#outhair").css("left", "16px");
        } else {
            $("#outhair").attr("src", "../hair/" + gender + "9.png");
            $("#outhair").css("left", "-137px");
            $("#outhair").css("width", "751px");
            $("#outhair").css("top", "-317px");
            $("#outhair").show();
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////

    $("#lip").on("change", function () {
        colors = $("#lip").val();
        for (var i = 1; i <= 6; i++) {
            $("#lip" + i).attr("src", "../lips/" + colors + "/" + i + ".png");
        }
    });

    $("#lip1").click(function () {
        $("#outlips").attr("src", "../lips/" + colors + "/1.png");
        $("#outlips").show();

    });

    $("#lip2").click(function () {
        $("#outlips").attr("src", "../lips/" + colors + "/2.png");
        $("#outlips").show();

    });

    $("#lip3").click(function () {
        $("#outlips").attr("src", "../lips/" + colors + "/3.png");
        $("#outlips").show();

    });

    $("#lip4").click(function () {
        $("#outlips").attr("src", "../lips/" + colors + "/4.png");
        $("#outlips").show();

    });

    $("#lip5").click(function () {
        $("#outlips").attr("src", "../lips/" + colors + "/5.png");
        $("#outlips").show();

    });

    $("#lip6").click(function () {
        $("#outlips").attr("src", "../lips/" + colors + "/6.png");
        $("#outlips").show();

    });

    $("#done").click(function () {
        var shapeAll = document.getElementById("outface");
        var shapesrc = shapeAll.src;

        var eyesAll = document.getElementById("outeyes");
        var eyessrc = eyesAll.src;

        var eyebrowAll = document.getElementById("outeyebrow");
        var eyebrowsrc = eyebrowAll.src;

        var lipsAll = document.getElementById("outlips");
        var lipssrc = lipsAll.src;

        var glassesAll = document.getElementById("outglasses");
        var glassessrc = glassesAll.src;

        var hairAll = document.getElementById("outhair");
        var hairsrc = hairAll.src;

        var noseAll = document.getElementById("outnose");
        var nosesrc = noseAll.src;

        var beardAll = document.getElementById("outbeard");
        var beardsrc = beardAll.src;




        localStorage.setItem("shape", shapesrc);
        localStorage.setItem("eyes", eyessrc);
        localStorage.setItem("eyebrow", eyebrowsrc);
        localStorage.setItem("lips", lipssrc);
        localStorage.setItem("glasses", glassessrc);
        localStorage.setItem("hair", hairsrc);
        localStorage.setItem("nose", nosesrc);
        localStorage.setItem("beard", beardsrc);

        location.assign("id.html");



    });
    var genderfinal = localStorage.gender;

    if (genderfinal == "male") {

        $("#idface").attr("src", localStorage.shape);
        $("#idnose").attr("src", localStorage.nose);
        $("#idlips").attr("src", localStorage.lips);
        $("#idlips").attr("src", localStorage.glasses);
        $("#idbeard").attr("src", localStorage.beard);
        $("#idhair").attr("src", localStorage.hair);
        $("#ideyes").attr("src", localStorage.eyes);
        $("#ideyebrow").attr("src", localStorage.eyebrow);
    } else {
        $("#idface").attr("src", localStorage.shape);
        $("#idnose").attr("src", localStorage.nose);
        $("#idlips").attr("src", localStorage.lips);
        $("#idlips").attr("src", localStorage.glasses);
        //    $("#idbeard").attr("src",localStorage.beard);
        $("#idhair").attr("src", localStorage.hair);
        $("#ideyes").attr("src", localStorage.eyes);
        $("#ideyebrow").attr("src", localStorage.eyebrow);

    }




    //take a screenshot
    $("#btnSave").click(function () {
        html2canvas(document.querySelector("#finalimage")).then(canvas => {
            document.body.appendChild(canvas)
        });


    });

    /*
    html2canvas($("#finalimage"),{
    onrendered: function(canvas){
        saveAs(canvas.toDataURL(),'canvas.png');
    }    
    });
    });
        
        function saveAs(uri,filename){
            var link = document.createElement('a');
            
            if (typeof link.download == 'string')
                {
                    link.href = uri;
                    link.download = filename;
                    
                    document.body.appendChild(link);
                    
                    link.click();
                    
                    document.body.removeChild(link);
                }
            else
            {
                window.open(uri);
            }
        }
        
        
        


        //$("#outhair").replaceWith(initialHair);
        //$("#outeyes").replaceWith(initialEyes);
        //$("#outnose").replaceWith(initialNose);
        //$("#outlips").replaceWith(initialLips);
        // domtoimage.toBlob(document.getElementById('finalimg'))
       // .then(function(blob) {
        //  window.saveAs(blob, 'my-img.png');
        //$("#outlips").attr("src","");
        //https://stackoverflow.com/questions/47600505/chrome-headless-doesnt-work
        //https://stackoverflow.com/questions/10721884/render-html-to-an-image
       // });
        
     //  var lip = $("#outlips").attr("src");
    //    console.log(lip);
      //  var hair = $("#outhair").attr("src");
    //    mergeImages(['../lips/pink/6.png', '../hair/female9.png'])
    //  .then(b64 => document.querySelector('img').src = b64);
    });


    */
});
