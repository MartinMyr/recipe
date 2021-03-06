var recipes = [];

// fetches json recipes and ingredients array.
fetch("recipes.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (recipesJson) {
        recipes = recipesJson;
    });


var user = "test";
var password = "password";


$(document).ready(function () {
    
    status();
    addToBuy();
    
    function status(){
        if (sessionStorage.ourUser != null) {
            showMemberPage();
        } else {
            showStartPage();
        }
    };


    $("#login").click(function () {
        if ($("#username").val() == user && $("#password").val() == password) {
            sessionStorage.ourUser = user;
             showMemberPage(); 
        }
    });

    $("#logout").click(function () {
        sessionStorage.removeItem("ourUser");
        window.location.href = "https://www.google.com";
        
        // location.reload();
        showStartPage();

    });
    
    function recept(){

        pepparkakor();
        julskinka();
        janson();
        kal();
        kotbullar();
        prinskorv();
        risalamalta();
        sill();
        rodbetssallad();
        }

    function showMemberPage() {
        $("#userloggedin").show();
        $("#submit").hide();
        $("#wlcmLogin").hide();
        $("#username").hide();
        $("#password").hide(); 
        $("#linkRecepies").show();
        $("#linkIngredients").show();
        $("#cardcontainer1").show();
        $("#cardcontainer2").show();
        $("#logout").show();
        $("#wlcm").show();
        recept();
        compareIngrediens();
        loopAlphabet();
        
    };

    function loopAlphabet(){

        var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];
        
        $.each(alphabet, function(i, val){
            $(".pagination").append('<class="page-item"><a class="page-link" href="#'+val+'">' + val + '</a></li>' );
        });
      };

    function showStartPage() {
        $("#logout").hide();
        $("#wlcm").hide();
        $("#cardcontainer1").hide();
        $("#cardcontainer2").hide();
        $("#linkRecepies").hide();
        $("#linkIngredients").hide();
        $("#banner").show();
        $("#wlcmLogin").show();
        $("#userloggedin").hide();
     };
    

        //Här är compare funktionen i Ingredienser
        function compareIngrediens(){
        var lista = {};
        for(var temp of recipes) {
        for(value of temp.ingrediens) {
        if(lista[value]) lista[value]++;
        else lista[value] = 1;
        }
        }
        $("#main").append("<ul></ul>");
        for(var key in lista) {
        $("#main ul").append("<li>" + key + " " + lista[key] + "x" + "</li>");
        }
        };
        

//Adderar till inköpslistan
$(".addPepparkakor").click(function(){
    pepparkakor();
});
$(".addJulskinka").click(function(){
    julskinka();
});
$(".addJanson").click(function(){
    janson();
});
$(".addKottbullar").click(function(){
    kotbullar();
});
$(".addKal").click(function(){
    kal();
});
$(".addRodbetssallad").click(function(){
    rödbetssallad();
});
$(".addSill").click(function(){
    sill();
});
$(".addPrinskorv").click(function(){
    prinskorv();
});
$(".addRisalamalta").click(function(){
    risalamalta();
});



function julskinka(){

    $.each(recipes, function(i, val){
        if(val.recept === "Julskinka" ){
            $("#h1julLoop").append("<h1>" + val.recept  + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#julskinkaLoop").append("<li>" + val  + "</li>" );
            $(".addJulskinka").hide();
        });
        }
        $("#julskinkaLoop").on('dblclick', 'li', function() {
            var $entry = $(this);
            val.ingrediens.splice($entry.index(), 1);
            $entry.remove();
            
       });
    })
};

function janson(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "janson" ){
            $("#jansonLoop").append("<h1>" + val.recept + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#jansonLoop").append("<li>" + val  + "</li>" );
            $("#jansonLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addJanson").hide();
            });
        }    
        
    })
};
function kotbullar(){
        
    $.each(recipes, function(i, val){
        if(val.recept === "köttbullar" ){
            $("#kottbullarLoop").append("<h1>" + val.recept  + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#kottbullarLoop").append("<li>" + val  + "</li>" );
            $("#kottbullarLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addKöttbullar").hide();
            });
        }  
    })
};
function kal(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "kål" ){
            $("#kalLoop").append("<h1>" + val.recept + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#kalLoop").append("<li>" + val  + "</li>" );
            $("#kalLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addKal").hide();
            });
        }  
    })
}
function rodbetssallad(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "rödbetssallad" ){
            $("#rödbetssallad").append("<h1>" + val.recept  + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#rödbetssallad").append("<li>" + val  + "</li>" );
            $("#rödbetssallad").append("<button>" + "Delete"  + "</button>" );
            $(".addRödbetssallad").hide();
            });
        }  
    })
}
function sill(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "Sill" ){
            $("#h1sillLoop").append("<h1>" + val.recept + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#sillLoop").append("<li>" + val  + "</li>" );
            $(".addSill").hide();
            });
        } 
        $("#sillLoop").on('dblclick', 'li', function() {
            var $entry = $(this);
            val.ingrediens.splice($entry.index(), 1);
            $entry.remove();
            
       }); 
    })
}
function prinskorv(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "prinskorv" ){
            $("#prinskorvLoop").append("<h1>" + val.recept  + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#prinskorvLoop").append("<li>" + val  + "</li>" );
            $("#prinskorvLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addPrinskorv").hide();
            });
        }  
    })
}
function risalamalta(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "risalamalta" ){
            $("#risalamaltaLoop").append("<h1>" + val.recept  + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#risalamaltaLoop").append("<li>" + val  + "</li>" );
            $("#risalamaltaLoop").append("<button class='deleteItem'>" + "Delete"  + "</button>" );
            $(".addRisalamalta").hide();
            });
        }  
    })
}

function pepparkakor(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "Pepparkakor" ){
            $("#h1peppLoop").append("<h1>" + val.recept  + "</h1>" );
            $.each(val.ingrediens, function(i, val){
            $("#pepparkakorLoop").append("<li>" + val  + "</li>" );
            $(".addPepparkakor").hide();
            });
        }  
        $("#pepparkakorLoop").on('dblclick', 'li', function() {
            var $entry = $(this);
            val.ingrediens.splice($entry.index(), 1);
            $entry.remove();
            
       });
    })
}

    function remove(){
        $("#sillLoop").on('dblclick', 'li', function() {
            var $entry = $(this);
            val.ingrediens.splice($entry.index(), 1);
            $entry.remove();
            console.log("radera klick")
        });
    }

    function addToBuy(){
        $(".handlaSill").click(function(){
            $( "#recipecontainer" ).empty();
            $("#recipecontainer").append("<h1 id ='h1sillLoop'>" + "</h1>" );
            $("#recipecontainer").append("<ul id ='sillLoop'>" + "</ul>" );
            sill();
            $("#sillLoop").append("<a href='sill.html' class='btn btn-primary handlaSill' >Tillbaka" + "</a>" );
           remove();

          
           
        });

        $(".handlaPepparkakor").click(function(){
            $( "#recipecontainer" ).empty();
            $("#recipecontainer").append("<h1 id ='h1peppLoop'>" + "</h1>" );
            $("#recipecontainer").append("<ul id ='pepparkakorLoop'>" + "</ul>" );
            pepparkakor();
            $("#pepparkakorLoop").append("<a href='pepparkakor.html' class='btn btn-primary handlaPepparkakor' >Tillbaka" + "</a>" );
        });
        $(".handlaJulskinka").click(function(){
            $( "#recipecontainer" ).empty();
            $("#recipecontainer").append("<h1 id ='h1julLoop'>" + "</h1>" );
            $("#recipecontainer").append("<ul id ='julskinkaLoop'>" + "</ul>" );
            julskinka();
            $("#julskinkaLoop").append("<a href='julskinka.html' class='btn btn-primary handlaJulskinka' >Tillbaka" + "</a>" );
        });  
    }


});
