
var invocation = new XMLHttpRequest();
var urlBase = 'https://agent.electricimp.com/5uc-uj4_acGI'
var urlOn = 'https://agent.electricimp.com/5uc-uj4_acGI?led=1'
var urlOff = 'https://agent.electricimp.com/5uc-uj4_acGI?led=0'
var urlUart
var uartMsg

$(document).ready(function () {

});

function ledOnFunction()
{
	$.get(urlOn, callback);
}

function ledOffFunction()
{
	$.get(urlOff, callback);
}

function callback()
{

}

function UartTxFunction()
{
	uartMsg = $('#entry').val();
	var params = {tx:uartMsg};
	urlUart = urlBase + '?' + $.param(params);
	$.get(urlUart, callback);
	
}