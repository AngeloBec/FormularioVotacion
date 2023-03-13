<?php

// Conexión a la base de datos
require_once("connect.php");
$conn = conectarBaseDeDatos();

if (!$conn) {
  die('Error de conexión: ' . mysqli_connect_error());
}


$rut = $_POST['rut'];

// Consulta para verificar si el RUT ya está en la base de datos
$sql = "SELECT COUNT(*) FROM votos WHERE rut = '$rut'";
$resultado = mysqli_query($conn, $sql);

if (!$resultado) {
  die('Error al consultar la base de datos: ' . mysqli_error($conn));
}

// Verificar si el RUT ya está en la base de datos
if (mysqli_fetch_array($resultado)[0] > 0) {
  echo "duplicado";
} else {
  echo "OK";
}
