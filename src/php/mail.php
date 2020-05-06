<?php 
  ob_start();
  echo 'Hello';
  header('Access-Control-Allow-Origin: *');
  // $req2_dump = print_r($_POST, TRUE);
  // $f3 = fopen('request.log', 'a');
  //   fwrite($f3, $req2_dump);
  //   fclose($f3);
  $headers = "MIME-Version: 1.0" . PHP_EOL .
      "Content-Type: text/html; charset=utf-8" . PHP_EOL .
      'From: '.$subject.' <'.$to.'>' . PHP_EOL .
      'Reply-To: '.$to.'' . PHP_EOL;
  ini_set("SMTP", "aspmx.l.google.com");
  ini_set("sendmail_from", "mluniak15@gmail.com");
  if(mail('maks120201@mail.ru', 'My Subject', 'Darova', $headers)){
    $req_dump = print_r('success', TRUE);
    $fp = fopen('request.log', 'a');
    fwrite($fp, $req_dump);
    fclose($fp);
  }
  else{
    $req_dump = print_r('ne rabotaet blet', TRUE);
    $fp = fopen('request.log', 'a');
    fwrite($fp, $req_dump);
    fclose($fp);
  }
  if ($_POST['name'] != null && $_POST['email'] != null && $_POST['message'] != null) {
    // $req_dump = print_r('adsadas');
    // $fp = fopen('request.log', 'a');
    // fwrite($fp, $req_dump);
    // fclose($fp);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'mluniak15@gmail.com';
    $from = $email;
    $subject = 'Contact Form Message';
    $message = '<b>Name:</b> '.$name.'<br><b>Email:</b> '.$email.'<p?>'.$message.'</p>';
    // $headers = "From: $from\n";
    // $headers .= 'MIME-Version: 1.0\n';
    // $headers .= 'Content-type: text/html; charset=iso-8859-1\n';
    $headers = "MIME-Version: 1.0" . PHP_EOL .
      "Content-Type: text/html; charset=utf-8" . PHP_EOL .
      'From: '.$subject.' <'.$to.'>' . PHP_EOL .
      'Reply-To: '.$to.'' . PHP_EOL;
    
    // if(mail($to, $subject, $message, $headers)){
    //   $req_dump = print_r('success', TRUE);
    //   $fp = fopen('request.log', 'a');
    //   fwrite($fp, $req_dump);
    //   fclose($fp);
    // }
    // else{
    //   $req_dump = print_r('loh ebanii', TRUE);
    //   $fp = fopen('request.log', 'a');
    //   fwrite($fp, $req_dump);
    //   fclose($fp);
    // }
  }
?>