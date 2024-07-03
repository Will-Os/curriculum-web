$(document).ready(function(){
    //Activacion de ToolTips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    var modoOscuro = false;

    //Funcionalidad Boton sidebar
    var sidebar = $(".sidebar");
    var contenido = $("#contenedor");

    $(".boton-sidebar").on("click",function(){
        sidebar.toggle("slide",{direction: "left"},"fast");
        if($(window).width() < 680){
            contenido.toggle("slide",{direction: "down"},"fast");
        }
    });

    //Cambio de tamaños dinámico
    $(window).on("resize", function() {
        if ($(window).width() > 680) {
            contenido.show();
        } else{
            sidebar.hide();
        }
    });

    //Copiar al portapapeles
    $(".mail").on("click",function(){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(".mail").text()).select();
        document.execCommand("copy");
        $temp.remove();
        var nombreTooltip = $(".mail").attr("aria-describedby");
        $("#"+nombreTooltip).find(".tooltip-inner").text("¡Correo Copiado!");
    });

    //Modo Oscuro
    $(".boton-modo").on("click",function(){
        if(modoOscuro){
            $("body").css("background-color","#efefef");
            $(".contenido").css("color","#212529");
            $(".delimitador").css("border-color","#500452c9");
            $(".boton-modo").css("background-color","#303030");
            $(".boton-modo").css("color","#efefef");
            $(".bi-brightness-high-fill").addClass("bi-moon-stars-fill");
            $(".bi-brightness-high-fill").removeClass("bi-brightness-high-fill");
            modoOscuro = false;
        }else{
            $("body").css("background-color","#303030");
            $(".contenido").css("color","#efefef");
            $(".delimitador").css("border-color","#efefef");
            $(".boton-modo").css("background-color","#efefef");
            $(".boton-modo").css("color","#303030");
            $(".bi-moon-stars-fill").addClass("bi-brightness-high-fill");
            $(".bi-moon-stars-fill").removeClass("bi-moon-stars-fill");
            modoOscuro = true;
        }
    })
});