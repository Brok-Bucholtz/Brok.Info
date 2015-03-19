<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="crt" %>

<!--
      _   _          _   _           _ 
     | | | |   ___  | | | |   ___   | |
     | |_| |  / _ \ | | | |  / _ \  | |
     |  _  | |  __/ | | | | | (_) | |_|
     |_| |_|  \___| |_| |_|  \___/  (_)
--------------------------------------------
My name is Brok Bucholtz.  I see you're interested in the code.
If you want to know more about the work that went into this site, check out brok.info/code

-->
<!DOCTYPE html>
<html xmlns:c="http://java.sun.com/jsp/jstl/core"  
	xmlns:spring="http://www.springframework.org/tags" 
	xmlns:jsp="http://java.sun.com/JSP/Page"
	lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Brok.Info</title>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/global.css">
	<tilesx:useAttribute id="cssList" name="css" classname="java.util.List" />
	<crt:forEach var="cssItem" items="${cssList}">
		<tiles:insertAttribute value="${cssItem}" flush="true" />
	</crt:forEach>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
	<div class="container">
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-main-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="/">
						<div class="brand-name">&#60;Brok Bucholtz /&#62;</div>
					</a>
				</div>
				<div class="collapse navbar-collapse"  id="navbar-main-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Brok<span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><a href="/resume/">Resume</a></li>
								<li class="divider"></li>
								<li><a href="/resume/work_experience">Work Experience</a></li>
								<li><a href="/resume/coworkers">Co-Workers</a></li>
								<li><a href="/resume/education">Education</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Projects<span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><a href="/project/agilerails"><img src="http://developer.android.com/images/brand/Android_Robot_100.png" alt="Android Phone Robot">AgileRails</a></li>
								<li><a href="/project/steam_badger"><img src="/img/cSharpIcon.png" alt="C# Logo">Steam Badger</a></li>
								<li><a href="/project/this_site"><img src="http://png-4.findicons.com/files/icons/1008/quiet/256/java.png" alt="Java Logo">This Site</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Social<span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><a href="https://www.linkedin.com/in/brokb" target="_blank"><img src="/img/LinkedIn-Thumbnail.png" alt="LinkedIn Logo">LinkedIn</a></li>
								<li><a href="https://plus.google.com/+BrokB/" target="_blank"><img src="https://ssl.gstatic.com/images/icons/gplus-16.png" alt="Google+ Logo">Google+</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container-fluid">
			<tiles:insertAttribute name="body" />
		</div>
	</div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
	<tilesx:useAttribute id="jsList" name="js" classname="java.util.List" />
	<crt:forEach var="jsItem" items="${jsList}">
		<tiles:insertAttribute value="${jsItem}" flush="true" />
	</crt:forEach>
  </body>
</html>