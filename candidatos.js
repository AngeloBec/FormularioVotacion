$(document).ready(function() {
    
    $.ajax({
        url: "get_candidatos.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            
            
            $.each(data, function(index, region) {
                $("#candidatos").append("<option value='" + region.id + "'>" + region.nombre + "</option>");
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
  
  });