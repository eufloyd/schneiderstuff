//- página de agradecimento
//- inicialmente a lista de ícones está posicionada muito para a direita causando impressão de movimento
//- feed/delicious
//- background infinito
//- econtrar textos de pessoas respeitadas

function go_to_slide(index){
   $('#carousel').carousel(index);
   return false
}

function set_infinity_background(index){
  $("#infinity").removeClass();
  $("#infinity").addClass("infinity-bg" + index);
}

function change_opinion(index){
     var divs = $("#bottom-center-invisible").find(".opinion").removeClass("hide").addClass("hide");
     var divs = $("#respected-guy-opinion" + index).removeClass("hide");
}

//bindingss
$(document).ready(function(){
  $('#carousel').carousel({
    interval: 5000
  }).bind('slid', function() {
        var index = $(this).find(".active").attr("id");
        var divs = $("#slide-links");    
        divs.find("div.slide-link").removeClass("selected")
          .addClass("unselected");
        divs.find("#slide" + index).addClass("selected");
        set_infinity_background(index);
        change_opinion(index);
  });
  $("#slide0").click(function(){   
    go_to_slide(0);
  });
  $("#slide1").click(function(){   
    go_to_slide(1);
  });
  $("#slide2").click(function(){   
   go_to_slide(2);
  });
  $("#slide3").click(function(){   
   go_to_slide(3);
  }); 
});