// challange-5: (lets play cart game)

// document.querySelector('blackjack-hit-button').addEventListener('click',blackjackhit);
// function blackjackhit(){
//     console.log('Ariyan Khan');
// }

let cartGame={
    'you':{'scoreSpan':'#your-cartgame-result','div':'your-box','score':0},
    'computer':{'scoreSpan':'#computer-cartgame-result','div':'computer-box','score':0},
    'carts':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cartMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'win':0,
    'lose':0,
    'draw':0,
    'isStand':false,
    'turnsOver':false,
};
const you=cartGame['you'];
const computer=cartGame['computer'];
const cartSound=new Audio('cartSound.m4a');

function cartGameYou(){
    if(cartGame['isStand']==false){
        // showCart(you);
        // showCart(computer);
        let cart=chooseRandomCart();
        // console.log(cart);
        showCart(cart,you);
        updateScore(you,cart);
        // console.log(you['score']);
        showCurrScore(you);
    }

}

function chooseRandomCart(){
    let x=Math.floor(Math.random()*13);
    return cartGame['carts'][x];
}

function showCart(rndmCart,youorcomObj){
    if(youorcomObj['score']<=21){
        // console.log(rndmCart);
        // let image=document.createElement('img');
        // image.src='img' + rndmCart + '.jpg';//or image.src=`img${rndmCart}.jpg`;
        // image.height=150;
        // image.width=100;
        // document.getElementById(youorcomObj['div']).appendChild(image);
        // youSound.play();


        let cartspan=document.createElement('h1');
        let txt=document.createTextNode(rndmCart);
        cartspan.setAttribute('id','idspan');
        cartspan.appendChild(txt);
        cartspan.style='color:darkred; background-color:white; height:100px; width:70px; text-align:left; margin:10px; float:left';
        document.getElementById(youorcomObj['div']).appendChild(cartspan);
        cartSound.play();
    }
}


document.querySelector('#refresh').addEventListener('click',cartGameRefresh);
function cartGameRefresh(){
    if(cartGame['turnsOver']==true){
        cartGame['isStand']=false;
        // showWinner(findWinner());
        let allimgyou=document.querySelector('#your-box').querySelectorAll('h1');// its return images of an array
        // console.log(allimg);
        // allimg[0].remove();
        for(let i=0;i<allimgyou.length;i++){
            allimgyou[i].remove();
        }

        let allimgcom=document.querySelector('#computer-box').querySelectorAll('h1');
        for(let i=0;i<allimgcom.length;i++){
            allimgcom[i].remove();
        }

        you['score']=0;
        document.querySelector(you['scoreSpan']).textContent=0;
        document.querySelector(you['scoreSpan']).style.color='#000000';

        computer['score']=0;
        document.querySelector(computer['scoreSpan']).textContent=0;
        document.querySelector(computer['scoreSpan']).style.color='#000000';

        cartGame['turnsOver']=true;
    }
}

function updateScore(player,cart){
    if(cart=='A'){
        if(player['score']+cartGame['cartMap'][cart][1]<=21){
            player['score']+=cartGame['cartMap'][cart][1];
        }
        else{
            player['score']+=cartGame['cartMap'][cart][0];
        }
    }
    else{
        player['score']+=cartGame['cartMap'][cart];
    }
}

function showCurrScore(youorcomObj){
    if(youorcomObj['score']<=21){
        document.querySelector(youorcomObj['scoreSpan']).textContent=youorcomObj['score'];
    }
    else{
        document.querySelector(youorcomObj['scoreSpan']).textContent="BANKRUPT!!";
        document.querySelector(youorcomObj['scoreSpan']).style.color='darkred';
    }
}

document.querySelector('#computer').addEventListener('click',cartGameComputer);
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function cartGameComputer(){
    cartGame['isStand']=true;
    while(computer['score']<16 && cartGame['isStand']==true){
        let cart=chooseRandomCart()
        showCart(cart,computer);
        updateScore(computer,cart)
        showCurrScore(computer);
        await sleep(1000);
    }
    if(computer['score']>15){
        cartGame['turnsOver']=true;
        showWinner(findWinner());
        //console.log(cartGame['turnsOver']);
    }
}

function findWinner(){
    let result;
    if(you['score']<=21){
        if(you['score']>computer['score'] || (computer['score']>21)){
            // console.log('Hurrah! You have won.');
            result=you;
            cartGame['win']++;
            document.querySelector('#win').textContent=cartGame['win'];
        }
        else if(you['score']<computer['score']){
            // console.log('Alas! You have lost.');
            result=computer;
            cartGame['lose']++;
            document.querySelector('#lose').textContent=cartGame['lose'];

        }
        else if(you['score']==computer['score']){
            // console.log('drawed');
            cartGame['draw']++;
            document.querySelector('#draw').textContent=cartGame['draw'];

        }
    }

    else{
        if(computer['score']>21){
            // console.log('drawed');
            cartGame['draw']++;
            document.querySelector('#draw').textContent=cartGame['draw'];

        }
        else if(computer['score']<=21){
            // console.log('Alas! You have lost.');
            result=computer;
            cartGame['lose']++;
            document.querySelector('#lose').textContent=cartGame['lose'];

        }   
    }
    // console.log(result);
    // console.log(cartGame);
    return result;
}


let winSound=new Audio('winSound.m4a');
let loseSound=new Audio('loseSound.m4a');
function showWinner(youorcomObj){
    if(cartGame['turnsOver']==true){
        if(youorcomObj==you){
            document.querySelector('#heading').textContent='Winner';
            document.querySelector('#heading').style.color='green';
            winSound.play();
        }
        else if(youorcomObj==computer){
            document.querySelector('#heading').textContent='Loser';
            document.querySelector('#heading').style.color='red';
            loseSound.play();
        }
        else{
            document.querySelector('#heading').textContent='Drawn';
            document.querySelector('#heading').style.color='yellow';
        }
    }
}