// learning the Ajax:
const url='https://randomuser.me/api/?results=10';
fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
        let user=data.results;
        console.log(user);
        for(var i=0;i<user.length;i++){
            let userDiv=document.createElement('div');
            let userImg=document.createElement('img');
            let userP=document.createElement('h4');
            userP.appendChild(document.createTextNode(`${title(user[i].name.first)} ${title(user[i].name.last)}`));
            userImg.src=user[i].picture.large;
            userDiv.appendChild(userImg);
            userDiv.appendChild(userP);
            document.querySelector('.flex-box-container').appendChild(userDiv);
        }
    });


// const url='https://randomuser.me/api/?results=10';
// fetch(url)
//     .then(resp=>resp.json())
//     .then(data=>{
//         let user=data.results;
//         for(var i=0;i<user.length;i++){
//             let userDiv=document.createElement('div');
//             let userImg=document.createElement('img');
//             let userP=document.createElement('p');
//             userImg.src=user[i].pciture.large;
//             userP.appendChild(document.createTextNode(`${user[i].name.first} ${user[i].name.last}`));
//             userDiv.appendChild(userImg);
//             userDiv.appendChild(userP);
//             document.querySelector('.flex-box-container').appendChild(userDiv);
//         }
//     });
