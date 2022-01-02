function openWindow() {

	var url1 = document.getElementById("address1").value;
	var url2 = document.getElementById("address2").value;
	var url3 = document.getElementById("address3").value;
	var url4 = document.getElementById("address4").value;
	var url5 = document.getElementById("address5").value;
	
	if (url1 != ""){
		window.open("https://" + url1 ,"_blank",'Popup1', 'fullscreen=yes,toolbar=no,location=no,directories=no, status=no,menubar=no,scrollbars=no,resizable=no');
	}
	if (url2 != ""){
	window.open("https://" + url2 ,"_blank",'Popup2', 'fullscreen=yes,toolbar=no,location=no,directories=no, status=no,menubar=no,scrollbars=no,resizable=no');
	}
	if (url3 != ""){
	window.open("https://" + url3 ,"_blank",'Popup3', 'fullscreen=yes,toolbar=no,location=no,directories=no, status=no,menubar=no,scrollbars=no,resizable=no');
	}
	if (url4 != ""){
	window.open("https://" + url4 ,"_blank",'Popup4', 'fullscreen=yes,toolbar=no,location=no,directories=no, status=no,menubar=no,scrollbars=no,resizable=no');
	}
	if (url5 != ""){
	window.open("https://" + url5 ,"_blank",'Popup5', 'fullscreen=yes,toolbar=no,location=no,directories=no, status=no,menubar=no,scrollbars=no,resizable=no');
	}
}