var win = Ti.UI.currentWindow;
var loja = win.loja;

win.navBarHidden = false;
win.barColor = '#1111';

var annotations = [Ti.Map.createAnnotation({
	latitude : loja.latitude,
	longitude : loja.longitude,
	title : loja.nome,
	subtitle : loja.endereco + " - Telefone: " + loja.telefone,
	animate : true,
	pincolor : Ti.Map.ANNOTATION_GREEN
})];

var mapview = Titanium.Map.createView({
	mapType : Titanium.Map.STANDARD_TYPE,
	region : {
		latitude : loja.latitude,
		longitude : loja.longitude,
		latitudeDelta : .05,
		longitudeDelta : .05
	},
	animate : true,
	regionFit : true,
	userLocation : false,
	annotations : annotations
});

win.add(mapview);