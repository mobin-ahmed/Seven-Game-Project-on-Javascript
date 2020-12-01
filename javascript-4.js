let allBtns=document.getElementsByTagName('button');
//console.log(allBtns);
let allBtnsCopy=[];
for(let i=0;i<allBtns.length;i++){
    allBtnsCopy.push(allBtns[i].classList[1]);
}
// console.log(allBtnsCopy);
// This is the main function:
function cbc(selectObj){
    // console.log(selectObj);
    // console.log(selectObj.value);
    if(selectObj.value==='red'){
        doBtnRed();
    }
    else if(selectObj.value==='green'){
        doBtnGreen();
    }
    else if(selectObj.value==='random'){
        doRndColor();
    }
    else if(selectObj.value==='reset'){
        doBtnReset();
    }
}

// function for do all buttons color red:
function doBtnRed(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add('btn-danger');
    }
}

// function for do all buttons color green:
function doBtnGreen(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add('btn-success');
    }
}

// function for do all buttons to random color:
function doRndColor(){
    database=['btn-dark','btn-primary','btn-success','btn-danger'];
    for(let i=0;i<allBtns.length;i++){
        let x=Math.floor(Math.random()*4);
        let y=database[x];
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add(y);
    }

}

// functtion for do all buttons to reset:
function doBtnReset(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add(allBtnsCopy[i]);
    }
}