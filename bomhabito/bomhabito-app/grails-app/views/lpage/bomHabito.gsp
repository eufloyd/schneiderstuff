<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Bom hábito</title>
		<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>	
		<div id="infinity" class="infinity-bg0">
			<div class="carousel-container">
				<div id="carousel" class="carousel slide" style="width:1280px; height:455px; margin:0 auto">
					<div class="carousel-inner">
					    <div id="0" class="active item"><div class="slide1">&nbsp;</div></div>
					    <div id="1" class="item"><div class="slide2">&nbsp;</div></div>
				    	<div id="2" class="item"><div class="slide3">&nbsp;</div></div>
					    <div id="3" class="item"><div class="slide4">&nbsp;</div></div>
				  	</div>
				</div>
			</div>
		</div>
		<div class="top-container">
			<div class="row" style="height:40px" >
				<div class="span5" >
					<span >&nbsp;</span>
				</div>
			</div>
			<div class="row" >
				<div class="span5" style="width:100%">
					<div style="width:1278px; margin:0px auto">
						<div class="row">
							<div class="span1" style="width:1000px">
								<a href="${createLink(uri: '/')}"><div class="logo"></div></a>
							</div>
							<div class="span1" style="width:250px">
								<div style="top:15px" class="fb-like" data-href="http://www.bomhabito.com.br" data-send="false" data-layout="button_count" data-width="45" data-show-faces="false"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="height:70px" >
				<div class="span5" >
					<span >&nbsp;</span>
				</div>
			</div>
			<div class="row" style="height:452px">
				<div class="span5 center-invisible-square">
					<div class="row" style="height:452px">
						<div class="span5 center-invisible-left-part">
							<div class="row" style="height:300px">
								
							</div>
							<div id="slide-links" class="row" style="height:140px; width:675px">
								<div class="span1" style="width:15px">
									&nbsp;
								</div>	
								<div id="slide0" class="span2 slide-link left-item-details selected">
									<div  class="money"><div class="arrow">&nbsp;</div></div>
								</div>	
								<div id="slide1" class="span2 slide-link unselected">
									<div class="clock"><div class="arrow"></div></div>
								</div>	
								<div id="slide2" class="span2 slide-link unselected">
									<div class="people"><div class="arrow">&nbsp;</div></div>
								</div>	
								<div id="slide3" class="span2 slide-link right-item-details unselected">
									<div class="doc"><div class="arrow">&nbsp;</div></div>
								</div>	
							</div>
						</div>
						<div class="span5 center-invisible-right-part traparent radius">
							<g:if test="${!saved}">
								<div class="row" style="height:40px">
									<div class="span3" style="width:190px" >
										<span class="learn-more">SAIBA MAIS</span>
									</div>
									<div class="span5 flag right" >
										<span>&nbsp;</span>
									</div>
								</div>
								<div class="row" style="height:133px">
									<div class="span3" style="width:210px">
										<div class="long-text">Aumente o lucro da sua empresa com os melhores hábitos da sua equipe.
										</div>
									</div>
								</div>
								<form id="form" onsubmit="return is_email()" >
									<div class="row" style="height:64px">
										<div class="span3">
											<input id="email" name="email" type="text" placeholder="Digite seu e-mail aqui" style="margin-left:40px; height:44px; width:225px">
										</div>
									</div>
									<span class="long-text" style="line-height:14px;margin-left:40px">
										<g:checkBox name="isBusiness"/> 
										<span style="top:3px; position:relative">Você tem interesse em mudar o <br/></span>
										<span style="top:3px; position:relative; margin-left:57px">hábito de outras pessoas?</span>

									</span>
									<a href="#" class="start">COMECE AGORA</a>
								</form>
							</g:if>
							<g:else>
								<div class="row" style="height:40px">
									<div class="span3" style="width:190px" >
										<span class="learn-more">Obrigado!</span>
									</div>
									<div class="span5 flag right" >
										<span>&nbsp;</span>
									</div>
								</div>
								<div class="row" style="height:133px">
									<div class="span3" style="width:210px">
										<div class="long-text">Vontade é o primeiro passo da mudança. Entraremos em contato em breve!
										</div>
									</div>
								</div>
							</g:else>
						</div>
						<div id="bottom-center-invisible"  class="row" style="height:360px">
														
							<!-- Otávio -->

							<div id="respected-guy-opinion0" class="span5 opinion" >
								<div class="row" >
									<div class="span5 opinion-title" >Hábitos</div>
								</div>
								<div class="row">
									<div class="span1 opinion-text" >"Antes de perceber seu conhecimento, as pessoas percebem seu comportamento."
									</div>
									<div class="span2" style="width:170px">
										<div class="row">
											<div class="span3 photo otavio" >
												&nbsp;
											</div>
										</div>
										<div class="row">
											<div class="span3 opinion-title" style="margin-top:15px; margin-left:50px">Otávio Fontoura<br/>
												<span class="opinion-text occupation">CEO ACCOM</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Aristóteles -->

							<div id="respected-guy-opinion1" class="span5 opinion hide" >
								<div class="row" >
									<div class="span5 opinion-title" >Hábitos</div>
								</div>
								<div class="row">
									<div class="span1 opinion-text" >"Somos o que repetidamente fazemos, portanto a excelência não é um feito, mas um hábito."
									</div>
									<div class="span2" style="width:170px">
										<div class="row">
											<div class="span3 photo aristoteles" >
												&nbsp;
											</div>
										</div>
										<div class="row">
											<div class="span3 opinion-title" style="margin-top:15px; margin-left:50px">Aristóteles<br/>
												<span class="opinion-text occupation">Filósofo Grego</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Mark Twain -->

							<div id="respected-guy-opinion2" class="span5 opinion hide" >
								<div class="row" >
									<div class="span5 opinion-title" >Hábitos</div>
								</div>
								<div class="row">
									<div class="span1 opinion-text" >"A gente não se liberta de um hábito atirando-o pela janela: É preciso fazê-lo descer a escada, degrau por degrau."
									</div>
									<div class="span2" style="width:170px">
										<div class="row">
											<div class="span3 photo twain" >
												&nbsp;
											</div>
										</div>
										<div class="row">
											<div class="span3 opinion-title" style="margin-top:15px; margin-left:50px">Mark Twain
												<br/>
												<span class="opinion-text occupation">Escritor Americando</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- John Maxwell -->

							<div id="respected-guy-opinion3" class="span5 opinion hide" >
								<div class="row" >
									<div class="span5 opinion-title" >Hábitos</div>
								</div>
								<div class="row">
									<div class="span1 opinion-text" >"A princípio nós formamos os hábitos. Depois, os hábitos nos formam."
									</div>
									<div class="span2" style="width:170px">
										<div class="row">
											<div class="span3 photo maxwell" >
												&nbsp;
											</div>
										</div>
										<div class="row">
											<div class="span3 opinion-title" style="margin-top:15px; margin-left:50px">John Maxwell<br/>
												<span class="opinion-text occupation">Escritor Americano</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="feed" class="span2">
								<div class="row" style="height:30px">&nbsp;</div>
								<g:each in="${posts}">
									<a href="${it.link}" target="_blank">
										<div class="row" >
											<div class="span3 post-title">${it.title}</div>
											<div class="span3 post-date">${it.date}</div>
											<div class="span post-text line">${it.text}</div>
										</div>
									</a>
								</g:each>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
		<div class="bottom-fake-container">
			<div class="row" >
				<div class="span5" style="width:100%; background:#f2f2f2; height:66px">
					<div style="width:1278px; margin:0px auto" class="text-footer">
						<div style="margin-left:166px; float:left">
						Todos os direitos reservados.
						</div>
						<div style="float:left; margin-left:620px">
							Bom Hábito
						</div>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="js/bootstrap-carousel.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
		<div id="fb-root"></div>
		<script>
		  window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '401417529943125',
		      //channelUrl : '//www.bomhabito.com.br/channel.html',
		      status     : true, 
		      cookie     : true, 
		      xfbml      : true  
		    });
		  };

		  (function(d, debug){
		     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement('script'); js.id = id; js.async = true;
		     js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
		     ref.parentNode.insertBefore(js, ref);
		   }(document, /*debug*/ false));

	  	/*FB.api('/platform', function(response) {
		  alert(response.company_overview);
		});*/

		/*** analytics ***/
		 var _gaq = _gaq || [];
		     _gaq.push(['_setAccount', 'UA-37303202-1']);
		     _gaq.push(['_trackPageview']);
		   
		     (function() {
		       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		       ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		     })();
		     
		</script>
	</body>
</html>