$(document).ready(function(){
    //Activacion de ToolTips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    //Funcionalidad Boton sidebar
    var sidebar = $(".sidebar");
    var contenido = $("#contenedor");

    $(".boton-sidebar").on("click",function(){
        contenido.toggle("slide",{direction: "right"});
        sidebar.toggle("slide",{direction: "left"});
    });

    //Cambio de tamaños dinámico
    $(window).on("resize", function() {
        if ($(window).width() > 680) {
            sidebar.show();
            contenido.show();
        } else {
            sidebar.hide();
            contenido.show();
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
});