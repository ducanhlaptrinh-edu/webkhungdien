function init() {
	var giftBox = document.getElementsByTagName("button");
	console.log(giftBox.length)
	for (i=0 ; i<giftBox.length ; i++) {
		giftBox[i].onclick = openGift;
	var convert = document.getElementById('convert_button');
	convert.onclick = convert_money;
	}
}

function convert_money() {
	usd = prompt("Enter USD : ");
	vnd = 23.5 * usd;
	change_content(usd , vnd );
}

function change_content(usd , vnd ) {
	var content = document.getElementById('text_content');
	content.innerHTML = "Cậu thích " + usd + " USD hay là thích tôi ?????";
}

function openGift() {
	alert("Duc Anh siu cuteeeeeeeeeeeeeeeeeeee")
	appear_gift()
}

function appear_gift() {
	var img = document.getElementById("gift_here");
	img.innerHTML = '<img src ="img4.2.jpg" alt="Làm ngiu mình nhaaaaaaaa" width="300">';
	var gift = document.getElementById("gift_content");
	gift.innerHTML = "Làm ngiu mình nhaaaaaaaaa ,xin cậu đó"
}

window.onload = init ;