<?php

require_once('connect.php');
$conn = conectarBaseDeDatos();

// acá se consultan todas las regiones en la tabla "regiones"
$sql = "SELECT id, nombre FROM regiones";
$resultado = $conn->query($sql);

// acá se almacenan las regiones en un array asociativo
$regiones = array();
while ($row = $resultado->fetch_assoc()) {
  $regiones[] = $row;
}

// acá se Devuelven las regiones en formato JSON
header("Content-Type: application/json");
echo json_encode($regiones);

// acá se Cierra la conexión a la base de datos
$conn->close();
?>
