document.querySelector('#clear').addEventListener('click',clear);
function clear(){
    let x=document.querySelector('.flex-box-container2').querySelectorAll('h5');
    for(var i=0;i<x.length;i++){
        x[i].remove();
    }
}
document.querySelector('#cross').addEventListener('click',cross);
function cross(){
    document.querySelector('.container').remove();
}
// The Stack:
// necessary functions--> push(),pop(),peek(),length()

var letter=[];
var word="racecar";
var r_word="";
// pushing to stack:
for(var i=  0;i<word.length;i++){
    letter.push(word[i]);
}
// popping from stack:
while(letter.length>0){
    r_word+=letter.pop();
}
// checking the palindrom:
if(word==r_word){
    // console.log(word+" is a palindrom");
    let h5=document.createElement('h5');
    h5.appendChild(document.createTextNode(`${word}`+' is a plaindrom'));
    document.querySelector('.flex-box-container2').appendChild(h5);
}
else{
    // console.log(word+" is not a palindrom");
    let h3=document.createElement('h5');
    h3.appendChild(document.createTextNode(`${word}`+' is not a plaindrom'));
    document.querySelector('.flex-box-container2').appendChild(h3);
}

// Now let implementing the Stack:
var Stack=function(){
    this.count=0;
    this.storage={};

    //pushing the val:
    this.push=function(val){
        this.storage[this.count]=val;
        this.count++;
    }

    // popping the val:
    this.pop=function(){
        if(this.cout==0){
            return undefined
        }
        this.count--;
        var res=this.storage[this.count];
        delete this.storage[this.count];
        return res;
    }

    // getting the size:
    this.size=function(){
        return this.count;
    }

    // getting the peek val:
    this.peek=function(){
        return this.storage[this.count-1];
    }
}

// creating object and calling the functions:
var ms=new Stack();
ms.push(1);
ms.push(2);

let hh=document.createElement('h5');
hh.appendChild(document.createTextNode("peeked value: "+`${ms.peek()}`));
document.querySelector('.flex-box-container2').appendChild(hh);

let h2=document.createElement('h5');
h2.appendChild(document.createTextNode("popped value: "+`${ms.pop()}`));
document.querySelector('.flex-box-container2').appendChild(h2);

let h4=document.createElement('h5');
h4.appendChild(document.createTextNode("peeked value: "+`${ms.peek()}`));
document.querySelector('.flex-box-container2').appendChild(h4);

ms.push("Ariyan Khan(mobinahmed)");

let hh4=document.createElement('h5');
hh4.appendChild(document.createTextNode("stack size: "+`${ms.size()}`));
document.querySelector('.flex-box-container2').appendChild(hh4);

let hh5=document.createElement('h5');
hh5.appendChild(document.createTextNode("peeked value: "+`${ms.peek()}`));
document.querySelector('.flex-box-container2').appendChild(hh5);

let hh2=document.createElement('h5');
hh2.appendChild(document.createTextNode("popped value: "+`${ms.pop()}`));
document.querySelector('.flex-box-container2').appendChild(hh2);

let h4h=document.createElement('h5');
h4h.appendChild(document.createTextNode("peeked value: "+`${ms.peek()}`));
document.querySelector('.flex-box-container2').appendChild(h4h);