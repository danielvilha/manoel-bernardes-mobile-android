var lojas_data = [];
var win = Ti.UI.currentWindow;
var data = win.cidades;

win.navBarHidden = false;

for (var i in data) {
	var c = data[i];
	lojas_data.push({
		title : c.nome,
		hasChild : (c.lojas.length > 0 ? true : false),
		lojas : c.lojas
	});
}

var table = Ti.UI.createTableView({
	data : lojas_data
});

table.addEventListener("click", function(e) {
	if (e.rowData.hasChild) {
		var win = Titanium.UI.createWindow({
			backgroundColor : '#282828',
			navBarHidden : false,
			barColor : '#111',
			url : "LojasTable.js",
			title : e.rowData.title,
			lojas : e.rowData.lojas
		});

		Titanium.UI.currentTab.open(win, {
			animated : true
		});
	}
});

// add table view to the window
win.add(table); 