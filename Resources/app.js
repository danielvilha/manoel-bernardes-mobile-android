// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//

//---------------------------------------------------winRadio Inicio-------------------------------------------
var winRadio = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	backgroundImage : 'views/images/background/background.png',
	url : 'views/winRadio.js'
});
var tabRadio = Titanium.UI.createTab({
	icon : 'music.png',
	title : 'Rádio',
	window : winRadio
});

//---------------------------------------------------winModa Inicio--------------------------------------------
var winModa = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	// backgroundImage : 'images/background/background.png',
	backgroundColor : '#201f20',
	url : 'views/winModa.js'
});

var tabModa = Titanium.UI.createTab({
	icon : 'moda.png',
	title : 'Moda',
	window : winModa
});

//---------------------------------------------------winItTips Inicio-------------------------------------------
var winVitrine = Titanium.UI.createWindow({
	title : 'Vitrine',
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winVitrine.js',
});

var tabVitrine = Titanium.UI.createTab({
	icon : 'vitrine.png',
	title : 'Vitrine',
	window : winVitrine
});

//---------------------------------------------------winItTips Inicio-------------------------------------------
var winItTips = Titanium.UI.createWindow({
	title : 'It Tips',
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	backgroundImage : 'views/images/background/background.png',
	url : 'views/winItTips.js',
	animated : true
});

var tabItTips = Titanium.UI.createTab({
	icon : 'globe.png',
	title : 'It Tips',
	window : winItTips
});

//---------------------------------------------------winMapa Inicio--------------------------------------------
var winMapas = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winMapas.js'
});
var tabMapas = Titanium.UI.createTab({
	icon : 'map.png',
	title : 'Lojas',
	window : winMapas
});

//
//  add tabs
//
tabGroup.addTab(tabRadio);
tabGroup.addTab(tabModa);
tabGroup.addTab(tabVitrine);
tabGroup.addTab(tabItTips);
tabGroup.addTab(tabMapas);

// open tab group
tabGroup.open();