<?php
	if(isset($_POST['submit'])){
		$name=$_POST['to'];
        $to=$_POST['email'];
        $surname=$_POST['from'];
		$amount=$_POST['amount'];
		$from='Web Development Intern';
		$email='weirdika08@gmail.com';
		$subject='Payment Confirmation';
		$message="Hi ".$name." ".$surname.","."\n"."Thankyou for your recent payment for the amount ".$amount." .\nThis is the confirmation mail that your donation has been successfully received."."\n\n"."From: ".$from."\n"."Thankyou !"."\n";
		$headers="From: noreply@".$email;
		if(mail($to, $subject, $message, $headers)){
			header("Location: success.html");
		}
		else{
			header("Location: error.html");
		}
	}
?>

