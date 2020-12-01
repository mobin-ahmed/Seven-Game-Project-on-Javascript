// the driver function:
function psGame(img_object){
    // console.log(img_object.id);
    var myChoice=img_object.id;
    // console.log(myChoice);
    var botChoice=idArray(rndNum());
    // console.log(botChoice);
    var result=generatingScore(myChoice,botChoice);
    // alert(result);
    var winner=getWinner(result);
    // console.log(winner);
    sshow(winner,myChoice,botChoice);
}

// random number generator function:
function rndNum(){
    var x=Math.random()*3;
    var y=Math.floor(x);
    return y;
}

// bot choice selector function:
function idArray(num){
    var x=['rock','paper','scissor'][num];
    return x;
}

// function for the possible ways to generate my and bot score:
function generatingScore(me,bot){
    var database={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    }
    myScore=database[bot][me];
    botScore=database[me][bot];
    return [myScore,botScore];
}

// winner deciding function:
function getWinner(arr){
    if(arr[0]==0) return {'msg':'you won','color':'green'};
    else if(arr[0]==0.5) return {'msg':'you tied','color':'yellow'};
    else return {'msg':'you lost','color':'red'};
}

// result showing function to front end:
function sshow(dic,me,bot){
    var database={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    console.log(me);
    console.log(bot);
    console.log(database['rock']);
    console.log(database['paper']);
    console.log(database['scissor']);

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var myDiv=document.createElement('div');
    var sms=document.createElement('div');
    var botDiv=document.createElement('div');

    myDiv.innerHTML="<img src'" + database[me] + "' alt='You: " + me + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(211, 12, 12);'>";
    sms.innerHTML="<h3 style='color: " + dic['color'] + "; padding: 10px; font-size: 50px;'>" + dic['msg'] + "</h3>";
    botDiv.innerHTML="<img src'" + database[bot] + "' alt='Computer: " + bot + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(211, 12, 12);'>";

    document.getElementById("flexBox").appendChild(myDiv);
    document.getElementById("flexBox").appendChild(sms);
    document.getElementById("flexBox").appendChild(botDiv);

}