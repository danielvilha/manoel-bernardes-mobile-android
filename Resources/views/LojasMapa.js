var win = Ti.UI.currentWindow;
var data = win.data;
var lojas_data = [];
var localizacaoPadrao = {
	latitude : -24.763846,
	longitude : -51.519609,
	latitudeDelta : 7,
	longitudeDelta : 7
};

// Ti.Geolocation.preferredProvider = "gps";

for (var i in data.estados) {

	var estado = data.estados[i];

	for (var i in estado.cidades) {
		var cidade = estado.cidades[i];

		for (var i in cidade.lojas) {
			var loja = cidade.lojas[i];

			var marcacao = Ti.Map.createAnnotation({
				latitude : loja.latitude,
				longitude : loja.longitude,
				title : loja.nome,
				subtitle : loja.endereco + " - Telefone: " + loja.telefone,
				animate : true,
				pincolor : Ti.Map.ANNOTATION_GREEN
			});

			lojas_data.push(marcacao);
		}
	}

}

Ti.Geolocation.purpose = 'Recieve User Location';
Ti.Geolocation.getCurrentPosition(function(e) {
	if (e.error) {
		alert(e.error);
	} else {
		//Ti.API.info(e.coords);
		localizacaoPadrao.latitude = e.coords.latitude;
		localizacaoPadrao.longitude = e.coords.longitude;
		localizacaoPadrao.latitudeDelta = 0.05;
		localizacaoPadrao.longitudeDelta = 0.05;

		var marcacao = Ti.Map.createAnnotation({
			latitude : localizacaoPadrao.latitude,
			longitude : localizacaoPadrao.longitude,
			title : 'Você está aqui',
			animate : true,
			pincolor : Ti.Map.ANNOTATION_RED
		});

		lojas_data.push(marcacao);

		var mapview = Titanium.Map.createView({
			mapType : Titanium.Map.STANDARD_TYPE,
			region : localizacaoPadrao,
			animate : true,
			regionFit : true,
			userLocation : false,
			annotations : lojas_data
		});

		win.add(mapview);
	}
}); 