var win = Ti.UI.currentWindow;
var loja = win.loja;

win.navBarHidden = false;

var nome = Ti.UI.createLabel({
	color : '#FFFF',
	text : loja.nome,
	font : {
		fontSize : '28%',
		fontFamily : 'bodoniitalic'
	},
	textAlign : 'center',
	top : '10%',
	width : '80%'
})

var endereco = Ti.UI.createLabel({
	color : '#FFFF',
	text : loja.endereco,
	font : {
		fontSize : '20%',
		fontFamily : 'helveticaneueultralight'
	},
	textAlign : 'center',
	top : '10%',
	width : '80%'
})

var telefone = Ti.UI.createLabel({
	color : '#FFFF',
	text : loja.telefone,
	font : {
		fontSize : '20%',
		fontFamily : 'helveticaneueultralight'
	},
	textAlign : 'center',
	top : '10%',
	width : '80%'
})

var btFone = Titanium.UI.createButton({
	title : 'Clique aqui para entrar em contato',
	backgroundImage : 'images/button/button_map.png',
	borderRadius : 13,
	font : {
		fontSize : '20%',
		fontFamily : 'bodoniitalic'
	},
	color : '#FFFF',
	height : '8%',
	top : '10%',
	//zIndex : 8,
	width : '85%'
});

btFone.addEventListener('click', function(e) {
	var confirmCall = Titanium.UI.createAlertDialog({
		message : '\nVocê gostaria de fazer esta ligação?\n',
		buttonNames : ['Sim', 'Não']
	});
	confirmCall.show();
	confirmCall.addEventListener('click', function(event) {
		if (event.index == 0) {
			call();
		}
	});
	// console.log(loja.fone);
});

function call() {
	Titanium.Platform.openURL('tel:' + loja.fone);
}

var mapa = Titanium.UI.createButton({
	title : 'Ver no mapa',
	color : '#FFF',
	font : {
		fontSize : '22%',
		fontFamily : 'bodoniitalic'
	},
	backgroundImage : 'images/button/button_map.png',
	borderRadius : 13,
	top : '15%',
	height : '8%',
	width : '65%'
});

mapa.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		navBarHidden : false,
		url : "LojaMapa.js",
		title : loja.nome,
		loja : loja
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(nome);
win.add(endereco);
win.add(telefone);
win.add(btFone);
win.add(mapa);
