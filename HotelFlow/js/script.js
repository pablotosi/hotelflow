var host = "https://api.giphy.com";
var url_search = host + "/v1/gifs/search";
var api_key = "VR77C7LxxDSQtC1Pcyy3ueCteDeIVeBD";
var $ListaDeGifs = $('.gifs');
var $ArrayGifs = new Array();
var $GifsListados;

var arrayString = localStorage.getItem('ArrayGifs');
var $ArrayNovo = JSON.parse(arrayString);	

if($ArrayNovo != null){
	if($ArrayNovo.length > 0){
		$ArrayGifs = $ArrayNovo;
	}
}
function pegaGif(text){
	$.ajax({
		method: "GET",
		url: url_search,
		contentType: "application/json; charset=utf-8",
		data: {
			api_key: api_key,
			q: text,
			limit: 15,
		}
	})

	.done(function( response ) {
		var listaDeGifs = response.data;
		$GifsListados = listaDeGifs;
		var final_html = "";
		
		final_html += "<ul class='lista' id='sortable'>";
		
		for(var i = 0; i < listaDeGifs.length; i++){
			var gif_id = listaDeGifs[i].id;
			
			final_html += "<li id='gif"+i+"' class='ui-state-default' >";
			
			var img_url = "https://i.giphy.com/media/" + gif_id + "/100.gif";
			final_html +='<img src="' + img_url +'">';
			
			final_html += "<button class='botaoFav' type='submit' onclick='salvar(\""+gif_id+"\", \""+i+"\")'>+</button></li>";
			
		}
		$ListaDeGifs.html(final_html+"</ul>");
		
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
		
	});
	
}

function pegaFav(){
		
		var listaDeGifs = $ArrayGifs;
		var final_html = "";
				
		final_html += "<ul class='lista' id='sortable'>";
		
		for(var i = 0; i < listaDeGifs.length; i++){
			var gif_id = listaDeGifs[i].id;
			
			final_html += "<li id='gif"+i+"' class='ui-state-default' >";
			
			var img_url = "https://i.giphy.com/media/" + gif_id + "/100.gif";
			final_html +='<img src="' + img_url +'">';
			
			final_html += "<button class='botaoDeleta' type='submit' onclick='excluir(\""+gif_id+"\", \""+i+"\")'>x</button></li>";
			
		}
		$ListaDeGifs.html(final_html+"</ul>");
		
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

}

function salvar(id, id2){
	
	document.getElementById('aviso').innerHTML = "";
	document.getElementById('erro').innerHTML = "";	
	var repetido = false;
	
	for(var i = 0; i < $ArrayGifs.length; i++){
		
		
		if(id == $ArrayGifs[i].id){
			repetido = true;
		}
	}
	
	var id1 = 0;
	if(repetido == false){
		for(var i = 0; i < $GifsListados.length; i++){
			
			if(id == $GifsListados[i].id){
				$ArrayGifs.push($GifsListados[i]);
			}
		}
		
		var elemento = document.querySelector("#gif"+id2);
		elemento.parentNode.removeChild(elemento);
		document.getElementById('aviso').innerHTML = "Gif adicionado com sucesso.";
		
		localStorage.setItem('ArrayGifs', JSON.stringify($ArrayGifs));
		
	}
	else{
		
		document.getElementById('erro').innerHTML = "Você já adicionou este gif aos seus favoritos.";
	}
	
}

function excluir(id, id2){
	
	document.getElementById('aviso').innerHTML = "";
	document.getElementById('erro').innerHTML = "";
	
	var id1 = 0;
	for(var i = 0; i < $ArrayGifs.length; i++){
		
		if(id == $ArrayGifs[i].id){
			$ArrayGifs.splice(i,1);
			localStorage.setItem('ArrayGifs', JSON.stringify($ArrayGifs));

		}
	}
	
	var elemento = document.querySelector("#gif"+id2);
	elemento.parentNode.removeChild(elemento);
	
	
	document.getElementById('aviso').innerHTML = "Gif excluído com sucesso.";
	
}


$(function(){
	$('.salvar').click(function(){
		var valores = new Array();
		
		$('.lista .ui-state-default').each(function(){
			valores.push( $(this).html() );
		});
    });
});

$(function(){
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});


$(document).ready(function(){
	$("#botaoBusca").mouseover(
		function(){
			$("#botaoBusca").animate({width: '120px', opacity: '0.8'});
		}
	);
});

$(document).ready(function(){
	$("#botaoBusca").mouseout(
		function(){
			$("#botaoBusca").animate({width: '100px', opacity: '1'});
		}
	);
});

$(document).ready(function(){
	$("#botaoMostraFav").mouseover(
		function(){
			$("#botaoMostraFav").animate({width: '120px', opacity: '0.8'});
		}
	);
});

$(document).ready(function(){
	$("#botaoMostraFav").mouseout(
		function(){
			$("#botaoMostraFav").animate({width: '100px', opacity: '1'});
		}
	);
});

$('#botaoMostraFav').on('click', function(){
	document.getElementById('aviso').innerHTML = "";
	document.getElementById('erro').innerHTML = "";	
	pegaFav();	
})

$('#botaoBusca').on('click', function(){
	document.getElementById('aviso').innerHTML = "";
	document.getElementById('erro').innerHTML = "";
	var text = $('#campo').val();
	if (text){
		pegaGif(text);
	}
})


jQuery('#campo').keypress(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		
		var text = $('#campo').val();
		if (text){
			pegaGif(text);
		}
	}
});