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
	
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" href="../fonts/fonts.css">
	<link rel="stylesheet" href="../css/estiloB.css">
	
	<script src="../js/libs/modernizr-2.5.3.min.js"></script>
</head>

<body>
<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
	<div class="vertical-aligner">
	<header>
		<div class="container header">
		  	<a href="bomHabitoB"><div class="logo"><img src="../img/logo.jpg"/></div></a><div class="slogan">Melhore seus hábitos e viva melhor</div>
		</div>
	</header>

	<div role="main" class="container middle">
	<div class="top-detail"></div>
	<div class="conteudo-middle">
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
			<div class="line" style="padding-top: 70px" >
				<div class="line-item">
					<div style="float:left;">
						<img style="width: 69px; width: 69px" src="../img/clock.png">
					</div>	
					<div class="inside-item">
						<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px; line-height: 25px;" class="text-title short subtitle-text">Controle seu tempo</legend>
						<div class="benefit-span">Com o bom hábito você conseguirá tempo para ficar com sua família e curtir seus filhos</div>
					</div>
				</div>
				<div class="line-item">
					<div style="float:left;">
						<img style="width: 69px; width: 69px" src="../img/bed.png">
					</div>	
					<div class="inside-item">
						<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px; line-height: 25px;" class="text-title short subtitle-text">Durma mais cedo</legend>
						<div class="benefit-span">Durma mais cedo e tenha um dia mais ativo e feliz</div>
					</div>
				</div>
				<div class="line-item">
					<div style="float:left;">
						<img style="width: 69px; width: 69px" src="../img/read-books.png">
					</div>	
					<div class="inside-item">
						<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px; line-height: 25px;" class="text-title short subtitle-text">Leia livros até o final</legend>
						<div class="benefit-span">Sabe aquele livro que você esqueceu de terminar? Nós podemos ajudar você a ler até o final</div>
					</div>
				</div>
			</div>
			<div class="line" >
				<div class="line-item">
					<div style="float:left;">
						<img style="width: 69px; width: 69px" src="../img/heart.png">
					</div>	
					<div class="inside-item">
						<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px; line-height: 25px;" class="text-title short subtitle-text">Viva mais saudável</legend>
						<div class="benefit-span">Alimente-se melhor, beba mais água, pare de fumar e fique mais saudável. O bom hábito pode te ajudar nisso!</div>
					</div>
				</div>
				<div class="line-item">
					<div style="float:left;">
						<img style="width: 69px; width: 69px" src="../img/zen.png">
					</div>	
					<div class="inside-item">
						<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px; line-height: 25px;" class="text-title short subtitle-text">Sinta-se mais equilibrado</legend>
						<div class="benefit-span">Viva uma vida mais leve e sinta-se satisfeito</div>
					</div>
				</div>
				<div class="line-item">
					<div style="float:left;">
						<img style="width: 69px; width: 69px" src="../img/sports.png">
					</div>	
					<div class="inside-item">
						<legend style="border-width:0px; margin-left: 0px; margin-bottom: 10px; line-height: 25px;" class="text-title short subtitle-text">Pratique esportes</legend>
						<div class="benefit-span">Pratique esportes diariamente e tenha uma vida mais ativa</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
	<footer style="height: 62px">
		<div class="container" style="margin-top:-30px;">
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

	<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> -->
	<script>window.jQuery || document.write('<script src="../js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<script>
		$(document).ready(function (){
			if($("#inputIcon").length > 0){
		        $("#inputIcon").focus(function(){
					this.value = "";
			     });
			}
	    });	
	</script>

</body>
</html>
