<?php	
	session_start();

	$usercomments="";
	$first_name = "";
	$last_name = "";
	$account_number = "";
	$email = "";
	$mobile_number = "";
	$errors = array();
	$progresses = array();

	//connect to the database
	$db = mysqli_connect('localhost','root','','kwarapaydb');

	// if the register button is clicked
	if (isset($_POST['electricity'])) {
	$first_name = mysqli_real_escape_string($db,$_POST['first_name']);
	$last_name = mysqli_real_escape_string($db,$_POST['last_name']);
	$account_number = mysqli_real_escape_string($db,$_POST['accountnumber']);
	$email = mysqli_real_escape_string($db,$_POST['email']);
	$mobile_number = mysqli_real_escape_string($db,$_POST['mobilenumber']);
	$password_1 = mysqli_real_escape_string($db,$_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db,$_POST['password_2']);

	


	// ensure that form fields are filled properly
	if (empty($first_name)) {
		array_push($errors, "First name is required");
	}
		if (empty($last_name)) {
		array_push($errors, "Both names are required");
	}
	if (empty($account_number)) {
		array_push($errors, "Please fill in your account number");
	}
		if (empty($mobile_number)) {
		array_push($errors,"Please fill in your mobile number");
	}
	if (empty($email)) {
		array_push($errors, "Email is required");
	}
	if (empty($password_1)) {
		array_push($errors, "Password is required");
	}
	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}

	// if there are no errors, save user to database
	if (count($errors) == 0) {
		 $password = md5($password_1); //encrypt password before storing in database (security)
		 
		 
		 //ensure email has not been taken by another user
		 $sql = "SELECT * FROM kwarapayreg WHERE email='$email'";
		 $result = mysqli_query($db, $sql);
		 $resultcheck=mysqli_num_rows($result);
		 
		 if ( $resultcheck > 0){
			  array_push($errors, "Email no longer available");
			  header ("Location: electricity.php?signup=usertaken");
			  exit();
		 }else{
			//proceed to insertion of data
		$sql = "INSERT INTO kwarapayreg (first_name, last_name, account_number, mobile_number, email, password) 
			VALUES ('$first_name', '$last_name', '$account_number', '$mobile_number','$email', '$password')";
		mysqli_query($db, $sql);
		$_SESSION['first_name'] = $first_name;
		$_SESSION['success'] = "You are now logged in";
		header('location: payment.php'); //direct to payment page
		
		 }
		 
		 
		
	} 
	
	
}

	// log user in from login page
	if (isset($_POST['login'])) {
	$email = mysqli_real_escape_string($db,$_POST['email']);
	$password = mysqli_real_escape_string($db,$_POST['password']);

	// ensure that form fields are filled properly
	if (empty($email)) {
		array_push($errors, "Email is required");
	}
	if (empty($password)) {
		array_push($errors, "Password is required");
	}
	if (count($errors) == 0) {
		$password = md5($password); // encrypt password before comparing with that from database
		$query = "SELECT * FROM kwarapayreg WHERE email='$email' AND password='$password'";
		$result = mysqli_query($db, $query);
		if (mysqli_num_rows($result) == 1) {
			
			// log user in
			
		$_SESSION['email'] = $email;
		$_SESSION['success'] = "You are now logged in";
		header('location: ../index.php'); //redirect to home page
		}else{
			array_push($errors, "wrong username/password combination");
			}
		}
				
	}

	//contact us
	//when not logged in (for the public)
	
	if (isset($_POST['contactus'])) {
	$usercomments = mysqli_real_escape_string($db,$_POST['usercomments']);
	$email = mysqli_real_escape_string($db,$_POST['email']);
	// ensure that comment fields are filled 
	if (empty($email)) {
		array_push($errors, "Email is required");
	}
	if (empty($usercomments)) {
		array_push($errors, "Please fill in the comment box");
	}
	// if no errors found
	if (count($errors) == 0) {
			$sql = "INSERT INTO kwarapaycomments (email, usercomments) 
			VALUES ('$email', '$usercomments',)";
			mysqli_query($db, $sql);
			
			array_push($progresses, "<strong>Thank you for your kind contribution. Your satisfaction is our priority.</strong>");
			
	}
	}
	
	
	// logout
	if (isset($_POST['logout'])) {
		session_destroy();
		unset($_SESSION['email']);
		header('location:../index.php');
	
}
	
?>