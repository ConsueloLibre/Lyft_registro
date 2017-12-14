$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(1000);
   }, 2000);
});

$(function(){
  $("#btn-1").on("click",function(){
    $("#contenido-1").toggle(2000,function(){
      alert("Ingresa tu País y Número Telefónico");
    });

});

  $("#btn-2").on("click",function(){

    if($(this).val()=="SING UP")
    {
    $("#contenido-2").hide(1000,function(){
      $("#btn-2").val("Mostrar");
    });
    }
  else{
    $("#contenido-2").show(1000,function(){
      $("#btn-2").val("ocultar");
    });
  }
  });

});

$(document).ready(function() {
    $('#modal_button_id').click(function (event) {
        $('#myModal').modal('show')
    });
});
