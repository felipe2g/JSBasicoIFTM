<?php
    $user = $_POST["user"];
    $password = $_POST["password"];
    $record = array("user"=>$user,"pwd"=>$password);

    $registros = json_decode(file_get_contents("json/users.json", true));
    array_push($registros["usuarios"], $record);
    file_put_contents("json/users.json", json_encode($registros));
    header("Location success.html");
?>