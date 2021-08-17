<?php 
switch ($_SERVER['SCRIPT_NAME']) {
	case '/js-validation/controller/login-form.php':
		// code...
	$CURRENT_PAGE ="Login";
	$PAGE_TITTLE ="Login Page";
		break;
	case '/js-validation/controller/registration-form.php':
		// code...
	$CURRENT_PAGE ="Registration";
	$PAGE_TITTLE ="Registration Page";
		break;
		case '/js-validation/controller/home-page.php':
		// code...
	$CURRENT_PAGE ="Home";
	$PAGE_TITTLE ="Home Page";
		break;
		case '/js-validation/controller/add-to-cart.php':
		// code...
	
	
	default:
		// code...
		break;
}

?>