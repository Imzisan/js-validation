<?php 
 include "../controller/config.php";
	session_start();
	$userId = isset($_SESSION['uid']) ? $_SESSION['uid'] : ""; 
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<?php include 'tittle.php';?>
	
</head>
<body>
	
		
	<hr style="display: block; width: 100%;">

	<h1><?php include 'top-heading.php';?>
	<h2>Welcome !</h2>

	
	
	<!-- <button onclick="location.href='../controller/shop-products.php'">Shop Products</button> -->
	<br><br>
	<!-- <span><p style="color:green;text-align:center;background: lightgreen;">Click here to <a href="notice.php">View notice</a></p></span> -->
	<!-- <?php 
	 include 'logout-include.php' ?> -->
	 <?php 
	 include 'footer.php' ?>
	<!-- <p><a href="../controller/changePassword.php">Change Password</a></p> -->
	</h1>

</body>
</html>