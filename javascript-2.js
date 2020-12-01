// challange-2: Click_For_Image:

//step-1: creating the function for adding the images in the div box

function cfm(){
    var img=document.createElement('img');
    var catchDiv=document.getElementById('targetImgBox');
    img.src='img1.jpg';
    catchDiv.appendChild(img);
}

//step-2: creating the function for removing the img from the div box:

function cfmRemove(){
    document.getElementById('targetImgBox').remove();
    var h2=document.createElement('h2');
    var txt=document.createTextNode('Say Love You to Ariyan Khan');
    h2.appendChild(txt);
    h2.setAttribute('id','idh2');
    document.getElementById('mm').appendChild(h2);
    document.getElementById('idh2').style.color='pink';
}