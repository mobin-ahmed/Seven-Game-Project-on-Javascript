blackJackGame={
    'carts':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'you':{'id':'you','score':0,'scoreSpan':'#yourScore'},
    'cartValue':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'hitBtnOff':false,
    'computer':{'id':'dealer','score':0,'scoreSpan':'#dealerScore'},
    'lose':0,
    'win':0,
    'draw':0,
    'gameOver':false,
}
// The player is you as follows:
let hit=blackJackGame['you'];
let hitSound=new Audio('you.m4a');
function blackJackHit(){
    if(blackJackGame['hitBtnOff']==false){
        hitSound.play();
        let rndmCart=randomCartGenerator();
        showCart(rndmCart,hit);
        getScore(rndmCart,hit);
        // console.log(blackJackGame['you']['score']);
        showScore(hit);
    }
}
function randomCartGenerator(){
    let x=Math.floor(Math.random()*13);
    return blackJackGame['carts'][x];
}
function showCart(rndmCart,hitOrStand){
    let h1Cart=document.createElement('h1');
    let txt=document.createTextNode(rndmCart);
    console.log(txt);
    h1Cart.appendChild(txt);
    h1Cart.style='color: red; height: 100px; width: 50px; float:left; background-color: cyan; margin: 10px';
    document.getElementById(hitOrStand['id']).appendChild(h1Cart);
}
function getScore(rndmCart,hitOrStand){
    let x=blackJackGame['cartValue'];
    if(rndmCart=='A'){
        if(hitOrStand['score']+x[rndmCart][1]<=21)
            hitOrStand['score']+=x[rndmCart][1];
        else hitOrStand['score']+=x[rndmCart][0];
    }
    else hitOrStand['score']+=x[rndmCart];
}
function showScore(hitOrStand){
    if(hitOrStand['score']<=21){
        document.querySelector(hitOrStand['scoreSpan']).textContent=hitOrStand['score'];
    }
    else{
        document.querySelector(hitOrStand['scoreSpan']).textContent="stop!";
        document.querySelector(hitOrStand['scoreSpan']).style.color='yellow';
    }
}
// The player is Computer as follows:
document.querySelector('#stand').addEventListener('click',blackJackStand);
let stand=blackJackGame['computer'];
let standSound=new Audio('you.m4a');
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function blackJackStand(){
    blackJackGame['hitBtnOff']=true;
    while(stand['score']<=15 && blackJackGame['hitBtnOff']==true){
        standSound.play();
        let rndmCart=randomCartGenerator();
        // console.log(rndmCart)
        showCart(rndmCart,stand);
        getScore(rndmCart,stand);
        showScore(stand);
        await sleep(1000);
    }
    if(stand['score']>15){
        showWinner(findWinner());
        blackJackGame['gameOver']=true;
    }
}
// Finding the winner and showing:
function findWinner(){
    if(hit['score']<stand['score'] && stand['score']<=21){
        blackJackGame['lose']++;
        return "Losser";
    }
    else if(hit['score']>stand['score'] && hit['score']<=21){
        blackJackGame['win']++;
        return "Winner";
    }
    else{
        blackJackGame['draw']++;
        return "draw";
    }
}
function showWinner(result){
    if(result=="Losser"){
        document.querySelector('#result').textContent=result;
        document.querySelector('#result').style.color='red';
        document.querySelector('#losser').textContent=blackJackGame['lose'];
    }
    else if(result=="Winner"){
        document.querySelector('#result').textContent=result;
        document.querySelector('#result').style.color='white';
        document.querySelector('#winner').textContent=blackJackGame['win'];
    }
    else{
        document.querySelector('#result').textContent=result;
        document.querySelector('#result').style.color='yellow';
        document.querySelector('#draw').textContent=blackJackGame['draw'];
    }
}
// Refreshing with Deal button:
document.querySelector('#deal').addEventListener('mouseover',blackJackDeal);
function blackJackDeal(){
    if(blackJackGame['gameOver']==true){
        document.querySelector('#result').textContent='Ariyan Khan(mobinahmed)';
        document.getElementById('result').style.color='black';
        document.querySelector('#yourScore').textContent=0;
        document.getElementById('yourScore').style.color='white';
        document.querySelector('#dealerScore').textContent=0;
        document.getElementById('dealerScore').style.color='white';
        let youh1=document.querySelector('#you').querySelectorAll('h1');
        for(var i=0;i<youh1.length;i++){
            youh1[i].remove();
        }
        let computerh1=document.querySelector('#dealer').querySelectorAll('h1');
        for(var i=0;i<computerh1.length;i++){
            computerh1[i].remove();
        }
        hit['score']=0;
        stand['score']=0;
        blackJackGame['hitBtnOff']=false;
        blackJackGame['gameOver']=false;
    }
}