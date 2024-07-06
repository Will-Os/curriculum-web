$(document).ready(function(){
    //Activacion de ToolTips
    var metodoTooltip = navigator.userAgentData.mobile ? "click":"hover";

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl,{trigger: metodoTooltip}));
    var modoOscuro = false;

    //Oculta todos los tooltips despues de dos segundos si es mobile
    if(navigator.userAgentData.mobile){
        tooltipTriggerList.forEach(elemento => {
            elemento.addEventListener('shown.bs.tooltip', function() {
                tooltip = bootstrap.Tooltip.getInstance(elemento);
                setTimeout(() => {tooltip.hide();}, 1500);
            });
        });
    }

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
            contenido.show();
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

        var tooltip = bootstrap.Tooltip.getInstance(this);
        tooltip.setContent({ '.tooltip-inner': "¡Correo Copiado!" });

        setTimeout(function(){
            tooltip.hide();
            tooltip.setContent({ '.tooltip-inner': "Copiar en el Portapapeles" });
        },2000);
    });

    //Modo Oscuro
    $(".boton-modo").on("click",function(){
        if(modoOscuro){
            $("html").css("--color-letra-contenido","#212529");
            $("html").css("--color-fondo-contenido","#efefef");
            $("html").css("--color-borde-contenido","#500452c9");
            $("html").css("--color-fondo-sidebar","#b4a7d6");
            $(".boton-modo").css("background-color","#303030");
            $(".boton-modo").css("color","#efefef");
            $(".bi-brightness-high-fill").addClass("bi-moon-stars-fill");
            $(".bi-brightness-high-fill").removeClass("bi-brightness-high-fill");
            modoOscuro = false;
        }else{
            $("html").css("--color-letra-contenido","#efefef");
            $("html").css("--color-fondo-contenido","#303030");
            $("html").css("--color-borde-contenido","#efefef");
            $("html").css("--color-fondo-sidebar","#3e2f4896");
            $(".boton-modo").css("background-color","#efefef");
            $(".boton-modo").css("color","#303030");
            $(".bi-moon-stars-fill").addClass("bi-brightness-high-fill");
            $(".bi-moon-stars-fill").removeClass("bi-moon-stars-fill");
            modoOscuro = true;
        }
    })
});