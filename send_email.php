<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'support@airportcontacts.com'; // Replace with your domain email address
    $subject = 'New Contact Form Submission';
    $message = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send email.';
    }
}
?>
