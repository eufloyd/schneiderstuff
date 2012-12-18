<!doctype html>
	<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
	<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
	<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
	<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Bom hábito</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width">
	
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="fonts/fonts.css">
	<link rel="stylesheet" href="css/estilo.css">
	<script src="js/libs/modernizr-2.5.3.min.js"></script>
	<!-- <script src="js/bootstrap.min.js"></script> -->
</head>

<body>
<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
	<div class="vertical-aligner">
	<header>
		<div class="container header">
		  	<a href="${request.contextPath}"><div class="logo"><img src="img/logo.jpg"/></div></a><div class="slogan">Melhore seus hábitos e viva melhor</div>
		</div>
	</header>

	<div role="main" class="container middle">
	<div class="top-detail"></div>
	<div class="conteudo-middle" id="topDiv" >
		<div class="row-fluid ">
			<div class="span7 up">
				<legend style="border-width:0px" class="text-title checked">Organize-se</legend>
				<legend style="border-width:0px" class="text-title checked">Complete suas tarefas</legend>
				<legend style="border-width:0px" class="text-title checked">Seja mais Saudável</legend>
				<legend style="border-width:0px" class="text-title checked">Viva Melhor</legend>
				<legend style="border-width:0px" class="text-title unchecked">Cadastre-se</legend>
			</div> <!-- Fim do span-->
			<div class="span5 customSpam5 up">
				<form class="form-horizontal cadastre-se" style="margin-top:50px;">
				  <fieldset>
					<div class="control-group">
						<g:if test="${saved}">
							<legend style="margin-left: -18px"  class="cadastre-se-title">Obrigado! Logo entraremos em contato com você!</legend>
						</g:if>
						<g:else>
							<legend class="cadastre-se-title">Comece agora:</legend>
						</g:else>
						<div class="controls form-signup">
          					<g:if test="${flash.error && !saved}">
								<div class="alert-info">${flash.error}</div>
          					</g:if>
          					<g:if test="${!saved}">
								<div class="input-prepend form-name">
								  <input class="span4" id="inputIcon" type="text" name="email" value="Qual é o seu e-mail?">
								</div>
								<div class="input-prepend form-name">
								 	<button class="btn btn-warning signup-submit beauty-text" href="#">Melhorar meus hábitos agora!</button>
								</div>
							</g:if>
							<input type="hidden" name="submit" value="true">
						</div>
					</div>
				  </fieldset>
				</form>
			</div> <!-- Fim do span-->
		</div> <!-- Fim do row-fluid-->
	</div>
	<div class="bottom-detail"></div>
	<div class="benefits-list">
		<div class="span12" style="margin-top: 20px;">
			<div class="clock left">
				<div class="benefit-content" style="width: 254px;">
					<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px;" class="text-title short">Tenha mais tempo</legend>
					<div class="benefit-span">O Bom Hábito te ajuda a ter mais tempo através da organização das suas tarefas diárias. <a id="#inputIcon" class="more" href="#">Saiba mais...</a></div>
				</div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div style="width: 350px; height: 100%; float: right; margin-right: 50px;">
				<div style="width:60%; float:left; height: 100px">
					<legend style="border-width:0px; margin-left: -26px; margin-bottom: 10px;" class="text-title short">Durma mais cedo</legend>
					<div class="benefit-span" style="text-align: right;">Durma mais cedo e tenha um dia mais ativo e feliz. <a id="#inputIcon" class="more" href="#" >Saiba mais...</a></div> 
				</div>
				<div style="width:40%; float:left; text-align: center;"><img style="margin-left: 20px;" src="img/bed.png"></div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div class="read-books" style="margin-left: 32px;">
				<div class="benefit-content" style="width: 290px; margin-left: 118px;">
					<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px;" class="text-title short">Leia livros até o final</legend>
					<div class="benefit-span">Sabe aquele livro que você esqueceu de terminar? Nós podemos ajudar você a ler até o final.<br/><a id="#inputIcon" class="more" href="#">Saiba mais...</a></div>
				</div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div style="width: 382px; height: 100%; float: right;margin-right: 50px;">
				<div style="width:64%; float:left; height: 100px">
					<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px;" class="text-title short">Pratique esportes</legend>
					<div class="benefit-span" style="text-align: right;">Pratique esportes diariamente e tenha uma vida mais ativa. <a id="#inputIcon" class="more" href="#">Saiba mais...</a></div> 
				</div>
				<div style="width:36%; float:left; text-align: center;"><img style="margin-left: 20px;" src="img/sports.png"></div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div class="zen left">
				<div class="benefit-content" style="width: 290px;">
					<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px; width: 500px" class="text-title short">Sinta-se mais equilibrado</legend>
					<div class="benefit-span">Viva uma vida mais leve e sinta-se satisfeito.<br/> <a id="#inputIcon" class="more" href="#">Saiba mais...</a></div>
				</div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div style="width: 392px; height: 100%; float: right;margin-right: 50px;">
				<div style="width:64%; float:left; height: 100px">
					<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px;" class="text-title short">Viva mais saudável</legend>
					<div class="benefit-span" style="text-align: right;" >Alimente-se melhor, beba mais água, pare de fumar e fique mais saudável. O bom hábito pode te ajudar nisso! <a id="#inputIcon" class="more" href="#">Saiba mais...</a></div> 
				</div>
				<div style="width:36%; float:left; text-align: center;"><img style="margin-left: 20px;" src="img/heart.png"></div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div class="business" style="margin-left: 31px">
				<div class="benefit-content" style="width: 280px; margin-left: 119px">
					<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px;" class="text-title short">Faça bons negócios</legend>
					<div class="benefit-span">Tenha bons hábitos no seu trabalho e aumente sua produtividade e vontade. <a id="#inputIcon" class="more" href="#">Saiba mais...</a></div>
				</div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div style="width: 528px; height: 100%; float: right;margin-right: 50px;">
				<div style="width:74%; float:left; height: 100px">
					<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px;width: 410px" class="text-title short">Fique mais com a sua família</legend>
					<div class="benefit-span" style="text-align: right;">Com o bom hábito você conseguirá tempo para ficar com sua família e curtir seus filhos. <a id="#inputIcon" class="more" href="#">Saiba mais...</a></div> 
				</div>
				<div style="width:26%; float:left; text-align: center;"><img style="margin-left: 20px;" src="img/family.png"></div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px;">
			<div class="relationship left" style="margin-left: 45px">
				<div class="benefit-content" style="width: 406px; margin-left: 105px">
					<legend style="width:425px; border-width:0px; margin-left: 0px; margin-bottom: 10px;" class="text-title short">Melhore seu relacionamento</legend>
					<div class="benefit-span">Tenha um relacionamento mais intenso, viva momentos felizes e harmoniosos. <a id="#inputIcon" class="more" href="#">Saiba mais...</a></div>
				</div>
			</div>
		</div>
		<div class="span12" style="margin-top: 20px; text-align: center;">
			<button class="scroll btn btn-warning signup-submit beauty-text" href="#topDiv">Descubra como funciona o bom hábito >></button>
		</div>
	</div>		
</div>
	<footer style="height: 62px">
		<div class="container">
			<div class="footer">
				<div class="contacts">			
				</div>		
			</div>
		</div>
	</footer>
	
	</div> <!-- fim do vertical aligner -->
	<div class="contacts">			
		<div class="email-icon"></div>
		<div class="phone">contato@bomhabito.com.br</div>
		<div class="phone-icon"></div>
		<div class="phone">+55 47 9182-2839</div>
	</div>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<script>
		$(document).ready(function (){
			if($("#inputIcon").length > 0){
			    $(".scroll").click(function (){
		                $('html, body').animate({
		                    scrollTop: $("#inputIcon").offset().top - 100 
		                     }, 200);
		                $("#inputIcon").focus();
		                
		        });
		        $("#inputIcon").focus(function(){
					this.value = "";
			     });
			}
	    });
	</script>
	 <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> --> 
	<!-- <script src="js/plugins.js"></script> -->
	<!-- <script src="js/script.js"></script> -->
	<!--<script>
	/*
		var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
	
		(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	
		g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	
		s.parentNode.insertBefore(g,s)}(document,'script'));*/
	</script> -->
</body>
</html>
