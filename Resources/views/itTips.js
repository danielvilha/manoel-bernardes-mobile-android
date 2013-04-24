function itTips(data) {
	var self = Ti.UI.createView({
		backgroundColor : '#201f20'
	});

	//----------------------------------------------------------------------------------------

	var tableview = Titanium.UI.createTableView({
		data : data.data,
		// backgroundImage : '../images/background/background.png',
		backgroundColor : '#201f20',
		top : 0,
		left : 0,
		right : 0
	});

	tableview.addEventListener('click', function(e) {

		var win = Titanium.UI.createWindow({
			title : e.rowData.title,
			navBarHidden : false,
			// backgroundImage : '../images/background/background.png',
			backgroundColor : '#201f20',
			barColor : '#111'
		});

		win.open({
			animated : true
		});

		var scrollView = Titanium.UI.createScrollView({
			width : 'auto',
			height : 'auto',
			top : 0,
			showVerticalScrollIndicator : true
		});

		var imageView = Titanium.UI.createImageView({
			backgroundImage : 'images/ittips/' + e.rowData.image,
			width : '100%',
			height : '36%',
			top : 0
		});

		scrollView.add(imageView);

		var label = Ti.UI.createLabel({
			// horizontalWrap : true,
			text : e.rowData.texto,
			font : {
				fontSize : '26%',
				fontFamily : 'helveticaneueultralight'
			},
			top : '40%',
			color : '#ffff',
			// height : 'auto',
			width : '96%',
			textAlign : 'left'
		});

		scrollView.add(label);

		var urlButton = Ti.UI.createButton({
			title : e.rowData.url,
			// color : '#EDDA74',
			height : 40,
			backgroundImage : 'images/button/but_url.png',
			width : '90%',
			zIndex : 9,
			bottom : 10
			// top : '110%'
		});

		urlButton.addEventListener('click', function() {
			var winWeb = Titanium.UI.createWindow({
				barColor : '#111',
				height : 'auto',
				width : 'auto'
			});

			var webView = Titanium.UI.createWebView({
				url : 'http://' + e.rowData.url
			});

			winWeb.add(webView);

			winWeb.open({
				animated : true
			});
		});

		// scrollView.add(urlButton);
		if (e.rowData.url != null)
			scrollView.add(urlButton);
		win.add(scrollView);
	});

	self.add(tableview);

	return self;
}

module.exports = itTips;