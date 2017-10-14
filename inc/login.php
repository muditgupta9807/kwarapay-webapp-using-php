<?php include('server.php'); ?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  
  
  
      <link rel="stylesheet" href="../css/loginstyle.css">

  
</head>

<body>
  <body class="align">

  <div class="grid">

    <form action="login.php" method="post" class="form login">

      <header class="login__header">
        <h3 class="login__title">Login</h3>
      </header>

      <div class="login__body">
	  <strong class="main_errors"> <?php include ("errors.php"); ?> </strong>

        <div class="form__field">
          <input type="email" name="email" placeholder="Email" required>
        </div>

        <div class="form__field">
          <input type="password" name="password" placeholder="Password" required>
        </div>

      </div>

      <footer class="login__footer">
        <input type="submit" name="login" value="Login">

        <p><span class="icon icon--info">?</span><a href="#">Forgot Password</a></p>
		
      </footer>
	  <div class="login__bodyend">
	<p>
			Not yet a member? <a href="electricity.php"> <strong class="dlink">Sign up</strong></a>
		</p>
		<div class="login__body">
    </form>

  </div>

</body>
  
  
</body>
</html>