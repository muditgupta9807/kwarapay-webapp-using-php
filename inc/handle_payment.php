<!DOCTYPE	html	PUBLIC	"-//W3C//DTD	XHTML	1.0	Transitional//EN"		
"http://www.w3.org/TR/xhtml1/DTD/ xhtml1-transitional.dtd"> 
	<html class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop 
websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections
 csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil
 svgclippaths" lang="en"><!--<![endif]--><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Electricity Section</title>
        <meta name="description" content="Set up your online payments and relax knowing your electricity bill payments will be paid automatically, on time, 
		every time.">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">



        <!--<link rel="stylesheet" href="css/vendor/bootstrap.min.css">-->

        <link rel="stylesheet" href="css/all.css">


         <!--[if IE 8]>
            <link rel="stylesheet" type="text/css" href="css/ie8.css">
        <![endif]-->
        <!--[if gte IE 9]>
        <style type="text/css">
            .gradient {
               filter: none;
            }
        </style>
        <![endif]-->

        <!-- Chase Reporting.js -->
        <script src="javascript/Reporting.js" language="Javascript1.2" type="text/javascript"></script>
    <style>
		.no-vid-img{
			display:block;
			height: auto;
			width:100%;
		}
        
    </style><script src="javascript/tagmanagerextensions.js" id="pixelTagExtensionScript" type="text/javascript"></script>
	<script src="javascript/Personalization.js"
	id="personalizationScript" type="text/javascript"></script><script src="electricity.html"></script></head>
	
	
	
			    <style type="text/css">
          body
        {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow-y: auto;
            background: F0F0F0;
        }
        .modal
        {
            display: none;
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: black;
            z-index: 100;
            opacity: 0.8;
            filter: alpha(opacity=60);
            -moz-opacity: 0.8;
            min-height: 100%;
        }
        #divImage
        {
            display: none;
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 20;
            background-color: White;
            height: 600px;
            width: 700px;
            padding: 3px;
            border: solid 0px black;
        }
        * html #divImage
        {
            position: absolute;
        }
        
        .style358
        {
            width: 26px;
            text-align: left;
        }
        .style484
        {
            height: 19px;
            text-align: left;
        }
        .style488
        {
            height: 87%;
            width: 100%;
        }
        .style489
        {
            color: #FFFFFF;
            font-weight: bold;
            font-size: xx-large;
            background-color: #3A84BA;
        }
        .style549
        {
            font-size: large;
            color: #0000CC;
        }
        .style565
        {
            text-align: center;
            font-size: xx-small;
        }
        .style569
        {
            width: 1152px;
        }
        #I1
        {
            height: 517px;
            width: 776px;
        }
        .style562
        {
            font-size: x-small;
            color: #000000;
        }
        .style563
        {
            text-align: left;
        }
        .style481
        {
            color: #FF0000;
        }
        .style566
        {
            background-color: #FFFFFF;
            font-size: medium;
            font-weight: bold;
        }
        .style564
        {
            text-align: left;
            font-size: medium;
        }
        .style567
        {
            background-color: #FFFFFF;
            font-size: medium;
        }
        .style477
        {
            width: 139px;
        }
        .style479
        {
            height: 15px;
            width: 139px;
        }
        .style482
        {
            font-weight: bold;
            text-align: center;
            font-size: small;
            height: 15px;
        }
        .style472
        {
            font-weight: bold;
            text-align: left;
            font-size: small;
            height: 15px;
        }
        .style473
        {
            font-weight: bold;
            text-align: center;
            font-size: small;
            height: 30px;
        }
    .style475
    {
        color: #333399;
        font-weight: bold;
        background-color: #F0F0F0;
    }
        .style570
        {
            background-color: #F0F0F0;
        }
        .style467
        {
            color: #FFFFFF;
            font-weight: bold;
            background-color: #F0F0F0;
        }
        .style575
        {
            width: 100%;
        }
        .style576
        {
            color: #000000;
        }
        .style5772
        {
            background-color: #66CCFF;
            font-weight: bold;
        }
        </style>
        
         
      

   
    <style type="text/css">
        .style1
        {
            background-color: #FFFFFF;
        }
        .style2
        {
            background-color: #000000;
        }
        .style3
        {
            font-weight: bold;
            background-color: #000000;
        }
    </style>
	    
    <body class="product-page online-bill-pay-section autoplay-capabale">
	
<p class="product-sub-title"> We care about your happiness </p>
	
        <div class="menu-wrapper">
                    <div class="wrapper">
					

        
		
	<?php	# Script 2.2 - handle_payment.php
		//	This	is	the	payment	page	for	the	site,it would display and handle the transaction 
	$page_title	=	'Payment Submit'; 
	
	
	// Create a shorthand for the form data:
	$mt_number = $_REQUEST['mt_number'];
 $amt = $_REQUEST['amt'];
 $ph_number = $_REQUEST['ph_number'];
  
  //	Create	the	activation	code:
	$a	=	md5(uniqid(rand(	),	true));
	
	
	// Validate the meter number:
 if (!empty($_REQUEST['mt_number'])) {
$mt_number = $_REQUEST['mt_number'];
} else {
 $mt_number = NULL;
 echo '<p class="error">You forgot to enter your meter number!</p></br>';
 }
 
 // Validate the amount:
 if (!empty($_REQUEST['acc'])) {
$acc = $_REQUEST['acc'];
} else {
 $acc = NULL;
 echo '<p class="error">You did not enter any amount!</p></br>';
 }
 
 // Validate the phone number:
 if (!empty($_REQUEST['ph_number'])) {
$password1 = $_REQUEST['ph_number'];
} else {
 $ph_number = NULL;
 echo '<p class="error">Pls enter your active phone number</p></br>';
 }
 
 
 
	// If everything is OK, print the message; the submitted information:
 	if ($mt_number && $acc && $ph_number) {
	echo "<p> Thank you for paying <b>$amt naira.</b> Your transaction code is <b>$a.</b> A confirmation message will be sent to <b>$ph_number</b>." 
	} else { // Missing form value.
 echo '<p class="error">Fill payment details.</p>';
 }
	
	include	('footer.html');	//	Include	the	HTML	footer.
	exit(	);	//	Stop	the	page. 
	
	?>
	</div>
	
		</div>
	</body>
</html>