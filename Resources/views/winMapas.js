var win = Ti.UI.currentWindow;
var fileData = 'dados.txt';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileData);
var data;

win.backgroundColor = '#282828';
win.title = 'Lojas';

var estados_data = [];

if (file.exists()) {
	var json = file.read();
	data = JSON.parse(json);
}

for (var i in data.estados) {

	var e = data.estados[i];

	var estado = Ti.UI.createTableViewSection({
		headerTitle : e.nome
	});

	for (var i in e.cidades) {
		var c = e.cidades[i];
		estado.add(Ti.UI.createTableViewRow({
			color : '#FFFF',
			font : {
				fontSize : '18%',
				fontFamily : 'helveticaneueultralight'
			},
			title : c.nome,
			hasChild : (c.lojas.length > 0 ? true : false),
			lojas : c.lojas
		}));
	}

	estados_data.push(estado);
}

var btMapa = Titanium.UI.createButton({
	title : 'Encontre a loja mais próxima',
	backgroundImage : 'images/button/button_map.png',
	borderRadius : 13,
	font : {
		fontSize : '22%',
		fontFamily : 'bodoniitalic'
	},
	color : '#FFFF',
	height : '8%',
	bottom : '8%',
	zIndex : 8,
	width : '85%'
});

win.add(btMapa);

btMapa.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		navBarHidden : false,
		barColor : '#111',
		url : "LojasMapa.js",
		title : 'Lojas',
		data : data
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

var table = Ti.UI.createTableView({
	backgroundColor : '#282828',
	backgroundRepeat : false,
	top : 0,
	left : 0,
	right : 0,
	data : estados_data,
	color : '#FFFF'
});

table.addEventListener("click", function(e) {
	if (e.source.hasChild) {
		var win = Titanium.UI.createWindow({
			backgroundColor : '#282828',
			navBarHidden : false,
			barColor : '#111',
			url : "LojasTable.js",
			title : e.source.title,
			lojas : e.source.lojas
		});
		
		Titanium.UI.currentTab.open(win, {
			animated : true
		});
	}
});

// add table view to the window
win.add(table); 