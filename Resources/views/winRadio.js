//Criando a janela Rádio
var win = Titanium.UI.currentWindow;
win.backgroundImage = 'images/background/background.png'; 

//--------------------------------------------LAYER VIEW------------------------------------------------
//------------------------ É ADICIONADO ACTIVEINDICATOR, PLAY/PAUSE E VOLUME ---------------------------
var layerView = Titanium.UI.createView({
	backgroundImage : 'images/background/layer.png',
	bottom : 15,
	width : '90%',
	height : 80
});

var lessLabel = Titanium.UI.createLabel({
	text : '-',
	color : '#FFFF',
	font : {
		fontSize : 45,
		font : 'arial'
	},
	left : 78
});

var moreLabel = Titanium.UI.createLabel({
	text : '+',
	color : '#FFFF',
	font : {
		fontSize : 25,
		font : 'arial'
	},
	right : 15
});

layerView.add(lessLabel);
layerView.add(moreLabel);

//---------------------------------------ACTIVITY INDICATOR---------------------------------------------
var actInd = Titanium.UI.createActivityIndicator({
	zIndex : 9,
	height : 'auto',
	width : 'auto',
	message : 'Buscando rede...',
	left : 16.5
});

layerView.add(actInd);

function indAudio() {
	if (audioPlayer.BUFFERING < 0 && audioPlayer.STATE_WAITING_FOR_DATA) {
		actInd.show();
	} else {
		actInd.hide();
	}
}

var loopIndicator;

//---------------------------------------------PLAUSE---------------------------------------------------
var pauseResumeButton = Titanium.UI.createButton({
	backgroundImage : 'images/button/but_Play.png',
	enabled : false,
	height : '62%',
	width : '12%',
	left : 15
});

layerView.add(pauseResumeButton);

pauseResumeButton.addEventListener('click', function() {
	if (audioPlayer.paused) {
		pauseResumeButton.backgroundImage = 'images/button/but_Pause.png';
		audioPlayer.start();
	} else {
		pauseResumeButton.backgroundImage = 'images/button/but_Play.png';
		audioPlayer.pause();
	}
});

//---------------------------------------------VOLUME---------------------------------------------------
var volumeSlider = Ti.UI.createSlider({
	left : 105,
	right : 40,
	value : 100,
	min : 0,
	max : 100,
	zIndex : 9
});

layerView.add(volumeSlider);

volumeSlider.addEventListener('change', function(e) {
	audioPlayer.volume = e.value / 100
});

win.add(layerView);

//--------------------------------------------PLAYER----------------------------------------------------
var button = ['images/button/but_Lounge.png', 'images/button/but_Rock.png', 'images/button/but_MPB.png', 'images/button/but_POP.png'];
var buttonSel = ['images/button/but_Lounge_sel.png', 'images/button/but_Rock_sel.png', 'images/button/but_MPB_sel.png', 'images/button/but_POP_sel.png'];
var title = ['Jazz Lounge', 'Rock', 'MPB', 'POP'];
var startStopButton = [];
var cont = 22;

var urlStream = ['http://200.195.168.12:9191', 'http://200.195.168.12:9292', 'http://200.195.168.12:9393', 'http://200.195.168.12:9494'];

var audioPlayer = Ti.Media.createAudioPlayer({
	url : urlStream[0],
	allowBackground : true
});

for (var i = 0, s = button.length; i < s; i++) {
	var objectButton = Ti.UI.createButton({
		title : title[i],
		backgroundImage : button[i],
		color : 'white',
		font : {
			fontSize : '32%',
			fontFamily : 'bodoniitalic'
		},
		height : '14%',
		width : '64%',
		top : cont + '%',
		center : '50%',
	});
	cont += 16;
	win.add(objectButton);

	startStopButton.push(objectButton);
	startStopButton[i].urlStream = urlStream[i];
	startStopButton[i].buttonSel = buttonSel[i];
	startStopButton[i].button = button[i];

	function changeButton() {
		startStopButton[0].backgroundImage = button[0];
		startStopButton[1].backgroundImage = button[1];
		startStopButton[2].backgroundImage = button[2];
		startStopButton[3].backgroundImage = button[3];
	}


	startStopButton[i].addEventListener('click', function(e) {
		changeButton();
		if (Ti.Network.online == false) {
			alert('Está aplicação necessita de uma conexão Internet para funcionar: Favor verefique sua conexão.');
		} else {

			if (audioPlayer.playing || audioPlayer.paused) {
				if (audioPlayer.url == e.source.urlStream) {
					clearInterval(loopIndicator);
					audioPlayer.stop();
					e.source.backgroundImage = e.source.button;
					pauseResumeButton.backgroundImage = 'images/button/but_Play.png';
					pauseResumeButton.enabled = false;
				} else {
					audioPlayer.stop();
					audioPlayer.url = e.source.urlStream;
					e.source.backgroundImage = e.source.buttonSel;
					pauseResumeButton.backgroundImage = 'images/button/but_Pause.png';
					pauseResumeButton.enabled = true;
					audioPlayer.start();
				}
			} else {
				audioPlayer.url = e.source.urlStream;
				e.source.backgroundImage = e.source.buttonSel;
				pauseResumeButton.backgroundImage = 'images/button/but_Pause.png';
				pauseResumeButton.enabled = true;
				audioPlayer.start();
				loopIndicator = setInterval(indAudio, 100);
			}
		}
	});
}

//--------------------------------------------------------------------------------------------
win.open();