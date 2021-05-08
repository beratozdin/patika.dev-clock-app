function returnDate(){

	var time=new Date();
	var Hour,Minute,Second;
	var Days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

	if(time.getHours()<10){

		Hour='0'+time.getHours().toString();
	}
	else{

		Hour=time.getHours().toString();
	}

	if(time.getMinutes()<10){

		Minute='0'+time.getMinutes().toString();
	}
	else{
		Minute=time.getMinutes().toString();
	}

	if(time.getSeconds()<10){

		Second='0'+ time.getSeconds().toString();
	}
	else{
		Second=time.getSeconds().toString();
	}

	document.getElementById("heading").innerHTML =Hour+":"+Minute+":"+Second+" "+Days[time.getDay()];
}
function setName(){
	var nameValue = window.prompt("İsminizi giriniz:");
    document.getElementById("name").innerHTML="Merhaba, "+nameValue+"!  "+"Hoş geldin!";
}


returnDate();
setInterval(returnDate, 1000);

setName();
