$(document).ready(function() {
  // acá se Obtenienen las regiones desde la base de datos
  $.ajax({
      url: "get_regiones.php",
      type: "GET",
      dataType: "json",
      success: function(data) {
          
          // acá se Agregan las regiones al combobox
          $.each(data, function(index, region) {
              $("#regiones").append("<option value='" + region.id + "'>" + region.nombre + "</option>");
          });
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
      }
  });

  
  $("#regiones").change(function() {
    var region_id = $(this).val();
    $.ajax({
        url: "get_comunas.php",
        method: "POST",
        data: {region_id: region_id},
        dataType: "json",
        success: function(response) {
            var select = $("#comuna");
            select.empty("#comuna");
            $.each(response, function(key, value) {
                select.append("<option value='" + value.id + "'>" + value.nombre + "</option>");
            });
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
});

});
