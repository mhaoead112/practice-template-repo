function movePlayer() {
    new Promise(resolve => {
        const direction = prompt('Enter Direction');
        let score = 0;
        if(direction == 'right') {
            score += 5;
            console.log(direction)
            resolve(score)
        }else if(direction == 'up') {
            score+= 3;
            console.log(direction)
            resolve(score)
        }else if(direction == 'down') {
            score+=1;
            console.log(direction)
            resolve(score)
        }else if(direction == 'left') {
            score+=2;
            console.log(direction)
            resolve(score)
            
        }else {
            alert('PLease Enter valid direction .... up-right etc..');
        }
        
    }).then (res => console.log(res))
    .catch(err => console.log('Erro handling the promise' , err));
}
movePlayer()