<?php

require_once('connect.php');

$conn = conectarBaseDeDatos();


$sql = "SELECT id, nombre FROM candidatos";
$resultado = $conn->query($sql);


$candidatos = array();
while ($row = $resultado->fetch_assoc()) {
  $candidatos[] = $row;
}


header("Content-Type: application/json");
echo json_encode($candidatos);


$conn->close();
?>