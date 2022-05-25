<?php

if(isset($_POST['submit'])) {
$mailto = "arikeadeoluwaseun@gmail.com";
$name = $_POST['name'];
$fromEmail = $_POST['email'];

$subject2 = "Confirmation: Message was submitted successfully | WebDesign";

$message = "Client Name: ". $name . "\n" . "Email: " . $fromEmail . "\n\n" . "Client Message: " . "\n" . $_POST['message'];

$message2 = "Dear" . $name . "\n" . "Thank you for contacting us.". "\n\n" . "You submitted the following message: " . "\n" . $_POST['message'] . "\n\n" . "Regards," . "\n" . "- Push Foundation Founder";

$headers = "From:" . $fromEmail;
$headers2 = "From:" . $mailto;

$result1 = mail($mailto, $message, $headers);
$result2 =  mail($fromEmail,$subject2,  $message2, $headers2);

if ($result1 && $result2) {
    $success = "Your message was sent successfully!";
} else {
    $failed = "Sorry! Message was not successful, Tru again Later!"
}

}
?>