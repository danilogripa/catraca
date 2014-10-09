/**

projeto E-Catraca v0.1
(c) 2014  Danilo Gripa, http://danilogripa.com

*/
var link = "";
$(document).ready( function() {
	createCCID();
	$("#ccid").focus();
	$("#ccid").keyup(function(event){
		if(event.keyCode == 13){	
			if($("#ccid").val().length == 10){
				link = 'loader.php?id=' + $("#ccid").val();
				$.getJSON(link, function(data){
					console.log(data);
					if(data != null){
						inputField("nome", data.nome);
						inputField("idade", data.idade);
						inputField("turma", data.turma);
						inputImg("foto", data.foto);
					}else{
						clearValues();
						alert("nao cadastrado!");
					}
				});
				$("#ccid").val("");
			}
		}
	});
	$("#ccid").on('blur', function () {
		setTimeout(function () {
    		$("#ccid").focus();
		}, 0);
	});
});
function inputField(type, value){$("#" + type).val(value);}
function inputImg(type, value){$("#" + type).attr("src", value);}
function clearValues(){$.each($("input"), function(i, val) {$(val).val('');});inputImg("foto", '');}
function createCCID(){$('body').append($('<input type="text" id="ccid" style="opacity:0; position: absolute; top: -40000px;">'));}