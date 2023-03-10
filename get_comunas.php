<?php
require_once("connect.php");
$conn = conectarBaseDeDatos();
if (isset($_POST["region_id"])) {
    $region_id = $_POST["region_id"];

    $sql = "SELECT * FROM comunas WHERE region_id = " . $region_id;

    $result = $conn->query($sql);

    // acá se Crea un array con las comunas obtenidas
    $comunas = array();
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $comuna = array(
                "id" => $row["id"],
                "nombre" => $row["nombre"]
            );
            array_push($comunas, $comuna);
        }
    }


    header("Content-Type: application/json");
    echo json_encode($comunas);
} else {
    echo "Error: No se recibió la variable region_id.";
}

// acá se cierra la conexión a la base de datos
$conn->close();

?>