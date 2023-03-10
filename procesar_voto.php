<?php
   require_once('connect.php');
   $conn = conectarBaseDeDatos();
   $nombre_completo = $_POST['nombre_completo'];
   $alias = $_POST['alias'];
   $rut = $_POST['rut'];
   $email = $_POST['email'];
   $region = $_POST['region'];
   $comuna = $_POST['comuna'];
   $candidato = $_POST['candidato'];
   $como_se_entero = implode(", ", $_POST['como_se_entero']); 
   $errores = array();
   
   if (count($errores) == 0) {
       $sql = "INSERT INTO votos (id, nombre_completo, alias, rut, email, regiones_id, comunas_id, candidato, como_se_entero) 
               VALUES (NULL, '$nombre_completo', '$alias', '$rut', '$email', '$region', '$comuna', '$candidato', '$como_se_entero')";
   
       $resultado = mysqli_query($conn, $sql);
   
       if ($resultado) {

        echo "<script>window.location = 'index.html';</script>";
    } else {
        echo "Ha ocurrido un error al insertar los datos en la base de datos.";
    }
    
   }
?>
