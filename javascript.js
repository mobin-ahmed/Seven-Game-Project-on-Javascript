function click_me(){
	var by=prompt("Enter your birth year:");
	var bm=prompt("Enter your birth month: ");
	var bd=prompt("Enter your birth day: ");


	var yearDays=(2020-by)*365;
	var monthDays=bm*30;
	var totalDays=yearDays+monthDays+parseInt(bd);

	// console.log(totalDays);


	var h1=document.createElement('h1');
	var ansAsTxt=document.createTextNode('You are '+totalDays+' days old');
	h1.setAttribute('id','idh1');
	h1.appendChild(ansAsTxt);
	document.getElementById('flex-box-result').appendChild(h1);
	document.getElementById('flex-box-result').style='background-color: navy; color: white';
}

function reset(){
	document.getElementById('idh1').remove();
}