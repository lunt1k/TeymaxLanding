<?php 
  if (isset($_POST['name'] && $_POST['email'] && $_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'mluniak15@gmail.com';
    $from = $email;
    $subject = 'Contact Form Message';
    $message = '<b>Name:</b> '.$name '<br><b>Email:</b> '.$email '<p?>'.$message'</p>';
    $headers = 'From: $from\n';
    $headers .= 'MIME-Version: 1.0\n';
    $headers .= 'Content-type: text/html; charset=iso-8859-1\n';
    
    if(mail($to, $subject, $message)){
      echo 'success';
    }
    else{
      echo 'The server failed to send the message. Please try again later.'
    }
  }
?>