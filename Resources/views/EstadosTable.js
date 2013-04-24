var fileData = 'dados.txt';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileData);
var data;
var lojas_data = [];

if (file.exists()) {
	var json = file.read();
	data = JSON.parse(json);
}

for (var i in data.estados) {

	var e = data.estados[i];
	//alert(e.cidades.length);
	//alert(decodeURIComponent(e.nome));
	lojas_data.push({
		title : e.nome,
		hasChild : (e.cidades.length > 0 ? true : false),
		cidades : e.cidades
	});
}

var table = Ti.UI.createTableView({
	data : lojas_data
});

table.addEventListener("click", function(e) {
	if (e.rowData.hasChild) {
		var win = Titanium.UI.createWindow({
			navBarHidden : false,
			url : "CidadesTable.js",
			title : e.rowData.title,
			cidades : e.rowData.cidades
		});

		Titanium.UI.currentTab.open(win, {
			animated : true
		});
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(table); 