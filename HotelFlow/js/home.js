/*************** 	GIPHY    ********************************************************/

var host = "https://api.giphy.com";
var url_search = host + "/v1/gifs/search";
var api_key = "VR77C7LxxDSQtC1Pcyy3ueCteDeIVeBD";
var $ListaDeGifs = $('.gifs');

function pegaGif(text){
	$.ajax({
		method: "GET",
		url: url_search,
		contentType: "application/json; charset=utf-8",
		data: {
			api_key: api_key,
			q: text,
			limit: 5,
		}
	})
	/*.done(function( response ) {
		var listaDeGifs = response.data;//Array contendo ids de gifs vindos da API
		var final_html = "";
		
		//Pega os dados do array e incorpora no html
		for(var i = 0; i < listaDeGifs.length; i++){
			var gif_id = listaDeGifs[i].id;
			//alert(listaDeGifs[i].id+"\n\n"+  listaDeGifs[i].title  +"\n\n"+    listaDeGifs[i].source_tld   +"\n\n"+   listaDeGifs[i].slug);
			var img_url = "https://i.giphy.com/media/" + gif_id + "/100.gif";
			final_html +='<img src="' + img_url +'">';
		}
		$ListaDeGifs.html(final_html);
		
	});*/
	
	
	
	
	
	
	
	.done(function( response ) {
		var listaDeGifs = response.data;
		var final_html = "";
		
		for(var i = 0; i < listaDeGifs.length; i++){
			var gif_id = listaDeGifs[i].id;
			
			var img_url = "https://i.giphy.com/media/" + gif_id + "/100.gif";
			final_html +='<img src="' + img_url +'">';
		}
		$ListaDeGifs.html(final_html);
		
	});
	
	
	
	
	
	
	/*
	
	
	
	<ul class="lista" id="sortable">
			<li id="v1" class="ui-state-default" >
				<button class="botao" type="submit" onclick="excluir()">
					x
				</button>
				1
			</li>
			<li class="ui-state-default">2</li>
			<li class="ui-state-default">3</li>
			<li class="ui-state-default">4</li>
			<li class="ui-state-default">5</li>
			<li class="ui-state-default">6</li>
			<li class="ui-state-default">7</li>
			<li class="ui-state-default">8</li>
			<li class="ui-state-default">9</li>
			<li class="ui-state-default">10</li>
			<li class="ui-state-default">11</li>
			<li class="ui-state-default">12</li>
		</ul>
	
	*/
	
	
}

$('#botao').on('click', function(){
	
	var text = $('#campo').val();
	if (text){
		pegaGif(text);
	}
})

/*
https://www.webcheats.com.br/topic/2255576-api-integrando-com-giphy-gifs/
https://codepen.io/iazzetta/pen/wqNOrg
*/
/*************** 	GIPHY    ********************************************************/








/*************** 	ELEMENTOS    ********************************************************/

$(function(){
	$('.salvar').click(function(){
		var valores = new Array();
		
		$('.lista .ui-state-default').each(function(){
			valores.push( $(this).html() );
		});
		alert(valores);
    });
});

$(function(){
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

function excluir(){
	var elemento = document.querySelector("#v1");
	elemento.parentNode.removeChild(elemento);
}

/*************** 	ELEMENTOS    ********************************************************/








function bar() {
	alert('Hello World');
}

function somar(x, y) {
  return x + y;
}

function teste(){
	document.getElementById('aviso').innerHTML = "Teste buscar botão";
}

$(document).ready(function(){
	$("button").mouseover(
		function(){
			// $("button").animate({left: '20px'});
			$("button").animate({width: '120px', opacity: '0.8'});
		}
	);
	
  
});
$(document).ready(function(){
	$("button").mouseout(
		function(){
			// $("button").animate({left: '20px'});
			$("button").animate({width: '100px', opacity: '1'});
		}
	);
  
});

/*
$(document).ready(function(){
	$("button").hover(
		function(){
			// $("button").animate({left: '20px'});
			$("button").animate({width: '100px', left: '10px'});
		},
		function(){
			// $("button").animate({left: '20px'});
			$("button").animate({width: '100px', left: '0px'});
		}
	);
  
});

/*$(document).ready(function(){
   $("button").click(function(){
    $("button").animate({left: '250px'});
  });
});*/

//bar();

//alert(somar(3, 5));

//document.getElementById('aviso').innerHTML = "Teste";

