function displayItem (item){
    // console.log(item.previousElementSibling.previousElementSibling);
    // console.log(item.parentElement.childNodes[3]);

    const getText = item.previousElementSibling.previousElementSibling.innerText;

    const li = document.createElement('li');
    li.innerText = getText;

    const ol = document.getElementById('order-list');
    // console.log(ol);
    const liNumber = document.querySelectorAll('#order-list li');
    console.log(liNumber);

    if(ol.childElementCount <=4){
        ol.appendChild(li); 
        item.style.backgroundColor = '#A2A9AF'
        item.setAttribute('disabled', 'true');
    }
    else{
        alert('You can not select more then 5 players');
    }                
}

function playerExpansesCalculate(){
    const playerBudget = document.getElementById('player-budget').value;
    const playerCount = document.getElementById('order-list').childElementCount; 

    const playerExpanses = playerBudget * playerCount;   
    document.getElementById('player-expanses').innerText = playerExpanses;                                
}

function totalExpanseCalculate(){
    const managerExpanse = document.getElementById('manager-expanse').value;
    const coachExpanse = document.getElementById('coach-expanse').value;
    const playerExpanses = document.getElementById('player-expanses').innerText;

    const totalExpanse = (playerExpanses * 1) + (managerExpanse * 1) + (coachExpanse *1);
    document.getElementById('total-expanses').innerText = totalExpanse;     
}
