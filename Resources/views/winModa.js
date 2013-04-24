//Criando a janela Editorial
var win = Titanium.UI.currentWindow;

var imageContainer = [];
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "editorial.json");

if (file.exists()) {
	var json = file.read();
	var d = JSON.parse(json);
	json = null;
	data = d.editorial;
}

Ti.API.info(data[0].joia.length)

var scrollableView = Ti.UI.createScrollableView({
	touchEnabled : true,
	currentPage : 0,
	height : '100%',
	width : '100%'
});

for (var i = 0, s = data[0].joia.length; i < s; i++) {

	// Define o tipo de arquivo que vai ler
		imageContainer.push(Titanium.UI.createImageView({
			image : 'images/joias/' + data[0].joia[i].imagem,
			height : 'auto',
			width : 'auto'
		}));
		
	// Depurar informações
	Ti.API.info(data[0].joia[i].imagem)
};

scrollableView.views = imageContainer;

var scrollView = Titanium.UI.createScrollView();

scrollView.add(scrollableView);

win.add(scrollView);

//-------------------------------------------------------------------------------------------------------------------------------//
//											Boloco para Editorial para 2 coleções												 //
//-------------------------------------------------------------------------------------------------------------------------------//
// var buttonModa = Ti.UI.createButton({
// title : 'Moda', top : '25%', height : '25%', width : '64%', font : {fontSize : 30, fontFamily : 'HoeflerText-Italic'
// fontFamily : 'BodoniSvtyTwoITCTT-BookIta' fontFamily : 'Baskerville-Italic'}, backgroundImage : '../iphone/buttons/Moda.png'});

// var buttonJoia = Ti.UI.createButton({
// title : 'Joias', top : '64%', height : '25%', width : '64%', font : {fontSize : 30, fontFamily : 'HoeflerText-Italic'
// fontFamily : 'BodoniSvtyTwoITCTT-BookIta' fontFamily : 'Baskerville-Italic'}, backgroundImage : '../iphone/buttons/Joia.png'});

// buttonModa.addEventListener('click', function() { var win = Titanium.UI.createWindow({ url : '../tables/Moda.js',
// backgroundColor : '#000', navBarHidden : true}); Titanium.UI.currentTab.open(win, {animated : true });});

// buttonJoia.addEventListener('click', function() {var win = Titanium.UI.createWindow({ url : '../tables/Joia.js',
// backgroundColor : '#000', navBarHidden : true}); Titanium.UI.currentTab.open(win, {animated : true});});

// win.add(buttonJoia); win.add(buttonModa);
//-------------------------------------------------------------------------------------------------------------------------------//
//											Boloco para Editorial para 2 coleções												 //
//-------------------------------------------------------------------------------------------------------------------------------//