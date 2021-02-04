<?php
ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","465");
$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {
    
    $project_name = trim($_POST["project_name"]);
    $admin_email  = trim($_POST["admin_email"]);
    $form_subject = trim($_POST["form_subject"]);

    // $admin_email = "pi59_lmo@student.ztu.edu.ua";

    foreach ( $_POST as $key => $value ) {
        if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
            $message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
        }
    }
} else if ( $method === 'GET' ) {

    $project_name = trim($_GET["project_name"]);
    $admin_email  = trim($_GET["admin_email"]);
    // $admin_email = "pi59_lmo@student.ztu.edu.ua";
    $form_subject = trim($_GET["form_subject"]);

    foreach ( $_GET as $key => $value ) {
        if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
            $message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
        }
    }
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

// $headers = "MIME-Version: 1.0" . PHP_EOL .
//     "Content-Type: text/html; charset=utf-8" . PHP_EOL .
//     'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
//     'Reply-To: '.$admin_email.'' . PHP_EOL;
$headers = "Content-Type: text/html; charset=utf-8" . PHP_EOL .
$headers .= "From: Teymax@teymax.com\r\n";
$headers .= "Reply-To: alex.ostapenko.teymax@gmail.com\r\n";
$headers .= "Return-Path: alex.ostapenko.teymax@gmail.com\r\n";
$headers .= "CC: sombodyelse@example.com\r\n";
$headers .= "BCC: hidden@example.com\r\n";

// mail($admin_email, adopt($form_subject), $message, $headers );
// mail("alex.ostapenko.teymax@gmail.com", adopt($form_subject), $message, $headers );
// mail("maksim.m@teymax.com", adopt($form_subject), $message, $headers );
// mail("test-wu0xw0blq@srv1.mail-tester.com", adopt($form_subject), $message, $headers );
mail("pi59_lmo@student.ztu.edu.ua", adopt($form_subject), $message, $headers );

