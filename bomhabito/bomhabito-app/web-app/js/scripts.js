//- página de agradecimento
//- inicialmente a lista de ícones está posicionada muito para a direita causando impressão de movimento
//- feed/delicious
//- background infinito
//- econtrar textos de pessoas respeitadas

function go_to_slide(index){
   $('#carousel').carousel(index)
   return false
}

function set_infinity_background(index){
  $("#infinity").removeClass().addClass("infinity-bg" + index)
}

function change_opinion(index){
     var divs = $("#bottom-center-invisible").find(".opinion").removeClass("hide").addClass("hide");
     var divs = $("#respected-guy-opinion" + index).removeClass("hide");
}

$(document).ready(function(){
  init_carousel()
  init_slides()
  init_form()
});

function is_email(){
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test($("#email").val())
}

function init_carousel(){
  $('#carousel').carousel({
    interval: 5000
  }).bind('slid', function() {
        var index = $(this).find(".active").attr("id")
        var divs = $("#slide-links")
        select_icon(index, divs)
        set_infinity_background(index)
        change_opinion(index)
  })
}

function init_slides(){
  $("#slide0").click(function(){   
    go_to_slide(0)
  })
  $("#slide1").click(function(){   
    go_to_slide(1)
  })
  $("#slide2").click(function(){   
   go_to_slide(2)
  })
  $("#slide3").click(function(){   
   go_to_slide(3)
  })
}

function select_icon(index, divs){
  divs.find("div.slide-link").removeClass("selected").addClass("unselected")
  divs.find("#slide" + index).addClass("selected")
}

function init_form(){
  $(".start").bind('click', function(){
    if(is_email())
      $("#form").submit()
    else
      alert("E-mail inválido! Tente novamente.")
  })

  $("#email").focusout(function() {
    if(!is_email())
      $("#email").attr('value', '')
  })
}