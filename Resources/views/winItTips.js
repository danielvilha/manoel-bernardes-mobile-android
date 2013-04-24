//Criando a Tab It Tips
var win = Titanium.UI.currentWindow;
win.title = 'It Tips';
win.backgroundImage = 'images/background/background.png';

var ITtips = require('views/itTips');

var data = [];
var itButton = [];

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "ittips.json");

if (file.exists()) {
	var json = file.read();
	var d = JSON.parse(json);
	json = null;
	data = d.ittips;
}

var cont = 25;

for (var i = 0, s = data.length; i < s; i++) {

	var ittipsButton = Ti.UI.createButton({
		title : data[i].cidades[0].cidade,
		font : {
			fontSize : '40%',
			fontFamily : 'bodoniitalic'
		},
		color : '#FFFF',
		top : cont + '%',
		height : '12%',
		width : '80%',
		backgroundImage : 'images/button/' + data[i].cidades[0].button,
		index : i
	});

	cont += 18;
	win.add(ittipsButton);
	itButton.push(ittipsButton);

	itButton[i].addEventListener('click', function(e) {
		var i = e.source.index;

		var itTips = new ITtips(data[i].cidades[0]);

		win.add(itTips);
	});
}