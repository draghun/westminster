<?php 
    $to = "westminstermmg@gmail.com"; 
    $from = $_POST['Email'];
    $name = $_POST['Name'];
    $subject = "Contact";
    $subject2 = "Copy of your form submission";
    $message = $name  . " wrote the following:" . "\n\n" . $_POST['Message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['Message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); 
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
?>